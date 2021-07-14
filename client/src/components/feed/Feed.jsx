import React, { useState, useEffect } from "react";
import classes from "./Feed.module.css";
import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/post/timeline/60eaf06424fad6353cce666c")
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        setPosts(resData)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={classes.feed}>
      <div className={classes.feedWrapper}>
        <Share />
        {posts.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
}

export default Feed;
