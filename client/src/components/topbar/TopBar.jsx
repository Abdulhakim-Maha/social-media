import React, { useContext } from "react";
import classes from "./TopBar.module.css";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import { Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/auth-context'

function TopBar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className={classes.topbarContainer}>
      <div className={classes.topbarLeft}>
        <Link to="/" className={classes.link}>
          <span className={classes.logo}>Faisbook</span>
        </Link>
      </div>
      <div className={classes.topbarCenter}>
        <div className={classes.searchBar}>
          <SearchIcon className={classes.searchIcon} />
          <input
            type="text"
            placeholder="Search for friend, post or video"
            className={classes.searchInput}
          />
        </div>
      </div>
      <div className={classes.topbarRight}>
        <div className={classes.topbarLinks}>
          <span className={classes.topbarLink}>Homepage</span>
          <span className={classes.topbarLink}>Timeline</span>
        </div>
        <div className={classes.topbarIcons}>
          <div className={classes.topbarIconItem}>
            <PersonIcon />
            <span className={classes.topbarIconBadge}>1</span>
          </div>
          <div className={classes.topbarIconItem}>
            <Chat />
            <span className={classes.topbarIconBadge}>2</span>
          </div>
          <div className={classes.topbarIconItem}>
            <Notifications />
            <span className={classes.topbarIconBadge}>1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={user.profilePicture || PF + "person/noAvatar.png"}
            alt=""
            className={classes.topbarImg}
          />
        </Link>
      </div>
    </div>
  );
}

export default TopBar;
