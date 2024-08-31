import { MdPostAdd, MdMessage } from "react-icons/md";

import classes from "./MainHeader.module.css";

function MainHeader({ onAddPost }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        Add Post
      </h1>
      <p>
        <button className={classes.button} onClick={onAddPost}>
          <MdPostAdd size={18} /> New Post
        </button>
      </p>
    </header>
  );
}

export default MainHeader;
