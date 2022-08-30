import React, { useState } from "react";
import { AuthProvider } from "./Context/Context";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./global-sidebar-styles/theme";
import { GlobalStyle } from "./global-sidebar-styles/globalStyles";
import Routing from "./Routes";

export const ThemeContext = React.createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const themeStyle = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Helmet>
          <title>YumYum</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <AuthProvider>
          <Routing />
        </AuthProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
