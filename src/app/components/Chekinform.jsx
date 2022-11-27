import React from "react";
import "./Chekinform.css";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import ErrorIcon from "@mui/icons-material/Error";
import Button from "@mui/material/Button";

const Chekinform = () => {
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Format email tidak sesuai");
    } else {
      setError(null);
    }

    setMessage(event.target.value);
  };

  return (
    <div className="chekinform">
      <h2 data-cy="text-login">Check In</h2>

      <label htmlFor="outlined-basic">Email</label>
      <TextField
        data-cy="input-email"
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
        value={message}
        onChange={handleChange}
        variant="outlined"
        placeholder="Masukkan email anda"
        error={error !== null}
        helperText={
          error !== null ? (
            <>
              <ErrorIcon style={{ marginRight: "8px" }}></ErrorIcon> Format email tidak sesuai
            </>
          ) : (
            ""
          )
        }
      />

      <Button data-cy="btn-login" variant="contained" id="btnCheck" disabled={error !== null || message == null}>
        Mulai Sesi
      </Button>
    </div>
  );
};

export default Chekinform;
