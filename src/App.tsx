import React from "react";

import Home from "./pages/Home";

import './App.css';

import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { Plans } from "./pages/Plans/Plans";
import { Blog } from "./pages/Blog/Blog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
