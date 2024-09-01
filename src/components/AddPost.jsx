import classes from "./AddPost.module.css";

function AddPost({ onNameChange, onLocationChange, onCancel }) {
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
