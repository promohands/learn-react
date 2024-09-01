import { useState } from "react";
import classes from "./AddPost.module.css";

function AddPost({ onCancel }) {
  const [nameEntered, setNameEntered] = useState("");
  const [locationEntered, setLocationEntered] = useState("");

  function nameChangeHandler(event) {
    setNameEntered(event.target.value);
  }
  function locationChangeHandler(event) {
    setLocationEntered(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = { name: nameEntered, location: locationEntered };
    console.log(postData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required onChange={nameChangeHandler} />
      </p>
      <p>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          required
          onChange={locationChangeHandler}
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Post</button>
      </p>
    </form>
  );
}

export default AddPost;
