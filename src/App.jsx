import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModalHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <>
      <MainHeader onAddPost={openModalHandler} />
      <main>
        <PostsList isPosting={modalIsOpen} onStopPosting={closeModalHandler} />
      </main>
    </>
  );
}

export default App;
