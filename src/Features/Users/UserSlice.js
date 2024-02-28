import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "sridhar",
  },
  {
    id: "2",
    name: "Kumarey",
  },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name) {
        return {
          payload: {
            id: nanoid(),
            name,
          }
        }
      }
    }
  },
});

export const selectAllUsers = (state) => state.users;
export default userSlice.reducer;
export const { addUser } = userSlice.actions;
