import React, { useContext, useRef, useState } from "react";
import classes from "./Share.module.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import { AuthContext } from "../../context/auth-context";
import axios from 'axios'

function Share() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const description = useRef()
  const [file, setFile] = useState(null)

  const submitHandler = async (event) => {
    event.preventDefault()
    const newPost = {
      userId : user._id,
      description : description.current.value,
    }
    try{
      await axios.post("/post", newPost);
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className={classes.share}>
      <div className={classes.shareWrapper}>
        <div className={classes.shareTop}>
          <img
            src={user.profilePicture || PF + "person/noAvatar.png"}
            alt=""
            className={classes.shareProfileImg}
          />
          <input
            type="text"
            className={classes.shareInput}
            ref={description}
            placeholder={`What's in your mind ${user.username} ?`}
          />
        </div>
        <hr className={classes.shareHr} />
        <form className={classes.shareBottom} onSubmit={submitHandler} >
          <div className={classes.shareOptions}>
            <label htmlFor="file" className={classes.shareOption}>
              <PermMedia htmlColor="#229954" className={classes.shareIcon} />
              <span className={classes.shareOptionText}>Photo/Video</span>
              <input style={{ display: "none"}} type="file" id="file" accept=".png, .jpeg, .jpg" onChange={(e) => setFile(e.target.files[0])} />
            </label>
            <div className={classes.shareOption}>
              <Label htmlColor="#E74C3C" className={classes.shareIcon} />
              <span className={classes.shareOptionText}>Tag</span>
            </div>
            <div className={classes.shareOption}>
              <Room htmlColor="#3498DB" className={classes.shareIcon} />
              <span className={classes.shareOptionText}>Location</span>
            </div>
            <div className={classes.shareOption}>
              <EmojiEmotions
                htmlColor="#F1C40F"
                className={classes.shareIcon}
              />
              <span className={classes.shareOptionText}>Feelings</span>
            </div>
          </div>
          <button type="submit" className={classes.shareButton}>Post</button>
        </form>
      </div>
    </div>
  );
}

export default Share;
