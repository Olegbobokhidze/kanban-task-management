import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasksArray: [],
};
export const TasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    AddTask: (state: any, action: any) => {
      state.tasksArray.push(action.payload);
    },
    viewTask: (state: any, action: any) => {
      const currentTask = (element: any) =>
        element.title === action.payload.title;
      const currentId = state.tasksArray.findIndex(currentTask);
      const Array = [...state.tasksArray];
      Array[currentId].show = !Array[currentId].show;
    },
    deleteTask: (state: any, action: any) => {
      const currentTask = (element: any) =>
        element.title === action.payload.title;
      const currentId = state.tasksArray.findIndex(currentTask);
      state.tasksArray.splice(currentId, 1);
    },
    updateTask: (state: any, action: any) => {
      const List = state.tasksArray;
      List.map((task: any) => {
        if (task.id === action.payload.id) {
          task.title = action.payload.title;
          task.description = action.payload.description;
          task.status = action.payload.status;
          task.subtask[0].title = action.payload.subtask1;
          task.subtask[1].title = action.payload.subtask2;
          task.subtask[2].title = action.payload.subtask3;
          state.tasksArray = [...List];
        }
      });
    },
    updateCompleted: (state: any, action: any) => {
      const List = state.tasksArray;
      List.map((task: any) => {
        if (task.id === action.payload.id) {
          const completed = action.payload.subtask[0].isCompleted;
          task.subtask[0].isCompleted = !completed;
          state.tasksArray = [...List];
        }
      });
    },
    updateCompleted1: (state: any, action: any) => {
      const List = state.tasksArray;
      List.map((task: any) => {
        if (task.id === action.payload.id) {
          const completed = action.payload.subtask[1].isCompleted;
          task.subtask[1].isCompleted = !completed;
          state.tasksArray = [...List];
        }
      });
    },
    updateCompleted2: (state: any, action: any) => {
      const List = state.tasksArray;
      List.map((task: any) => {
        if (task.id === action.payload.id) {
          const completed = action.payload.subtask[2].isCompleted;
          task.subtask[2].isCompleted = !completed;
          state.tasksArray = [...List];
        }
      });
    },
  },
});

export const {
  AddTask,
  viewTask,
  deleteTask,
  updateTask,
  updateCompleted,
  updateCompleted1,
  updateCompleted2,
} = TasksSlice.actions;
export default TasksSlice.reducer;
