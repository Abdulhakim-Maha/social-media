import React, { useContext, useRef } from "react";
import classes from "./Login.module.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/auth-context";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const formHandler = (event) => {
    event.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user);

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
          <form className={classes.loginBox} onSubmit={formHandler}>
            <input
              type="email"
              placeholder="Enter your email"
              className={classes.loginInput}
              required
              ref={email}
            />
            <input
              type="password"
              placeholder="Enter your password"
              className={classes.loginInput}
              minLength="6"
              required
              ref={password}
            />
            <button className={classes.loginButton}>Login</button>
            <span className={classes.loginForgot}>Forgot Password?</span>
            <hr className={classes.hr} />
            <button className={classes.loginRegisterButton}>
              Create a new account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
