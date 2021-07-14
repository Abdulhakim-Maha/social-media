import React from "react";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import classes from "./RightBar.module.css";

function RightBar({ profile }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
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
            <span className={classes.rightbarInfoValue}>New York</span>
          </div>
          <div className={classes.rightbarInfoItem}>
            <span className={classes.rightbarInfoKey}>From:</span>
            <span className={classes.rightbarInfoValue}>Madrid</span>
          </div>
          <div className={classes.rightbarInfoItem}>
            <span className={classes.rightbarInfoKey}>Relationship:</span>
            <span className={classes.rightbarInfoValue}>Single</span>
          </div>
        </div>
        <h4 className={classes.rightbarTitle}>User friends</h4>
        <div className={classes.rightbarFollowings}>
          <div className={classes.rightbarFollowing}>
            <img
              src={`${PF}person/1.jpeg`}
              alt=""
              className={classes.rightbarFollowingImg}
            />
            <span className={classes.rightbarFollowingName}>John Carter</span>
          </div>
          <div className={classes.rightbarFollowing}>
            <img
              src={`${PF}person/2.jpeg`}
              alt=""
              className={classes.rightbarFollowingImg}
            />
            <span className={classes.rightbarFollowingName}>John Carter</span>
          </div>
          <div className={classes.rightbarFollowing}>
            <img
              src={`${PF}person/3.jpeg`}
              alt=""
              className={classes.rightbarFollowingImg}
            />
            <span className={classes.rightbarFollowingName}>John Carter</span>
          </div>
          <div className={classes.rightbarFollowing}>
            <img
              src={`${PF}person/4.jpeg`}
              alt=""
              className={classes.rightbarFollowingImg}
            />
            <span className={classes.rightbarFollowingName}>John Carter</span>
          </div>
          <div className={classes.rightbarFollowing}>
            <img
              src={`${PF}person/5.jpeg`}
              alt=""
              className={classes.rightbarFollowingImg}
            />
            <span className={classes.rightbarFollowingName}>John Carter</span>
          </div>
          <div className={classes.rightbarFollowing}>
            <img
              src={`${PF}person/6.jpeg`}
              alt=""
              className={classes.rightbarFollowingImg}
            />
            <span className={classes.rightbarFollowingName}>John Carter</span>
          </div>
        </div>
      </React.Fragment>
    );
  };

  return (
    <div className={classes.rightbar}>
      <div className={classes.rightbarWrapper}>
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default RightBar;
