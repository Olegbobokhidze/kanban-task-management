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
  Overlay,
} from "./AddNewTask.styled";
import { updateTask } from "../../reducer/slices/TaskSlice";
import Cross from "../../assets/icon-cross.svg";
import { useAppDispatch } from "../../Hooks";
type Prop = {
  task: any;
  setShowEditModule: (value: boolean) => void;
};
const EditTask = ({ task, setShowEditModule }: Prop) => {
  const [title, setTitle] = useState<string>(task.title);
  const [description, setDescription] = useState<string>(task.description);
  const [select, setSelected] = useState<string>(task.status);
  const [subtask1, setSubtask1] = useState<string>(task.subtask[0].title);
  const [subtask2, setSubtask2] = useState<string>(task.subtask[1].title);
  const [subtask3, setSubtask3] = useState<string>(task.subtask[2].title);
  const dispatch = useAppDispatch();
  const SaveChanges = (task: any) => {
    dispatch(
      updateTask({
        id: task.id,
        status: select,
        title: title,
        description: description,
        subtask1: subtask1,
        subtask2: subtask2,
        subtask3: subtask3,
      })
    );
    setShowEditModule(false);
  };

  return (
    <Overlay>
      <AddNewTaskHolder>
        <XImage
          src={Cross}
          alt="cross"
          onClick={() => setShowEditModule(false)}
        />
        <AddNewTaskTitle>Edit Task</AddNewTaskTitle>
        <Paragraph></Paragraph>
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
        <InputSubtasks
          value={subtask1}
          onChange={(e) => setSubtask1(e.target.value)}
        />
        <InputSubtasks
          value={subtask2}
          onChange={(e) => setSubtask2(e.target.value)}
        />
        <InputSubtasks
          value={subtask3}
          onChange={(e) => setSubtask3(e.target.value)}
        />
        <Paragraph>Status</Paragraph>
        <SelectStatus onChange={(e) => setSelected(e.target.value)}>
          <option value="todo">Todo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </SelectStatus>
        <ButtonCreateNewTask onClick={() => SaveChanges(task)}>
          Save Changes
        </ButtonCreateNewTask>
      </AddNewTaskHolder>
    </Overlay>
  );
};

export default EditTask;
