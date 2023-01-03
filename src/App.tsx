import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";

function App() {
  return (
    // <h1 className="bg-black underline">Aqui</h1>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
