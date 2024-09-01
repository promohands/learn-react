import { useState } from "react";
import classes from "./PostsList.module.css";
import Post from "./Post";
import AddPost from "./AddPost";
import Model from "./Modal";

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((prevPosts) => {
      return [...prevPosts, postData];
    });
  }

  return (
    <>
      {isPosting && (
        <Model onClose={onStopPosting}>
          <AddPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Model>
      )}
      {posts.length === 0 && (
        <h3 style={{ textAlign: "center" }}>
          No posts found. Start adding some!
        </h3>
      )}
      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post key={post.location} name={post.name} location={post.location} />
        ))}
      </ul>
    </>
  );
}

export default PostsList;
