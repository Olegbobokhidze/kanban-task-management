import styled from "styled-components";
import { ThemeDark, ThemeLight } from "../../Themes";

export const HeaderHolder = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  color: ${(props) =>
    props.theme === ThemeDark ? ThemeDark.textColor : ThemeLight.textColor};
  background-color: ${(props) =>
    props.theme === ThemeDark
      ? ThemeDark.navBarBackground
      : ThemeLight.navBarBackground};
  position: fixed;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
`;
export const Line1 = styled.hr`
  width: 100%;
  height: 1px;
  border: 1px solid
    ${(props) => (props.theme === ThemeDark ? "#3e3f4e" : "#E4EBFA")};
  left: -5px;
  bottom: 0px;
  position: absolute;
`;
export const Line2 = styled.hr`
  display: none;
  width: 80px;
  border: 1px solid
    ${(props) => (props.theme === ThemeDark ? "#3e3f4e" : "#E4EBFA")};
  transform: rotate(90deg);
  position: absolute;
  left: 219px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
export const LogoImgDesktop = styled.img`
  width: 152px;
  height: 25px;
`;
export const HeaderTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
`;
export const HeaderTitleLogo = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;
export const ImgLogo = styled.img`
  width: 24px;
  height: 25px;
`;
type PropNavbarMobile = {
  navbarMobile: boolean;
};
export const ArrowImg = styled.img<PropNavbarMobile>`
  cursor: pointer;
  transform: ${(props) => (props.navbarMobile ? "rotate(180deg)" : "none")};
`;
export const PlusButton = styled.button`
  background-color: #635fc7;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 32px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 24px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #a8a4ff;
  }
  @media screen and (min-width: 768px) {
    width: 164px;
    height: 48px;
    font-size: 15px;
  }
`;
export const ThreeDot = styled.img`
  width: 5px;
  height: 16px;
  cursor: pointer;
`;
export const ButtonsDots = styled.div`
  display: flex;
  width: 80px;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 200px;
    font-size: 15px;
  }
`;
interface PropNavbar {
  navbar: boolean;
}
export const NavbarTrue = styled.div<PropNavbar>`
  width: 56px;
  position: fixed;
  bottom: 70px;
  height: 48px;
  cursor: pointer;
  background-color: #635fc7;
  display: ${(props) => (props.navbar ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  &:hover {
    background-color: #a8a4ff;
  }
  display: none;
  z-index: 99;
  @media screen and (min-width: 768px) {
    display: ${(props) => (props.navbar ? "none" : "flex")};
  }
`;
export const EyeImage = styled.img``;
export const NavbarMobileHolder = styled.div`
  display: flex;
  background-color: ${(props) =>
    props.theme === ThemeDark
      ? ThemeDark.navBarBackground
      : ThemeLight.navBarBackground};
  width: 264px;
  height: 200px;
  opacity: 1;
  border-radius: 8px;
  position: absolute;
  top: 90px;
  left: 50px;
  z-index: 999;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
`;
export const Overlay = styled.div`
  position: fixed;
  display: flex;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 9;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
export const EditDeleteHoder = styled.div`
  display: flex;
  width: 150px;
  height: 80px;
  justify-content: space-evenly;
  border-radius: 10px;
  flex-direction: column;
  position: absolute;
  top: 85px;
  right: 20px;
  padding: 10px;
  z-index: 100;
  background-color: ${(props) =>
    props.theme === ThemeDark
      ? ThemeDark.navBarBackground
      : ThemeLight.navBarBackground};
`;
export const EditParagraph = styled.p`
  font-size: 15px;
  cursor: pointer;
  color: #828fa3;
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
export const XImage = styled.img`
  width: 13px;
  position: absolute;
  right: 30px;
  top: 30px;
  height: 14px;
  cursor: pointer;
`;
