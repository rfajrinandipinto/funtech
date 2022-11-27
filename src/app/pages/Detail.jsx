import React from "react";
import Navbar from "../components/Navbar";
import ScheduleDetail from "../components/ScheduleDetail";
import UserProfile from "../components/UserProfile";
import "./Detail.css";

const Detail = () => {
  return (
    <div>
      <Navbar content="home"></Navbar>
      <ScheduleDetail></ScheduleDetail>
    </div>
  );
};

export default Detail;
