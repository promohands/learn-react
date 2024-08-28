import classes from "./AddPost.module.css";

function AddPost() {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required />
      </p>
      <p>
        <label htmlFor="location">Location</label>
        <input type="text" id="location" required />
      </p>
    </form>
  );
}

export default AddPost;
