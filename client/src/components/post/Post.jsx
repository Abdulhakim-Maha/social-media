import React, { useState, useEffect } from "react";
import classes from "./Post.module.css";
import { MoreVert } from "@material-ui/icons";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from 'react-router-dom'

const Post = (props) => {
  const [like, setLike] = useState(props.post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // const user = Users.find((user) => user.id === props.post.userId);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/user/${props.post.userId}`);
      // console.log(res)
      setUser(res.data);
    };
    fetchUser();
  }, [props.post.userId]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked((prev) => !prev);
  };

  return (
    <div className={classes.post}>
      <div className={classes.postWrapper}>
        <div className={classes.postTop}>
          <div className={classes.postTopLeft}>
            <Link to={`/profile/${user.username}`} >
              <img
                src={user.profilePicture || PF + "person/person.png"}
                alt=""
                className={classes.postProfileImg}
              />
            </Link>
            <span className={classes.postUsername}>{user.username}</span>
            <span className={classes.postDate}>
              {format(props.post.createdAt)}
            </span>
          </div>
          <div className={classes.postTopRight}>
            <MoreVert />
          </div>
        </div>
        <div className={classes.postCenter}>
          <span className={classes.postText}>{props.post?.description}</span>
          <img src={props.post.image} alt="" className={classes.postImg} />
        </div>
        <div className={classes.postBottom}>
          <div className={classes.postBottomLeft}>
            <img
              src={`${PF}like.png`}
              alt=""
              className={classes.likeIcon}
              onClick={likeHandler}
            />
            <img
              src={`${PF}heart.png`}
              alt=""
              className={classes.likeIcon}
              onClick={likeHandler}
            />
            <span className={classes.postLikeCounter}>
              {like + " people like"}
            </span>
          </div>
          <div className={classes.postBottomRight}>
            <span className={classes.postCommentText}>
              {props.post.comment}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
