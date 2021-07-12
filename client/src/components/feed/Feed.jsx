import React from "react";
import classes from "./Feed.module.css";
import Share from "../share/Share";
import Post from "../post/Post";

function Feed() {
  return (
    <div className={classes.feed}>
      <div className={classes.feedWrapper}>
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Feed;
