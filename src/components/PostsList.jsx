import classes from "./PostsList.module.css";
import Post from "./Post";
import AddPost from "./AddPost";

function PostsList() {
  return (
    <>
      <AddPost />
      <ul className={classes.posts}>
        <Post name={"John"} location={"Chicago"} />
        <Post name={"Max"} location={"New York"} />
      </ul>
    </>
  );
}

export default PostsList;
