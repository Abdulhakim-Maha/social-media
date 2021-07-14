import React from "react";
import classes from './Online.module.css'

const Online = (props) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
      <li className={classes.OnlineFriend}>
        <div className={classes.OnlineProfileImgContainer}>
          <img
            src={PF + props.user.profilePicture}
            alt=""
            className={classes.OnlineProfileImg}
          />
          <span className={classes.Online}></span>
        </div>
        <span className={classes.OnlineUsername}>{props.user.username}</span>
      </li>
    </div>
  );
};

export default Online;
