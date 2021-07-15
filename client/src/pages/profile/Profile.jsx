import React from "react";
import TopBar from "../../components/topbar/TopBar";
import Feed from "../../components/feed/Feed";
import SideBar from "../../components/sidebar/SideBar";
import RightBar from "../../components/rightbar/RightBar";
import classes from "./Profile.module.css";

const Profile = (props) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
      <React.Fragment>
        <TopBar />
        <div className={classes.profile}>
          <SideBar />
          <div className={classes.profileRight}>
            <div className={classes.profileRightTop}>
              <div className={classes.profileCover}>
                <img
                  src={`${PF}/post/3.jpeg`}
                  alt=""
                  className={classes.profileCoverImg}
                />
                <img
                  src={`${PF}/person/2.jpeg`}
                  alt=""
                  className={classes.profileUserImg}
                />
              </div>
			  <div className={classes.profileInfo}>
				  <h4 className={classes.profileInfoName}>austiniqer</h4>
				  <span className={classes.profileInfoDesc}>Hello my friends</span>
			  </div>
            </div>
            <div className={classes.profileRightBottom}>
              <Feed username="austiniqer"/>
              <RightBar profile />
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};

export default Profile;
