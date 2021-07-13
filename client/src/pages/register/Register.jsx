import React from "react";
import classes from "./Register.module.css";

const Register = () => {
  return (
    <div className={classes.register}>
      <div className={classes.registerWrapper}>
        <div className={classes.registerLeft}>
          <h3 className={classes.registerLogo}>Faisbook</h3>
		  <span className={classes.registerDesc}>
			  Connect with friends in Faisbook world.
		  </span>
        </div>
        <div className={classes.registerRight}>
			<div className={classes.registerBox}>
				<div className={classes.firstnameAndLastname}>
					<input type="text" placeholder="Firstname" className={classes.firstname} />
					<input type="text" placeholder="Lastname" className={classes.lastname} />
				</div>
	            <input type="email" placeholder="Enter your email" className={classes.registerInput}  />
	            <input type="password" placeholder="Enter your password" className={classes.registerInput}  />
	            <input type="password" placeholder="Verify your password" className={classes.registerInput}  />
				<button className={classes.registerButton}>register</button>
				<hr className={classes.hr} />
				<button className={classes.signInButton}>Sign In</button>
			</div>
		</div>
      </div>
    </div>
  );
};

export default Register;
