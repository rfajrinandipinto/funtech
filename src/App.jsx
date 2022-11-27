import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkin from "./app/pages/Checkin";
import Home from "./app/pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Checkin />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
