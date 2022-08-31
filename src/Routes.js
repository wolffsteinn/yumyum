import React from "react";
import { Routes, Route } from "react-router-dom";
// import { RemoveScroll } from "react-remove-scroll";
import ReviewForm from "./pages/reviewForm/review-form";
import MapView from "./pages/map/mapView";
import SignUp from "./LoginSignup/Signup";
import Login from "./LoginSignup/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Layout from "./components/layouts/Layout";
import ResetPassword from "./LoginSignup/forgotPassword";
import Logout from "./LoginSignup/logout";
import ResetProfile from "./LoginSignup/resetAuth";
import Posts from "./pages/Posts";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-pw" element={<ResetPassword />} />
      <Route
        exact
        path="/logout"
        element={
          <PrivateRoute>
            <Layout>
              <Logout />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        exact
        path="/settings"
        element={
          <PrivateRoute>
            <Layout>
              <ResetProfile />
            </Layout>
          </PrivateRoute>
        }
      />

      <Route
        exact
        path="/posts"
        element={
          <PrivateRoute>
            <Layout>
              <Posts />
            </Layout>
          </PrivateRoute>
        }
      />

      <Route
        exact
        path="/dashboard/*"
        element={
          <PrivateRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        exact
        path="/mapView"
        element={
          <PrivateRoute>
            <Layout>
              <MapView />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        exact
        path="/postReview"
        element={
          <PrivateRoute>
            <Layout>
              <ReviewForm />
            </Layout>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default Routing;
