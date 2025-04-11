import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
const root = document.getElementById("root");
import { lazy } from "react";
import { Suspense } from "react";
import LinearProgress from "@mui/joy/LinearProgress";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const PortfolioPage = lazy(() =>
  sleep(2500).then(() => import("./PortfolioPage.jsx"))
);
const BlogPage = lazy(() => import("./BlogPage.jsx"));
const ProfilePage = lazy(() => import("./ProfilePage.jsx"));
const SkillPage = lazy(() => import("./SkillPage.jsx"));

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Suspense
      fallback={
        <LinearProgress
          className="bg-white mx-auto h-screen w-screen flex justify-center items-center"
          color="success"
        />
      }
    >
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/skill" element={<SkillPage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
