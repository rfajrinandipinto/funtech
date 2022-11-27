import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkin from "./app/pages/Checkin";
import Home from "./app/pages/Home";
import "./App.css";
import Detail from "./app/pages/Detail";
import { ReactSession } from "react-client-session";

function App() {
  ReactSession.setStoreType("LocalStorage");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Checkin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
