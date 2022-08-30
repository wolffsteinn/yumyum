import React from "react";
import { Routes, Route } from "react-router-dom";
import ReviewForm from "./pages/review/review-form";
import MapView from "./pages/mapView";
import List from "./pages/hawkerList";
import SignUp from "./LoginSignup/Signup";
import Login from "./LoginSignup/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Layout from "./components/layouts/Layout";
import ResetPassword from "./LoginSignup/forgotPassword";
import Logout from "./LoginSignup/logout";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/forgot-pw" element={<ResetPassword />} />

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
        path="/hawkerList"
        element={
          <PrivateRoute>
            <Layout>
              <List />
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
