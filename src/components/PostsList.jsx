import classes from "./PostsList.module.css";
import Post from "./Post";
import AddPost from "./AddPost";
import Model from "./Modal";

function PostsList({ isPosting, onStopPosting }) {
  return (
    <>
      {isPosting && (
        <Model onClose={onStopPosting}>
          <AddPost onCancel={onStopPosting} />
        </Model>
      )}
      <ul className={classes.posts}>
        <Post name={"Max"} location={"New York"} />
      </ul>
    </>
  );
}

export default PostsList;
