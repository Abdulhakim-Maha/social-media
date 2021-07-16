import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import classes from "./Register.module.css";
import axios from "axios";

const Register = () => {
  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const password = useRef();
  const VerifyPassword = useRef();
  const history = useHistory()

  const submitHandler = async (event) => {
    event.preventDefault();
    if (VerifyPassword.current.value !== password.current.value) {
      VerifyPassword.current.setCustomValidity("Password don't match!!");
    } else {
      const user = {
        username: firstname.current.value + " " + lastname.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      //   console.log(user)
      try {
        await axios.post("/auth/register", user);
		history.push('/login')
      } catch (err) {
		console.log(err)
	  }
    }
  };
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
          <form className={classes.registerBox} onSubmit={submitHandler}>
            <div className={classes.firstnameAndLastname}>
              <input
                type="text"
                ref={firstname}
                required
                placeholder="Firstname"
                className={classes.firstname}
              />
              <input
                type="text"
                required
                ref={lastname}
                placeholder="Lastname"
                className={classes.lastname}
              />
            </div>
            <input
              type="email"
              ref={email}
              required
              placeholder="Enter your email"
              className={classes.registerInput}
            />
            <input
              type="password"
              placeholder="Enter your password"
              required
              className={classes.registerInput}
              minLength="6"
              ref={password}
            />
            <input
              type="password"
              placeholder="Verify your password"
              required
              className={classes.registerInput}
              ref={VerifyPassword}
            />
            <button className={classes.registerButton} type="submit">
              register
            </button>
            <hr className={classes.hr} />
            <Link to="/login">
              <button className={classes.signInButton} type="button">
                Sign In
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
