import React from "react";
import classes from './Friends.module.css'

const Friends = (props) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
      <li className={classes.Friend}>
        <img
          src={PF + props.user.profilePicture}
          alt=""
          className={classes.FriendImg}
        />
        <span className={classes.FriendName}>{props.user.username}</span>
      </li>
    </div>
  );
};

export default Friends;
