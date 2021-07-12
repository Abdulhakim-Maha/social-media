import React from "react";
import TopBar from "../../components/topbar/TopBar";
import SideBar from "../../components/sidebar/SideBar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";

import classes from './Home.module.css'

const Home = () => {
  return (
    <React.Fragment>
      <TopBar />
      <div className={classes.homeContainer}>
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </React.Fragment>
  );
};

export default Home;
