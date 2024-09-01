import { useState } from "react";
import classes from "./PostsList.module.css";
import Post from "./Post";
import AddPost from "./AddPost";
import Model from "./Modal";

function PostsList({ isPosting, onStopPosting }) {
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
      {isPosting && (
        <Model onClose={onStopPosting}>
          <AddPost
            onNameChange={changeNameHandler}
            onLocationChange={changeLocationHandler}
            onCancel={onStopPosting}
          />
        </Model>
      )}
      <ul className={classes.posts}>
        <Post name={nameChange} location={locationChange} />
        <Post name={"Max"} location={"New York"} />
      </ul>
    </>
  );
}

export default PostsList;
