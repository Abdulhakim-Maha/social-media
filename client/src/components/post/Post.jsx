import React from "react";
import classes from "./Post.module.css";
import { MoreVert } from "@material-ui/icons";

function Post() {
  return (
    <div className={classes.post}>
      <div className={classes.postWrapper}>
        <div className={classes.postTop}>
          <div className={classes.postTopLeft}>
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className={classes.postProfileImg}
            />
            <span className={classes.postUsername}>Fais Nuanmee</span>
            <span className={classes.postDate}>5 mins ago</span>
          </div>
          <div className={classes.postTopRight}>
            <MoreVert />
          </div>
        </div>
        <div className={classes.postCenter}>
          <span className={classes.postText}>This is my first post!!</span>
          <img src="/assets/post/1.jpeg" alt="" className={classes.postImg} />
        </div>
        <div className={classes.postBottom}>
          <div className={classes.postBottomLeft}>
            <img src="/assets/like.png" alt="" className={classes.likeIcon} />
            <img src="/assets/heart.png" alt="" className={classes.likeIcon} />
            <span className={classes.postLikeCounter}>22 people like it</span>
          </div>
          <div className={classes.postBottomRight}>
			  <span className={classes.postCommentText}>3 comments</span>
		  </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
