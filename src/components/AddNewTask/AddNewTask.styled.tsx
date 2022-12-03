import styled from "styled-components";

export const AddNewTaskHolder = styled.div`
  min-height: 450px;
  width: 350px;
  background-color: ${(props) => props.theme.navBarBackground};
  padding: 25px;
  display: flex;
  border-radius: 15px;
  flex-direction: column;
  position: relative;
`;
export const AddNewTaskTitle = styled.h1`
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 700;
  color: ${(props) => props.theme.textColor};
`;
export const Paragraph = styled.p`
  font-weight: 700;
  margin-bottom: 3px;
  font-size: 12px;
  color: #828fa3;
`;
export const InputTaskTitle = styled.input`
  width: 300px;
  height: 30px;
  padding: 5px;
  background-color: ${(props) => props.theme.navBarBackground};
  margin-bottom: 15px;
  border-radius: 4px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.textColor};
  border: 1px solid rgba(130, 143, 163, 0.25);
  &:focus {
    outline: none;
  }
`;
export const InputDescription = styled.textarea`
  width: 300px;
  height: 90px;
  border-radius: 4px;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.navBarBackground};
  border: 1px solid rgba(130, 143, 163, 0.25);
  margin-bottom: 20px;
  &:focus {
    outline: none;
  }
`;
export const InputSubtasks = styled.input`
  color: ${(props) => props.theme.textColor};
  width: 270px;
  height: 30px;
  background-color: ${(props) => props.theme.navBarBackground};
  padding: 5px;
  border-radius: 4px;
  margin-bottom: 5px;
  border: 1px solid rgba(130, 143, 163, 0.25);
  &:focus {
    outline: none;
  }
`;
export const ButtonAddNewSubtask = styled.button`
  background-color: rgba(99, 95, 889, 0.2);
  width: 300px;
  height: 30px;
  color: #635fc7;
  font-weight: 700;
  font-size: 13px;
  border-radius: 20px;
  margin-bottom: 10px;
  border: none;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
export const ButtonCreateNewTask = styled.button`
  background-color: #635fc7;
  width: 300px;
  height: 30px;
  color: #fff;
  font-weight: 700;
  font-size: 13px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
export const SelectStatus = styled.select`
  width: 300px;
  height: 30px;
  margin-bottom: 20px;
  border-radius: 4px;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.navBarBackground};
  border: 1px solid rgba(130, 143, 163, 0.25);
  &:focus {
    outline: none;
  }
`;
export const XImage = styled.img`
  width: 13px;
  position: absolute;
  right: 30px;
  top: 30px;
  height: 14px;
  cursor: pointer;
`;
export const Overlay = styled.div`
  position: fixed;
  display: flex;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 9;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
