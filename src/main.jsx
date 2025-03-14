import "./index.css";
import { RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
const root = document.getElementById("root");
import { lazy } from "react";
import { Suspense } from "react";
import LinearProgress from "@mui/joy/LinearProgress";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const App = lazy(() => sleep(5000).then(() => import("./App.jsx")));
const NewsPage = lazy(() => import("./NewsPage.jsx"));
const ProfilePage = lazy(() => import("./ProfilePage.jsx"));
const SkillPage = lazy(() => import("./SkillPage.jsx"));

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Suspense
      fallback={
        <LinearProgress
          className="bg-white mx-auto h-screen w-[50vh] flex justify-center items-center"
          color="success"
          bg-color="white"
        />
      }
    >
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product" element={<NewsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/skill" element={<SkillPage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
