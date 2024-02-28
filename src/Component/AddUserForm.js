import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../Features/Users/UserSlice";
// import { selectAllUsers } from "../Features/Users/UserSlice";
import { toastSuccess } from "./Toastify";

const AddUserForm = ({ onAddUserClick }) => {
  const dispatch = useDispatch();
  const [authorName, setAuthorName] = useState("");
  const canSave = Boolean(authorName);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!authorName) {
      return;
    }
    dispatch(addUser(authorName));
    toastSuccess("User added successfully");

    setAuthorName("");
    onAddUserClick();
  };

  return (
    <section className="form-float">
      <h2 className="text-black text-center">Add User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group text-black">
          <label htmlFor="title" className="text-black">
            Author name:
          </label>
          <input
            type="text"
            className="form-control text-black"
            id="title"
            name="title"
            required
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder="Enter author name"
          />
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
            onClick={onAddUserClick}
            className="btn btn-danger btn-block"
          >
            Close
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddUserForm;
