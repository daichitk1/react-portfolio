import './index.css'
import App from './App.jsx';
import ProductPage from './ProductPage.jsx';
import SkillPage from './SkillPage.jsx';
import ProfilePage from './ProfilePage.jsx';
import { RouterProvider } from 'react-router-dom';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/product" element={<ProductPage />} />
    <Route path="/profile" element={<ProfilePage />} />
    <Route path="/skill" element={<SkillPage />} />
  </Routes>
  </BrowserRouter>
)
