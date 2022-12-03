import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  active: false,
  currentTask: false,
};
export const NewTask = createSlice({
  name: "newtask",
  initialState,
  reducers: {
    toggleActive: (state: any) => {
      state.active = !state.active;
    },
    toggleCurrentTask: (state: any) => {
      state.currentTask = !state.currentTask;
    },
  },
});

export const { toggleActive, toggleCurrentTask } = NewTask.actions;
export default NewTask.reducer;
