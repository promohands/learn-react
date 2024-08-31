import { useState } from "react";
import classes from "./PostsList.module.css";
import Post from "./Post";
import AddPost from "./AddPost";
import Model from "./Modal";

function PostsList() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [nameChange, setNameChange] = useState("");
  const [locationChange, setLocationChange] = useState("");

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  function changeNameHandler(event) {
    setNameChange(event.target.value);
  }
  function changeLocationHandler(event) {
    setLocationChange(event.target.value);
  }
  return (
    <>
      {modalIsOpen && (
        <Model onClose={closeModalHandler}>
          <AddPost
            onNameChange={changeNameHandler}
            onLocationChange={changeLocationHandler}
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
