import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import Schedule from "../components/Schedule";

const Home = () => {
  return (
    <div>
      <Navbar content="home"></Navbar>
      <Schedule></Schedule>
    </div>
  );
};

export default Home;
