import styled from "styled-components";
import { ThemeDark, ThemeLight } from "../../Themes";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;
interface PropNavbar {
  navbar: boolean;
}
export const BoardHolder = styled.div<PropNavbar>`
  position: absolute;
  left: 0rem;
  display: flex;
  min-width: 100%;
  height: 80%;
  top: 90px;
  transition: left 0.2s ease;
  padding: 1.5rem 2rem;
  @media screen and (min-width: 768px) {
    left: ${(props) => (props.navbar ? "18.75rem" : "0rem")};
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  width: 17.5rem;
  height: 100%;
  background-color: ${(props) =>
    props.theme === ThemeDark ? ThemeDark.background : ThemeLight.background};
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 6rem;
  border: 1px solid rgba(134, 134, 134, 0.1);
  background-color: ${(props) =>
    props.theme === ThemeDark
      ? ThemeDark.navBarBackground
      : ThemeLight.navBarBackground};
  box-shadow: 0 4px 6px #364e7e1a;
  padding: 1.5rem 1rem;
  overflow: hidden;
  border-radius: 5px;
  margin-bottom: 1.5rem;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
export const CardTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) =>
    props.theme === ThemeDark ? ThemeDark.textColor : ThemeLight.textColor};
`;
export const CardSubtaskCount = styled.div`
  color: #828fa3;
  font-weight: 700;
  font-size: 12px;
  margin-top: 3px;
`;
export const ColumnNameHolder = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const TodoColor = styled.div`
  width: 15px;
  height: 15px;
  background: #49c4e5;
  border-radius: 50%;
  margin-right: 10px;
`;
export const ColumnTitle = styled.p`
  font-size: 15px;
  color: #828fa3;
  text-transform: uppercase;
  font-weight: 700;
`;
