import React from "react";
import { Route, Routes } from "react-router-dom";
import ChapterOne from "../modules/chapter-1/ChapterOne";

export default function BaseRoute() {
  return (
    <React.Suspense>
      <Routes>
        <Route index element={<ChapterOne />} />
        <Route path="home" element={<Home />} />
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
