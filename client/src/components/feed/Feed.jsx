import React, { useState, useEffect } from "react";
import classes from "./Feed.module.css";
import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";
import { Posts } from "../../dummyData";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/post/timeline/60eaf06424fad6353cce666c");
      // console.log(res)
      setPosts(res.data);
    };
    fetchPosts();
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
