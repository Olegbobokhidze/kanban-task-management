import { configureStore } from "@reduxjs/toolkit";
import TasksReducer from "./reducer/slices/TaskSlice";
import NewTaskReducer from "./reducer/slices/NewTask";
export const store = configureStore({
  reducer: {
    NewTaskReducer,
    TasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
