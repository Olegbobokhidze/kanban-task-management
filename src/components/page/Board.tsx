import ScrollContainer from "react-indiana-drag-scroll";
import { useAppDispatch, useAppSelector } from "../../Hooks";
import {
  BoardHolder,
  Card,
  CardSubtaskCount,
  CardTitle,
  Column,
  Container,
  TodoColor,
  ColumnTitle,
  ColumnNameHolder,
} from "./Board.styles";
import { viewTask } from "../../reducer/slices/TaskSlice";
import { Overlay } from "../headerAndMenu/Header.styles";
import Task from "../Task/Task";
import { useState } from "react";
type Props = {
  navbar: boolean;
};
const BoardComponent = ({ navbar }: Props) => {
  const taskList = useAppSelector((state) => state.TasksReducer.tasksArray);
  const dispatch = useAppDispatch();
  function currentCard(task: any) {
    dispatch(viewTask(task));
    setShow(true);
  }
  const todoLength = taskList.filter((task: any) => task.status === "todo");
  const doingLength = taskList.filter((task: any) => task.status === "doing");
  const doneLength = taskList.filter((task: any) => task.status === "done");
  const sub = (task: any) => {
    const active = task.subtask.filter((sub: any) => sub.isCompleted === true);
    return active.length;
  };
  const [show, setShow] = useState<boolean>(false);
  return (
    <Container>
      <ScrollContainer>
        <BoardHolder navbar={navbar}>
          <>
            <Column>
              <ColumnNameHolder>
                <TodoColor></TodoColor>
                <ColumnTitle>To Do ({todoLength.length})</ColumnTitle>
              </ColumnNameHolder>
              {taskList.map((task: any) => {
                if (task.status === "todo")
                  return (
                    <Card id={task.id} onClick={() => currentCard(task)}>
                      <CardTitle>{task.title}</CardTitle>
                      <CardSubtaskCount>
                        {sub(task)} of 3 subtasks
                      </CardSubtaskCount>
                    </Card>
                  );
              })}
            </Column>
          </>
          <Column>
            <ColumnNameHolder>
              <TodoColor style={{ background: "#8471F2" }}></TodoColor>
              <ColumnTitle>Doing ({doingLength.length})</ColumnTitle>
            </ColumnNameHolder>
            {taskList.map((task: any) => {
              if (task.status === "doing")
                return (
                  <Card id={task.id} onClick={() => currentCard(task)}>
                    <CardTitle>{task.title}</CardTitle>
                    <CardSubtaskCount>
                      {sub(task)} of 3 subtasks
                    </CardSubtaskCount>
                  </Card>
                );
            })}
          </Column>
          <Column>
            <ColumnNameHolder>
              <TodoColor style={{ background: "#67E2AE" }}></TodoColor>
              <ColumnTitle>Done ({doneLength.length})</ColumnTitle>
            </ColumnNameHolder>
            {taskList.map((task: any) => {
              if (task.status === "done")
                return (
                  <Card id={task.id} onClick={() => currentCard(task)}>
                    <CardTitle>{task.title}</CardTitle>
                    <CardSubtaskCount>
                      {sub(task)} of 3 subtasks
                    </CardSubtaskCount>
                  </Card>
                );
            })}
          </Column>
        </BoardHolder>
        {show ? (
          <Overlay>
            <Task setShow={setShow} />
          </Overlay>
        ) : null}
      </ScrollContainer>
    </Container>
  );
};

export default BoardComponent;
