import "./index.css";
import { RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
const root = document.getElementById("root");
import { lazy } from "react";
import { Suspense } from "react";
import LinearProgress from "@mui/joy/LinearProgress";
const App = lazy(() => import("./App.jsx"));
const NewsPage = lazy(() => import("./NewsPage.jsx"));
const ProfilePage = lazy(() => import("./ProfilePage.jsx"));
const SkillPage = lazy(() => import("./SkillPage.jsx"));

ReactDOM.createRoot(root).render(
  <Suspense fallback={<LinearProgress color="neutral" variant="plain" />}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product" element={<NewsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/skill" element={<SkillPage />} />
      </Routes>
    </BrowserRouter>
  </Suspense>
);
