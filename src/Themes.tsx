import { createGlobalStyle, withTheme } from "styled-components";

export const ThemeDark: ThemeProps = {
  background: "#20212C",
  navBarBackground: "#2B2C37",
  textColor: "#FFFFFF",
};
export const ThemeLight: ThemeProps = {
  background: "#F4F7FD",
  navBarBackground: "#FFF",
  textColor: "#000112",
};

interface ThemeProps {
  background: string;
  textColor: string;
  navBarBackground: string;
}
type GlobalThemeProps = {
  theme: ThemeProps;
};
export const GlobalStyle = createGlobalStyle<GlobalThemeProps>`
*{
    box-sizing: border-box;
    margin:0px;
    padding:0px;
}
body{
    display: flex;
    height: 100vh;
    flex-direction: column;
    font-family: 'Plus Jakarta Sans', sans-serif;
    background-color: ${(props) => props.theme.background};
    ::-webkit-scrollbar {
  width: 15px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: rgba(128, 128, 128, 0.269);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(128, 128, 128, 0.692);
}
}
`;
