import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { StylesLayout, StylesMain } from "./Layout-styles";

const Layout = ({ children }) => {
  return (
    <StylesLayout>
      <Sidebar />
      {/* this is the part that is rendering each route when the sidebar is clicked */}
      <StylesMain>{children}</StylesMain>
    </StylesLayout>
  );
};

export default Layout;
