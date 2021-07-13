import React from "react";
import classes from './Online.module.css'

const Online = (props) => {
  return (
    <div>
      <li className={classes.OnlineFriend}>
        <div className={classes.OnlineProfileImgContainer}>
          <img
            src={props.user.profilePicture}
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
