import React, { Fragment, useEffect, useState } from "react";
import LogoMobile from "../../assets/logo-mobile.svg";
import ArrowDown from "../../assets/icon-chevron-down.svg";
import EyeTrue from "../../assets/icon-show-sidebar.svg";
import LogoDark from "../../assets/logo-light.svg";
import LogoLight from "../../assets/logo-dark.svg";
import BoardLogo from "../../assets/icon-board.svg";
import Sun from "../../assets/icon-light-theme.svg";
import Moon from "../../assets/icon-dark-theme.svg";
import { ThemeDark } from "../../Themes";
import Cross from "../../assets/icon-cross.svg";
import Dots from "../../assets/icon-vertical-ellipsis.svg";
import {
  HeaderHolder,
  HeaderTitleLogo,
  ImgLogo,
  HeaderTitle,
  ArrowImg,
  ButtonsDots,
  PlusButton,
  ThreeDot,
  LogoImgDesktop,
  Line1,
  Line2,
  NavbarTrue,
  EyeImage,
  Overlay,
  NavbarMobileHolder,
  EditDeleteHoder,
  EditParagraph,
  DeleteParagraph,
  XImage,
} from "./Header.styles";
import IconBoardComp from "../../assets/IconBoardComp";
import {
  Board,
  BoardTitle,
  IconBoard,
  AllBoardsTitle,
  ThemeTogglerHolder,
  ImgDarkLightEye,
  CircleHolder,
  Circle,
} from "./Menu.styles";
import AddNewTask from "../AddNewTask/AddNewTask";
import { useAppDispatch, useAppSelector } from "../../Hooks";
import { toggleActive } from "../../reducer/slices/NewTask";
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
type Props = {
  theme: any;
  navbar: boolean;
  themeToggler: any;
  setNavbar: any;
};

const Header = ({ theme, navbar, setNavbar, themeToggler }: Props) => {
  const { height, width } = useWindowDimensions();
  const [navbarMobile, setNavBarMobile] = useState<boolean>(false);
  const Active = useAppSelector((state) => state.NewTaskReducer.active);
  const dispatch = useAppDispatch();
  return (
    <Fragment>
      {navbarMobile && width < 768 ? (
        <Overlay>
          <NavbarMobileHolder>
            <AllBoardsTitle>All boards()</AllBoardsTitle>
            <XImage
              src={Cross}
              alt="cross"
              onClick={() => setNavBarMobile(false)}
            />
            <Board>
              <IconBoard src={BoardLogo} />
              <BoardTitle>Platform Launch</BoardTitle>
            </Board>
            <ThemeTogglerHolder>
              <ImgDarkLightEye src={Moon} alt="Moon" />
              <CircleHolder onClick={() => themeToggler()}>
                <Circle></Circle>
              </CircleHolder>
              <ImgDarkLightEye src={Sun} alt="sun" />
            </ThemeTogglerHolder>
          </NavbarMobileHolder>
        </Overlay>
      ) : null}
      <HeaderHolder>
        <Line1 />
        <Line2 />
        <HeaderTitleLogo>
          {width >= 768 ? (
            <LogoImgDesktop
              src={theme === ThemeDark ? LogoDark : LogoLight}
              alt="logo-dark-desktop"
            />
          ) : null}
          {width >= 768 ? null : <ImgLogo src={LogoMobile} alt="logo-mobile" />}
          <HeaderTitle>Platform Launch</HeaderTitle>
          {width >= 768 ? null : (
            <ArrowImg
              src={ArrowDown}
              onClick={() => setNavBarMobile(true)}
              navbarMobile={navbarMobile}
              alt="logo-mobile"
            />
          )}
        </HeaderTitleLogo>
        <ButtonsDots>
          <PlusButton onClick={() => dispatch(toggleActive())}>
            {width >= 768 ? "+ Add New Task" : "+"}
          </PlusButton>
        </ButtonsDots>
      </HeaderHolder>
      <NavbarTrue navbar={navbar} onClick={() => setNavbar(true)}>
        <EyeImage src={EyeTrue} alt="eye" />
      </NavbarTrue>
      {Active ? (
        <Overlay>
          <AddNewTask />
        </Overlay>
      ) : null}
    </Fragment>
  );
};

export default Header;
