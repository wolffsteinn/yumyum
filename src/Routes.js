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
import { useEffect, useState } from "react";
import { ref as databaseRef } from "firebase/database";
import { database } from "./Firebase";
import ReviewFeed from "./pages/Posts";
import IndividualReviews from "./IndvReviews";
import axios from "axios";
import hawkerDetails from "./PlaceDetails/hawker-details";
import hawkerData from "./hawker-centres-kml.json";
let hawkerNames = [];

const Routing = () => {
  // const hawkerString = JSON.stringify(hawkerDetails.name);
  // console.log(hawkerString);

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

      {hawkerData.map((item) => (
        <Route
          exact
          path={`/posts/${item.ADDRESSPOSTALCODE}`}
          element={
            <PrivateRoute>
              <Layout>
                <IndividualReviews hawkerDetails={item} />
              </Layout>
            </PrivateRoute>
          }
        />
      ))}

      {/* {reviews.map((review) => (
        <Route
          exact
          path={`/posts/${review.key}`}
          element={
            <PrivateRoute>
              <Layout>
                <ReviewFeed />
              </Layout>
            </PrivateRoute>
          }
        />
      ))} */}
    </Routes>
  );
};

export default Routing;
