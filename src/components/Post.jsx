import classes from "./Post.module.css";

function Post({ name, location }) {
  return (
    <li className={classes.post}>
      <p className={classes.name}>{name}</p>
      <p className={classes.location}>{location}</p>
    </li>
  );
}

export default Post;
