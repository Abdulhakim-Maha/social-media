import React from 'react'
import classes from './TopBar.module.css'
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import {Chat, Notifications} from '@material-ui/icons'

function TopBar() {
	return (
		<div className={classes.topbarContainer}>
			<div className={classes.topbarLeft}>
				<span className={classes.logo}>Faisbook</span>
			</div>
			<div className={classes.topbarCenter}>
				<div className={classes.searchBar}>
					<SearchIcon className={classes.searchIcon} />
					<input type="text" placeholder="Search for friend, post or video"  className={classes.searchInput} />
				</div>
			</div>
			<div className={classes.topbarRight}>
				<div className={classes.topbarLinks}>
					<span className={classes.topbarLink}>Homepage</span>
					<span className={classes.topbarLink}>Timeline</span>
				</div>
				<div className={classes.topbarIcons}>
					<div className={classes.topbarIconItem}>
						<PersonIcon/>
						<span className={classes.topbarIconBadge}>1</span>
					</div>
					<div className={classes.topbarIconItem}>
						<Chat/>
						<span className={classes.topbarIconBadge}>2</span>
					</div>
					<div className={classes.topbarIconItem}>
						<Notifications/>
						<span className={classes.topbarIconBadge}>1</span>
					</div>
				</div>
				<img src="/assets/person/2.jpeg" alt="" className={classes.topbarImg}/>
			</div>
		</div>
	)
}

export default TopBar
