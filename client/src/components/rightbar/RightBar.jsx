import React from "react";
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
          <li className={classes.rightbarFriend}>
            <div className={classes.rightbarProfileImgContainer}>
              <img
                src="/assets/person/3.jpeg"
                alt=""
                className={classes.rightbarProfileImg}
              />
			  <span className={classes.rightbarOnline}></span>
            </div>
			<span className={classes.rightbarUsername}>NonYeey</span>
          </li>
          <li className={classes.rightbarFriend}>
            <div className={classes.rightbarProfileImgContainer}>
              <img
                src="/assets/person/3.jpeg"
                alt=""
                className={classes.rightbarProfileImg}
              />
			  <span className={classes.rightbarOnline}></span>
            </div>
			<span className={classes.rightbarUsername}>NonYeey</span>
          </li>
          <li className={classes.rightbarFriend}>
            <div className={classes.rightbarProfileImgContainer}>
              <img
                src="/assets/person/3.jpeg"
                alt=""
                className={classes.rightbarProfileImg}
              />
			  <span className={classes.rightbarOnline}></span>
            </div>
			<span className={classes.rightbarUsername}>NonYeey</span>
          </li>
          <li className={classes.rightbarFriend}>
            <div className={classes.rightbarProfileImgContainer}>
              <img
                src="/assets/person/3.jpeg"
                alt=""
                className={classes.rightbarProfileImg}
              />
			  <span className={classes.rightbarOnline}></span>
            </div>
			<span className={classes.rightbarUsername}>NonYeey</span>
          </li>
          <li className={classes.rightbarFriend}>
            <div className={classes.rightbarProfileImgContainer}>
              <img
                src="/assets/person/3.jpeg"
                alt=""
                className={classes.rightbarProfileImg}
              />
			  <span className={classes.rightbarOnline}></span>
            </div>
			<span className={classes.rightbarUsername}>NonYeey</span>
          </li>
          <li className={classes.rightbarFriend}>
            <div className={classes.rightbarProfileImgContainer}>
              <img
                src="/assets/person/3.jpeg"
                alt=""
                className={classes.rightbarProfileImg}
              />
			  <span className={classes.rightbarOnline}></span>
            </div>
			<span className={classes.rightbarUsername}>NonYeey</span>
          </li>
          <li className={classes.rightbarFriend}>
            <div className={classes.rightbarProfileImgContainer}>
              <img
                src="/assets/person/3.jpeg"
                alt=""
                className={classes.rightbarProfileImg}
              />
			  <span className={classes.rightbarOnline}></span>
            </div>
			<span className={classes.rightbarUsername}>NonYeey</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RightBar;
