import React from "react";
import classes from "./SideBar.module.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";

function SideBar() {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarWrapper}>
        <ul className={classes.sidebarList}>
          <li className={classes.sidebarListItem}>
            <RssFeed className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Feed</span>
          </li>
          <li className={classes.sidebarListItem}>
            <Chat className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Chats</span>
          </li>
          <li className={classes.sidebarListItem}>
            <PlayCircleFilledOutlined className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Videos</span>
          </li>
          <li className={classes.sidebarListItem}>
            <Group className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Groups</span>
          </li>
          <li className={classes.sidebarListItem}>
            <Bookmark className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Bookmarks</span>
          </li>
          <li className={classes.sidebarListItem}>
            <HelpOutline className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Questions</span>
          </li>
          <li className={classes.sidebarListItem}>
            <WorkOutline className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Jobs</span>
          </li>
          <li className={classes.sidebarListItem}>
            <Event className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Events</span>
          </li>
          <li className={classes.sidebarListItem}>
            <School className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Courses</span>
          </li>
        </ul>
		<button className={classes.sidebarButton}>Show More</button>
		<hr className={classes.sidebarHr} />
		<ul className={classes.sidebarFriendList}>
			<li className={classes.sidebarFriend}>
				<img src="/assets/person/7.jpeg" alt="" className={classes.sidebarFriendImg} />
				<span className={classes.sidebarFriendName}>Fais Saleang</span>
			</li>
			<li className={classes.sidebarFriend}>
				<img src="/assets/person/7.jpeg" alt="" className={classes.sidebarFriendImg} />
				<span className={classes.sidebarFriendName}>Fais Saleang</span>
			</li>
			<li className={classes.sidebarFriend}>
				<img src="/assets/person/7.jpeg" alt="" className={classes.sidebarFriendImg} />
				<span className={classes.sidebarFriendName}>Fais Saleang</span>
			</li>
			<li className={classes.sidebarFriend}>
				<img src="/assets/person/7.jpeg" alt="" className={classes.sidebarFriendImg} />
				<span className={classes.sidebarFriendName}>Fais Saleang</span>
			</li>
			<li className={classes.sidebarFriend}>
				<img src="/assets/person/7.jpeg" alt="" className={classes.sidebarFriendImg} />
				<span className={classes.sidebarFriendName}>Fais Saleang</span>
			</li>
			<li className={classes.sidebarFriend}>
				<img src="/assets/person/7.jpeg" alt="" className={classes.sidebarFriendImg} />
				<span className={classes.sidebarFriendName}>Fais Saleang</span>
			</li>
		</ul>
      </div>
    </div>
  );
}

export default SideBar;
