import React from "react";
import classes from "./Post.module.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";

const Post = (props) => {
  const username = Users.find((user) => user.id === props.userId).username;
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
            <span className={classes.postUsername}>{username}</span>
            <span className={classes.postDate}>{props.date}</span>
          </div>
          <div className={classes.postTopRight}>
            <MoreVert />
          </div>
        </div>
        <div className={classes.postCenter}>
          <span className={classes.postText}>{props?.desc}</span>
          <img src={props.photo} alt="" className={classes.postImg} />
        </div>
        <div className={classes.postBottom}>
          <div className={classes.postBottomLeft}>
            <img src="/assets/like.png" alt="" className={classes.likeIcon} />
            <img src="/assets/heart.png" alt="" className={classes.likeIcon} />
            <span className={classes.postLikeCounter}>{props.like}</span>
          </div>
          <div className={classes.postBottomRight}>
            <span className={classes.postCommentText}>{props.comment}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
