import React, { useContext, useEffect, useState } from "react";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import classes from "./RightBar.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/auth-context";
import { Add, Remove } from "@material-ui/icons";

function RightBar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser } = useContext(AuthContext);
  const [followed, setFollowed] = useState(false);

  useEffect(() => {
    console.log('hello')
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/user/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const clickHandler = async () => {
    try {
      if (followed) {
        await axios.put("/user/" + user._id + "/follow", {
          userId: currentUser._id,
        });
      } else {
        await axios.put("/user/" + user._id + "/unfollow", {
          userId: currentUser._id,
        });
      }
    } catch (err) {
      console.log(err);
    }
    setFollowed(!followed);
  };

  const HomeRightbar = () => {
    return (
      <React.Fragment>
        <div className={classes.birthdayContainer}>
          <img className={classes.birthdayImg} src={`${PF}gift.png`} alt="" />
          <span className={classes.birthdayText}>
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className={classes.rightbarAd} src={`${PF}ad.png`} alt="" />
        <h4 className={classes.rightbarTitle}>Online Friends</h4>
        <ul className={classes.rightbarFriendList}>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </React.Fragment>
    );
  };

  const ProfileRightbar = () => {

    return (
      <React.Fragment>
        {user.username !== currentUser.username && (
          <button
            className={classes.rightbarFollowButton}
            onClick={clickHandler}
          >
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        <h4 className={classes.rightbarTitle}>User information</h4>
        <div className={classes.rightbarInfo}>
          <div className={classes.rightbarInfoItem}>
            <span className={classes.rightbarInfoKey}>City:</span>
            <span className={classes.rightbarInfoValue}>{user.city}</span>
          </div>
          <div className={classes.rightbarInfoItem}>
            <span className={classes.rightbarInfoKey}>From:</span>
            <span className={classes.rightbarInfoValue}>{user.from}</span>
          </div>
          <div className={classes.rightbarInfoItem}>
            <span className={classes.rightbarInfoKey}>Relationship:</span>
            <span className={classes.rightbarInfoValue}>
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className={classes.rightbarTitle}>User friends</h4>
        <div className={classes.rightbarFollowings}>
          {friends.map((friend) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className={classes.rightbarFollowing}>
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt=""
                  className={classes.rightbarFollowingImg}
                />
                <span className={classes.rightbarFollowingName}>
                  {friend.username}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </React.Fragment>
    );
  };

  return (
    <div className={classes.rightbar}>
      <div className={classes.rightbarWrapper}>
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default RightBar;
