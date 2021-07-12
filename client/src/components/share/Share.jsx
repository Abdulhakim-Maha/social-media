import React from "react";
import classes from "./Share.module.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";

function Share() {
  return (
    <div className={classes.share}>
      <div className={classes.shareWrapper}>
        <div className={classes.shareTop}>
          <img
            src="/assets/person/2.jpeg"
            alt=""
            className={classes.shareProfileImg}
          />
          <input
            type="text"
            className={classes.shareInput}
            placeholder="What's in your mind?"
          />
        </div>
        <hr className={classes.shareHr} />
        <div className={classes.shareBottom}>
          <div className={classes.shareOptions}>
            <div className={classes.shareOption}>
              <PermMedia htmlColor="#229954" className={classes.shareIcon} />
              <span className={classes.shareOptionText}>Photo/Video</span>
            </div>
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
          <button className={classes.shareButton}>Post</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
