import React from "react";
import "./Navbar.css";
import { Button } from "@mui/material";
import UserProfile from "./UserProfile";
import { useState, useEffect } from "react";

const Navbar = (props) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const email = JSON.parse(localStorage.getItem("email"));
    if (email) {
      setEmail(email);
    }
  }, []);

  const renderSwitch = () => {
    switch (props.content) {
      case "checkin":
        return (
          <>
            <h1>GetJadwal</h1>
          </>
        );
      case "home":
        return (
          <div className="nav-content">
            <h1>GetJadwal</h1>
            <Button variant="contained" id="btnLogout" data-cy="btn-logout">
              Check out | {email}
            </Button>
          </div>
        );
    }
  };

  return <div className="navbar">{renderSwitch()}</div>;
};

export default Navbar;
