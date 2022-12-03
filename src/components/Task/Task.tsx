import React, { Fragment, useState } from "react";
import {
  CheckboxSubtask,
  Container,
  CurrentStatus,
  InputCheckBox,
  Paragraph,
  ParagraphDescription,
  SubtaskParagraph,
  TaskTitle,
  XImage,
  ThreeDot,
  EditDeleteHoder,
  EditParagraph,
  DeleteParagraph,
  XImage1,
  ImgCheck,
} from "./Task.styled";
import Cross from "../../assets/icon-cross.svg";
import Dots from "../../assets/icon-vertical-ellipsis.svg";
import Check from "../../assets/icon-check.svg";
import { useAppDispatch, useAppSelector } from "../../Hooks";
import {
  viewTask,
  deleteTask,
  updateCompleted,
  updateCompleted1,
  updateCompleted2,
} from "../../reducer/slices/TaskSlice";
import EditTask from "../AddNewTask/EditTask";

type Prop = {
  setShow: (value: boolean) => void;
};
const Task = ({ setShow }: Prop) => {
  const [showDeleteEdit, setShowDeleteEdit] = useState<boolean>(false);
  const [showEditModule, setShowEditModule] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const taskList = useAppSelector((state) => state.TasksReducer.tasksArray);
  const CompletedTask1 = (task: any) => {
    dispatch(updateCompleted(task));
  };
  const CompletedTask2 = (task: any) => {
    dispatch(updateCompleted1(task));
  };
  const CompletedTask3 = (task: any) => {
    dispatch(updateCompleted2(task));
  };
  const CloseModal = (task: any) => {
    dispatch(viewTask(task));
    setShow(false);
  };
  const DeleteAndCloseModal = (task: any) => {
    dispatch(deleteTask(task));
    setShow(false);
  };
  const EditFunction = () => {
    setShowEditModule(true);
    setShowDeleteEdit(false);
  };
  const sub = (task: any) => {
    const active = task.subtask.filter((sub: any) => sub.isCompleted === true);
    return active.length;
  };
  return (
    <Container>
      {taskList.map((task: any) => {
        if (task.show) {
          return (
            <>
              {showEditModule ? (
                <EditTask task={task} setShowEditModule={setShowEditModule} />
              ) : null}
              {showDeleteEdit ? (
                <EditDeleteHoder>
                  <XImage1
                    src={Cross}
                    alt="cross"
                    onClick={() => setShowDeleteEdit(false)}
                  />
                  <EditParagraph onClick={() => EditFunction()}>
                    Edit Task
                  </EditParagraph>
                  <DeleteParagraph onClick={() => DeleteAndCloseModal(task)}>
                    Delete task
                  </DeleteParagraph>
                </EditDeleteHoder>
              ) : null}
              <XImage
                src={Cross}
                alt="cross"
                onClick={() => CloseModal(task)}
              />
              <ThreeDot src={Dots} onClick={() => setShowDeleteEdit(true)} />
              <TaskTitle>{task.title}</TaskTitle>
              <ParagraphDescription>{task.description}</ParagraphDescription>
              <Paragraph>Subtasks ({sub(task)} of 3)</Paragraph>
              <CheckboxSubtask onClick={() => CompletedTask1(task)}>
                <InputCheckBox>
                  {task.subtask[0].isCompleted ? (
                    <ImgCheck src={Check} alt="check" />
                  ) : null}
                </InputCheckBox>
                <SubtaskParagraph>{task.subtask[0].title}</SubtaskParagraph>
              </CheckboxSubtask>
              <CheckboxSubtask onClick={() => CompletedTask2(task)}>
                <InputCheckBox>
                  {task.subtask[1].isCompleted ? (
                    <ImgCheck src={Check} alt="check" />
                  ) : null}
                </InputCheckBox>
                <SubtaskParagraph>{task.subtask[1].title}</SubtaskParagraph>
              </CheckboxSubtask>
              <CheckboxSubtask onClick={() => CompletedTask3(task)}>
                <InputCheckBox>
                  {task.subtask[2].isCompleted ? (
                    <ImgCheck src={Check} alt="check" />
                  ) : null}
                </InputCheckBox>
                <SubtaskParagraph>{task.subtask[2].title}</SubtaskParagraph>
              </CheckboxSubtask>
              <Paragraph style={{ marginBottom: "10px", marginTop: "15px" }}>
                Current Status
              </Paragraph>
              <CurrentStatus>
                <option>{task.status}</option>
              </CurrentStatus>
            </>
          );
        }
      })}
    </Container>
  );
};

export default Task;
