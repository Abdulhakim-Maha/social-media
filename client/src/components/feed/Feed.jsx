import React from "react";
import classes from "./Feed.module.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../dummyData";

function Feed() {
  return (
    <div className={classes.feed}>
      <div className={classes.feedWrapper}>
        <Share />
        {Posts.map((post) => {
          return (
            <Post
              key={post.id}
              userId={post.userId}
              photo={post.photo}
              date={post.date}
              comment={post.comment}
              like={post.like}
              desc={post.desc}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Feed;
