import React, { useState } from "react";

export const PostContext = React.createContext({
  posted: false,
  setPosted: () => {},
});

export const PostContextProvider = (props) => {
  const [posted, setPosted] = useState(false);
  const postHandler = () => {
	  setPosted(prev => !prev);
  };
  return (
    <PostContext.Provider
      value={{
        posted: posted,
        setPosted: postHandler,
      }}
    >
      {props.clildren}
    </PostContext.Provider>
  );
};
