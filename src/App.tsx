import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/headerAndMenu/Header";
import { Provider } from "react-redux";
import Menu from "./components/headerAndMenu/Menu";
import BoardComponent from "./components/page/Board";
import { GlobalStyle, ThemeDark, ThemeLight } from "./Themes";
import { store } from "./Store";
function App() {
  const [theme, setTheme] = useState(ThemeDark);
  const [navbar, setNavbar] = useState<boolean>(true);
  const themeToggler = () => {
    theme === ThemeDark ? setTheme(ThemeLight) : setTheme(ThemeDark);
  };
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <Header
          theme={theme}
          navbar={navbar}
          setNavbar={setNavbar}
          themeToggler={themeToggler}
        />
        <Menu
          themeToggler={themeToggler}
          navbar={navbar}
          setNavbar={setNavbar}
        />
        <BoardComponent navbar={navbar} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
