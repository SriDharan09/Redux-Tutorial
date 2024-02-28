import PostList from "./Component/PostList";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import Header from "./Component/Header";
import AddPostForm from "./Component/AddPostForm";
import AddUserForm from "./Component/AddUserForm";
import { ToastContainer } from "react-toastify";

function App() {
  const [showAddPostForm, setShowAddPostForm] = useState(false);
  const [showAddUserForm, setShowAddUserForm] = useState(false);

  const handleAddPostClick = () => {
    setShowAddPostForm(!showAddPostForm);
    if (showAddUserForm) {
      setShowAddUserForm(false);
    }
  };

  const handleAddUserClick = () => {
    setShowAddUserForm(!showAddUserForm);
    if (showAddPostForm) {
      setShowAddPostForm(false);
    }
  };

  return (
    <>
      <Header
        onAddPostClick={handleAddPostClick}
        onAddUserClick={handleAddUserClick}
        showAddPostForm={showAddPostForm}
        showAddUserForm={showAddUserForm}
      />

      <main>
        <PostList />
        {showAddPostForm && <AddPostForm onAddPostClick={handleAddPostClick} />}

        {showAddUserForm && <AddUserForm onAddUserClick={handleAddUserClick} />}
      </main>
      <ToastContainer />
    </>
  );
}

export default App;
