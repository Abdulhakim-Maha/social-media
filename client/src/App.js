import React, { useContext } from "react";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthContext } from "./context/auth-context";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Switch>
      <Route path="/" exact>
        {user ? <Home /> : <Register />}
      </Route>
      <Route path="/profile/:username">
        <Profile />
      </Route>
      <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
      <Route path="/register">
        {user ? <Redirect to="/" /> : <Register />}
      </Route>
    </Switch>
  );
}

export default App;
