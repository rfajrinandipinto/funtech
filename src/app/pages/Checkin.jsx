import React from "react";
import "./Checkin.css";
import Navbar from "../components/Navbar";
import Chekinform from "../components/Chekinform";

const Checkin = () => {
  return (
    <div>
      <Navbar content="checkin"></Navbar>
      <Chekinform></Chekinform>
    </div>
  );
};

export default Checkin;
