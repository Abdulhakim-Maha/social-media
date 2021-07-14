import React from "react";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" exact >
        <Home />
      </Route>
      <Route path="/profile/:username" >
        <Profile />
      </Route>
      <Route path="/login" >
        <Login />
      </Route>
      <Route path="/register" >
        <Register />
      </Route>
    </Switch>
  );
}

export default App;
