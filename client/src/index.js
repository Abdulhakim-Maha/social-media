import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/auth-context";
import { PostContextProvider } from "./context/create-post";

ReactDOM.render(
  <AuthContextProvider>
    <PostContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PostContextProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);
