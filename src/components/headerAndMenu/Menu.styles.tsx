import styled from "styled-components";
import { ThemeDark, ThemeLight } from "../../Themes";

interface Prop {
  navbar: boolean;
}
export const MenuHolder = styled.div<Prop>`
  display: none;
  flex-direction: column;
  width: 260px;
  height: 100%;
  background-color: ${(props) =>
    props.theme === ThemeDark
      ? ThemeDark.navBarBackground
      : ThemeLight.navBarBackground};
  border-right: 2px solid
    ${(props) => (props.theme === ThemeDark ? "#3e3f4e" : "#E4EBFA")};
  position: fixed;
  justify-content: space-between;
  padding-right: 16px;
  padding-top: 16px;
  top: 80px;
  padding-bottom: 30px;
  z-index: 999;
  @media screen and (min-width: 768px) {
    display: ${(props) => (props.navbar ? "flex" : "none")};
  }
`;
export const AllBoardsTitle = styled.h3`
  color: #828fa3;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  margin-left: 20px;
  margin-top: 15px;
  margin-bottom: 25px;
`;
export const BoardsHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BoardTitle = styled.h2`
  color: #828fa3;
  font-size: 15px;
  line-height: 19px;
`;
export const Board = styled.div`
  display: flex;
  width: 240px;
  margin-bottom: 1px;
  height: 48px;
  align-items: center;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  justify-content: left;
  cursor: pointer;
  &:hover {
    background-color: #635fc7;
  }
  &:hover ${BoardTitle} {
    color: white;
  }
`;

export const IconBoard = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 20px;
  margin-right: 20px;
`;
export const AddBoardTitle = styled.h2`
  color: #635fc7;
  font-weight: 700;
  font-size: 15px;
`;
export const NavBarHolderOne = styled.div``;
export const NavBarHolderTwo = styled.div``;

export const ThemeTogglerHolder = styled.div`
  width: 235px;
  height: 48px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 6px;
  margin-left: 15px;
  background-color: ${(props) =>
    props.theme === ThemeDark ? ThemeDark.background : ThemeLight.background};
`;
export const CircleHolder = styled.div`
  width: 40px;
  height: 20px;
  border-radius: 12px;
  background-color: #635fc7;
  position: relative;
  cursor: pointer;
`;
export const Circle = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  transition: 0.3s;
  position: absolute;
  top: 3px;
  left: ${(props) => (props.theme === ThemeDark ? "4.5px" : "21.5px")};
  background-color: white;
`;
export const HideSidebarHolder = styled.div`
  display: flex;
  cursor: pointer;
  margin-left: 20px;
  margin-top: 30px;
  color: #828fa3;
  margin-bottom: 100px;
  font-size: 15px;
  font-weight: 700;
  &:hover {
    opacity: 0.5;
  }
`;
export const ImgDarkLightEye = styled.img`
  margin-right: 5px;
`;
