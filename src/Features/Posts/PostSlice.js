import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "lorem sample 1",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, quidem aspernatur. Laborum quis eaque, eos voluptatibus, obcaecati doloribus odit tenetur possimus ipsam inventore dolorum? Enim maxime omnis nemo molestiae autem?",
  },
  {
    id: 2,
    title: "lorem sample 2",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, quidem aspernatur. Laborum quis eaque, eos voluptatibus, obcaecati doloribus odit tenetur possimus ipsam inventore dolorum? Enim maxime omnis nemo molestiae autem?",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { addPost } = postSlice.actions;

export default postSlice.reducer;
