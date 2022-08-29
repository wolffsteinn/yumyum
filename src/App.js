
import SignUp from "./LoginSignup/Signup";
import Login from "./LoginSignup/Login";
import { AuthProvider } from "./Context/Context";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import React, { useState } from "react";
//react-helmet allows you to put plain HTML in our JSX and then outputs it as plain HTML
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./global-sidebar-styles/theme";
import { GlobalStyle } from "./global-sidebar-styles/globalStyles";
import ReviewForm from "./pages/review/review-form";
import MapView from "./pages/mapView";
import HawkerList from "./pages/hawkerList";
import List from "./List/list";

export const ThemeContext = React.createContext(null);


function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Helmet>
          <title>SideMenu Bar</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>

        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/mapView/*" element={<MapView />} />
            <Route path="/hawkerList/*" element={<List />} />
            <Route path="/postReview/*" element={<ReviewForm />} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </ThemeContext.Provider>

  );
}

export default App;
