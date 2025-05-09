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
  sleep(2500).then(() => import("./Page/PortfolioPage.jsx"))
);
const BlogPage = lazy(() => import("./Page/Blog/BlogPage.jsx"));
const ProfilePage = lazy(() => import("./Page/ProfilePage.jsx"));
const SkillPage = lazy(() => import("./Page/SkillPage.jsx"));
const Page404 = lazy(() => import("./Page/Page404.jsx"));
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
        <Route path="/" element={<ProfilePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/skill" element={<SkillPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
