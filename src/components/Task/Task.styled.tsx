import styled from "styled-components";
import { ThemeDark, ThemeLight } from "../../Themes";

export const Container = styled.div`
  min-height: 300px;
  width: 350px;
  background-color: ${(props) => props.theme.navBarBackground};
  padding: 25px;
  display: flex;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  flex-direction: column;
`;
export const TaskTitle = styled.h1`
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 700;
  color: ${(props) => props.theme.textColor};
`;
export const ParagraphDescription = styled.p`
  margin-bottom: 20px;
  font-size: 12px;
  color: #828fa3;
`;
export const Paragraph = styled.p`
  margin-bottom: 3px;
  font-size: 12px;
  color: #828fa3;
  margin-bottom: 20px;
`;
export const InputCheckBox = styled.div`
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 20px;
  background-color: ${(props) => props.theme.navBarBackground};
  background-color: #635fc7;
`;
export const CheckboxSubtask = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 280px;
  text-overflow: clip;
  min-height: 40px;
  background-color: ${(props) => props.theme.background};
  border-radius: 10px;
  margin-bottom: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;
export const SubtaskParagraph = styled.p`
  color: ${(props) => props.theme.textColor};
  font-size: 12px;
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  font-weight: 700;
`;
export const CurrentStatus = styled.select`
  width: 300px;
  height: 30px;
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
  right: 35px;
  top: 30px;
  height: 14px;
  cursor: pointer;
`;
export const ThreeDot = styled.img`
  width: 5px;
  height: 16px;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 30px;
`;
export const EditDeleteHoder = styled.div`
  display: flex;
  width: 150px;
  height: 80px;
  justify-content: space-evenly;
  border-radius: 10px;
  flex-direction: column;
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 15px;
  z-index: 100;
  background-color: ${(props) =>
    props.theme === ThemeDark ? ThemeDark.background : ThemeLight.background};
`;
export const EditParagraph = styled.p`
  font-size: 15px;
  cursor: pointer;
  color: #828fa3;
  margin-top: 10px;
  &:hover {
    opacity: 0.5;
  }
`;
export const DeleteParagraph = styled.p`
  font-size: 15px;
  color: #ea5555;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
export const XImage1 = styled.img`
  width: 13px;
  position: absolute;
  right: 15px;
  top: 8px;
  height: 14px;
  cursor: pointer;
`;
export const ImgCheck = styled.img``;
