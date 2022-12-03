import React, { useState } from "react";
import {
  AddNewTaskHolder,
  AddNewTaskTitle,
  ButtonCreateNewTask,
  InputDescription,
  InputSubtasks,
  InputTaskTitle,
  Paragraph,
  SelectStatus,
  XImage,
} from "./AddNewTask.styled";
import { AddTask } from "../../reducer/slices/TaskSlice";
import { toggleActive } from "../../reducer/slices/NewTask";
import { nanoid } from "@reduxjs/toolkit";
import Cross from "../../assets/icon-cross.svg";
import { useAppDispatch } from "../../Hooks";
const AddNewTask = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [subtask1, setSubtask1] = useState<string>("");
  const [subtask2, setSubtask2] = useState<string>("");
  const [subtask3, setSubtask3] = useState<string>("");
  const [select, setSelect] = useState<string>("todo");
  const handleSubmit = () => {
    if (title && description && subtask1 && subtask2 && subtask3) {
      dispatch(
        AddTask({
          id: nanoid(),
          title: title,
          show: false,
          status: select,
          description: description,
          subtask: [
            { title: subtask1, isCompleted: false },
            { title: subtask2, isCompleted: false },
            { title: subtask3, isCompleted: false },
          ],
        })
      );
      dispatch(toggleActive());
    }
    setDescription("");
    setTitle("");
  };
  return (
    <AddNewTaskHolder>
      <XImage
        src={Cross}
        alt="cross"
        onClick={() => dispatch(toggleActive())}
      />
      <AddNewTaskTitle>Add New Task</AddNewTaskTitle>
      <Paragraph>Title</Paragraph>
      <InputTaskTitle
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Paragraph>Description</Paragraph>
      <InputDescription
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Paragraph>Subtasks</Paragraph>
      <InputSubtasks onChange={(e) => setSubtask1(e.target.value)} />
      <InputSubtasks onChange={(e) => setSubtask2(e.target.value)} />
      <InputSubtasks onChange={(e) => setSubtask3(e.target.value)} />
      <Paragraph>Status</Paragraph>
      <SelectStatus onChange={(e) => setSelect(e.target.value)}>
        <option value="todo">To do</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
      </SelectStatus>

      <ButtonCreateNewTask onClick={() => handleSubmit()}>
        Create Task
      </ButtonCreateNewTask>
    </AddNewTaskHolder>
  );
};

export default AddNewTask;
