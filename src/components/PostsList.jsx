/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "./PostsList.module.css";
import Post from "./Post";
import AddPost from "./AddPost";

function PostsList() {
  const [nameChange, setNameChange] = useState("");
  const [locationChange, setLocationChange] = useState("");

  function changeNameHandler(event) {
    setNameChange(event.target.value);
  }
  function changeLocationHandler(event) {
    setLocationChange(event.target.value);
  }
  return (
    <>
      <AddPost
        onNameChange={changeNameHandler}
        onLocationChange={changeLocationHandler}
      />
      <ul className={classes.posts}>
        <Post name={nameChange} location={locationChange} />
        <Post name={"Max"} location={"New York"} />
      </ul>
    </>
  );
}

export default PostsList;
