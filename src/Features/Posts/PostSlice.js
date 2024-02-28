import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "lorem sample 1",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, quidem aspernatur. Laborum quis eaque, eos voluptatibus, obcaecati doloribus odit tenetur possimus ipsam inventore dolorum? Enim maxime omnis nemo molestiae autem?",
    date: sub(new Date(), { minutes: 15 }).toISOString(),
  },
  {
    id: "2",
    title: "lorem sample 2",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, quidem aspernatur. Laborum quis eaque, eos voluptatibus, obcaecati doloribus odit tenetur possimus ipsam inventore dolorum? Enim maxime omnis nemo molestiae autem?",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { addPost } = postSlice.actions;

export default postSlice.reducer;
