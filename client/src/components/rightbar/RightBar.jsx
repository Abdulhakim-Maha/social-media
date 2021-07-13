import React from "react";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import classes from "./RightBar.module.css";

function RightBar() {
  return (
    <div className={classes.rightbar}>
      <div className={classes.rightbarWrapper}>
        <div className={classes.birthdayContainer}>
          <img src="/assets/gift.png" alt="" className={classes.birthdayImg} />
          <span className={classes.birthdayText}>
            <b>Fais Saleang</b> has a birthday today
          </span>
        </div>
        <img src="/assets/adver.jpg" alt="" className={classes.rightbarAd} />
        <h4 className={classes.rightbarTitle}>Online Friends</h4>
        <ul className={classes.rightbarFriendList}>
          {Users.map(user => {
            return <Online key={user.id} user={user} />
          })}
        </ul>
      </div>
    </div>
  );
}

export default RightBar;
