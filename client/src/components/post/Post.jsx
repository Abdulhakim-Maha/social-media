import React,{useState} from "react";
import classes from "./Post.module.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";

const Post = (props) => {
  const [like, setLike] = useState(props.post.like)
  const [isLiked, setIsLiked] = useState(false)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const user = Users.find((user) => user.id === props.post.userId);

  const likeHandler = () => {
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(prev => !prev)
  }

  return (
    <div className={classes.post}>
      <div className={classes.postWrapper}>
        <div className={classes.postTop}>
          <div className={classes.postTopLeft}>
            <img
              src={PF + 'person/1.jpeg'}
              alt=""
              className={classes.postProfileImg}
            />
            <span className={classes.postUsername}>{user.username}</span>
            <span className={classes.postDate}>{props.post.date}</span>
          </div>
          <div className={classes.postTopRight}>
            <MoreVert />
          </div>
        </div>
        <div className={classes.postCenter}>
          <span className={classes.postText}>{props.post?.desc}</span>
          <img src={PF + props.post.photo} alt="" className={classes.postImg} />
        </div>
        <div className={classes.postBottom}>
          <div className={classes.postBottomLeft}>
            <img src={`${PF}like.png`}alt="" className={classes.likeIcon} onClick={likeHandler} />
            <img src={`${PF}heart.png`} alt="" className={classes.likeIcon} onClick={likeHandler} />
            <span className={classes.postLikeCounter}>{like}</span>
          </div>
          <div className={classes.postBottomRight}>
            <span className={classes.postCommentText}>{props.post.comment}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
