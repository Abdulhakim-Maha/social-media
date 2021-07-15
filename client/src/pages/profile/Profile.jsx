import React,{useState, useEffect} from "react";
import TopBar from "../../components/topbar/TopBar";
import Feed from "../../components/feed/Feed";
import SideBar from "../../components/sidebar/SideBar";
import RightBar from "../../components/rightbar/RightBar";
import classes from "./Profile.module.css";
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Profile = (props) => {
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/user?username=${username}`);
      // console.log(res)
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
      <React.Fragment>
        <TopBar />
        <div className={classes.profile}>
          <SideBar />
          <div className={classes.profileRight}>
            <div className={classes.profileRightTop}>
              <div className={classes.profileCover}>
                <img
                  src={user.coverPicture || "https://i.pinimg.com/originals/30/13/15/301315de8f9b6cfd5386668ce9e615a2.png"}
                  alt=""
                  className={classes.profileCoverImg}
                />
                <img
                  src={user.profilePicture || PF + '/person/noAvatar.png'}
                  alt=""
                  className={classes.profileUserImg}
                />
              </div>
			  <div className={classes.profileInfo}>
				  <h4 className={classes.profileInfoName}>{user.username}</h4>
				  <span className={classes.profileInfoDesc}>{user.description}</span>
			  </div>
            </div>
            <div className={classes.profileRightBottom}>
              <Feed username="austiniqer"/>
              <RightBar user={user} />
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};

export default Profile;
