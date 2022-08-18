import React from "react";
import { Routes, Route } from "react-router-dom";
import Account from "./pages/Account";
import Explore from "./pages/Explore";
import Posts from "./pages/Posts";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Explore />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
};

export default Routing;
