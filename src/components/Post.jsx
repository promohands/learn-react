import classes from "./Post.module.css";

// eslint-disable-next-line react/prop-types
function Post({ name, location }) {
  return (
    <li className={classes.post}>
      <p className={classes.name}>{name}</p>
      <p className={classes.location}>{location}</p>
    </li>
  );
}

export default Post;
