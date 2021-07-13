import React from "react";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <div className={classes.login}>
      <div className={classes.loginWrapper}>
        <div className={classes.loginLeft}>
          <h3 className={classes.loginLogo}>Faisbook</h3>
		  <span className={classes.loginDesc}>
			  Connect with friends in Faisbook world.
		  </span>
        </div>
        <div className={classes.loginRight}>
			<div className={classes.loginBox}>
	            <input type="email" placeholder="Enter your email" className={classes.loginInput}  />
	            <input type="password" placeholder="Enter your password" className={classes.loginInput}  />
				<button className={classes.loginButton}>Login</button>
				<span className={classes.loginForgot}>Forgot Password?</span>
				<hr className={classes.hr} />
				<button className={classes.loginRegisterButton}>Create a new account</button>
			</div>
		</div>
      </div>
    </div>
  );
};

export default Login;
