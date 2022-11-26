import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkin from "./app/pages/Checkin";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Checkin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
