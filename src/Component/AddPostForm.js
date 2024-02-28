import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../Features/Posts/PostSlice";
import { selectAllUsers } from "../Features/Users/UserSlice";
import { toastSuccess } from "./Toastify";

const AddPostForm = ({ onAddPostClick }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    title: "",
    content: "",
  });
  const [localUserId, setLocalUserId] = useState("");
  const user = useSelector(selectAllUsers);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const onAuthorChange = (e) => {
    setLocalUserId(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!data.title || !data.content) {
      return;
    }
    dispatch(addPost(data.title, data.content, localUserId));
    toastSuccess("Post added successfully");
    onAddPostClick();

    console.log("Title:", data.title);
    console.log("Content:", data.content);
    setData({
      title: "",
      content: "",
    });
    setLocalUserId("");
  };

  const canSave =
    Boolean(data.title) && Boolean(data.content) && Boolean(localUserId);

  const getUserOptions = user.map((user) => (
    <option key={user.id} value={user.name}>
      {user.name}
    </option>
  ));

  return (
    <section className="form-float">
      <h2 className="text-black text-center">Add Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group text-black">
          <label htmlFor="title" className="text-black">
            Title:
          </label>
          <input
            type="text"
            className="form-control text-black"
            id="title"
            name="title"
            required
            value={data.title}
            onChange={(e) => handleChange(e)}
            placeholder="Enter title"
          />
        </div>

        <div className="form-group text-black">
          <label htmlFor="content">Content:</label>
          <textarea
            className="form-control"
            id="content"
            name="content"
            required
            value={data.content}
            onChange={(e) => handleChange(e)}
            rows="2"
            placeholder="Enter content"
          ></textarea>
        </div>

        <div className="form-group text-black">
          <label htmlFor="author" className="text-black">
            Author:
          </label>
          <select
            className="form-control"
            id="author"
            name="author"
            onChange={onAuthorChange}
          >
            <option value="">
              Select Author <i className="fas fa-caret-down"></i>{" "}
            </option>
            {getUserOptions}
          </select>
        </div>

        <div className="d-flex justify-content-between">
          <button
            type="submit"
            disabled={!canSave}
            className="btn btn-primary btn-block"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={onAddPostClick}
            className="btn btn-danger btn-block"
          >
            Close
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddPostForm;
