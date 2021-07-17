import React, { useState, useEffect, useContext } from "react";
import classes from "./Feed.module.css";
import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";
import { AuthContext } from "../../context/auth-context";

function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/post/profile/" + username)
        : await axios.get("/post/timeline/" + user._id);
      // console.log(res)
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className={classes.feed}>
      <div className={classes.feedWrapper}>
        <Share />
        {posts.map((post) => {
          return <Post post={post} key={post._id} />;
        })}
      </div>
    </div>
  );
}

export default Feed;
