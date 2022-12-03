import React, { useState } from "react";
import {
  MenuHolder,
  Board,
  BoardsHolder,
  IconBoard,
  BoardTitle,
  AllBoardsTitle,
  NavBarHolderOne,
  NavBarHolderTwo,
  ThemeTogglerHolder,
  ImgDarkLightEye,
  CircleHolder,
  Circle,
  HideSidebarHolder,
} from "./Menu.styles";
import BoardLogo from "../../assets/icon-board.svg";

import Sun from "../../assets/icon-light-theme.svg";
import Moon from "../../assets/icon-dark-theme.svg";
import Eye from "../../assets/icon-hide-sidebar.svg";

type Props = {
  themeToggler: () => void;
  navbar: boolean;
  setNavbar: (value: boolean) => void;
};
const Menu = ({ themeToggler, navbar, setNavbar }: Props) => {
  return (
    <MenuHolder navbar={navbar}>
      <NavBarHolderOne>
        <AllBoardsTitle>All boards()</AllBoardsTitle>
        <BoardsHolder>
          <Board>
            <IconBoard src={BoardLogo} />
            <BoardTitle>Platform Launch</BoardTitle>
          </Board>
        </BoardsHolder>
      </NavBarHolderOne>
      <NavBarHolderTwo>
        <ThemeTogglerHolder>
          <ImgDarkLightEye src={Moon} alt="Moon" />
          <CircleHolder onClick={() => themeToggler()}>
            <Circle></Circle>
          </CircleHolder>
          <ImgDarkLightEye src={Sun} alt="sun" />
        </ThemeTogglerHolder>
        <HideSidebarHolder onClick={() => setNavbar(false)}>
          <ImgDarkLightEye src={Eye} alt="eye" />
          Hide Sidebar
        </HideSidebarHolder>
      </NavBarHolderTwo>
    </MenuHolder>
  );
};

export default Menu;
