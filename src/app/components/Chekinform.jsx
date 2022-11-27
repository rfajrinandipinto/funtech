import React from "react";
import "./Chekinform.css";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router";
import ErrorIcon from "@mui/icons-material/Error";
import Button from "@mui/material/Button";
import UserProfile from "./UserProfile";
import { useEffect } from "react";
import { ReactSession } from "react-client-session";

const Chekinform = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Format email tidak sesuai");
    } else {
      setError(null);
    }

    setEmail(event.target.value);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://getjadwal.api.devcode.gethired.id/checkin", {
        method: "POST",
        body: JSON.stringify({
          email: email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        console.log("berhasil");
        UserProfile.setEmail(email);
        ReactSession.set("email", email);
        navigate("/home");
      } else {
        console.log(email);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="chekinform">
      <h2 data-cy="text-login">Check In</h2>
      <form className="email-form" onSubmit={handleSubmit}>
        <label htmlFor="outlined-basic">Email</label>
        <TextField
          inputProps={{
            "data-cy": "input-email",
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              background: "rgba(244, 244, 244, 1)",
            },
            "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
                borderColor: "rgba(217, 1, 156, 1)",
              },
              background: "rgba(255, 255, 255, 1)",
            },
            "& .MuiFormHelperText-root": {
              fontSize: "16px",
              fontWeight: "400",
              display: "flex",
              alignItems: "center",
              marginInline: "0",
            },
          }}
          id="outlined-basic"
          name="email"
          value={email}
          onChange={handleChange}
          variant="outlined"
          placeholder="Masukkan email anda"
          error={error !== null}
          helperText={
            error !== null ? (
              <div data-cy="error-email" className="error-text">
                <ErrorIcon style={{ marginRight: "8px" }}></ErrorIcon> Format email tidak sesuai
              </div>
            ) : (
              ""
            )
          }
        />

        <Button data-cy="btn-login" variant="contained" id="btnCheck" disabled={error !== null || email == ""} type="submit">
          Mulai Sesi
        </Button>
      </form>
    </div>
  );
};

export default Chekinform;
