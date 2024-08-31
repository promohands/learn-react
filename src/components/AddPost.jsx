import classes from "./AddPost.module.css";

function AddPost({ onNameChange, onLocationChange }) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required onChange={onNameChange} />
      </p>
      <p>
        <label htmlFor="location">Location</label>
        <input type="text" id="location" required onChange={onLocationChange} />
      </p>
    </form>
  );
}

export default AddPost;
