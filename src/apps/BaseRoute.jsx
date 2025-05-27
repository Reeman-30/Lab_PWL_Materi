import React from "react";
import { Route, Routes } from "react-router-dom";
import ChapterOne from "../modules/chapter-1/ChapterOne";
import { NotFound } from "../errors/404";
import ChapterTwo from "../modules/chapter-2/ChapterTwo";
import Login from "../auth/Login";
import ChapterThree from "../modules/chapter-3/ChapterThree";
import PrivateRoute from "./PrivateRoute";

export default function BaseRoute() {
  return (
    <React.Suspense fallback={<div>Loading... </div>}>
      <Routes>
        <Route
          index
          element={
            <PrivateRoute>
              <ChapterOne />
            </PrivateRoute>
          }
        />
        <Route
          path="chapter-two"
          element={
            <PrivateRoute>
              <ChapterTwo />
            </PrivateRoute>
          }
        />
        <Route
          path="chapter-three"
          element={
            <PrivateRoute>
              <ChapterThree />
            </PrivateRoute>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Suspense>
  );
}

const Home = () => {
  return (
    <div className="text-center">
      <h1>Welcome to Home Page</h1>
    </div>
  );
};

const About = () => {
  return (
    <div className="text-center">
      <h1>Welcome to About Page</h1>
    </div>
  );
};
