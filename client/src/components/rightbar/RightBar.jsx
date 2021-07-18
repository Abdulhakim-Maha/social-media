import React, { useEffect, useState } from "react";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import classes from "./RightBar.module.css";
import axios from "axios";

function RightBar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/user/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user._id]);
  console.log(friends)

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
            <div className={classes.rightbarFollowing}>
              <img
                src={friend.profilePicture ? PF + friend.profilePicture : PF + "person/noAvatar.png"}
                alt=""
                className={classes.rightbarFollowingImg}
              />
              <span className={classes.rightbarFollowingName}>
                {friend.username}
              </span>
            </div>
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
