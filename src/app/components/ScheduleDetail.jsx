import React from "react";
import "./ScheduleDetail.css";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState, useEffect } from "react";
import { ReactSession } from "react-client-session";
import axios from "axios";

const ScheduleDetail = () => {
  const [data, setData] = useState(null);
  const [email, setEmail] = useState("");

  let { day } = useParams();
  switch (day) {
    case "monday":
      var hari = "Senin";
      break;
    case "tuesday":
      var hari = "Selasa";
      break;
    case "wednesday":
      var hari = "Rabu";
      break;
    case "thursday":
      var hari = "Kamis";
      break;
    case "friday":
      var hari = "Jumat";
      break;
  }

  useEffect(() => {
    const email = ReactSession.get("email");
    if (email) {
      setEmail(email);
    }

    const fetchData = async () => {
      const listData = await axios(`https://getjadwal.api.devcode.gethired.id/schedule?email=${email}&day=${day}`);

      setData(listData.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="header">
        <a href="/home">
          <ArrowBackIosIcon data-cy="btn-back"></ArrowBackIosIcon>
        </a>
        <p data-cy="detail-title">{hari}</p>
        <Button variant="contained" id="btn-add-new" data-cy="btn-create-schedule" type="submit">
          + Tambah Mata Kuliah
        </Button>
      </div>
      <div className="main">{data === null ? <img src="../public/todo-empty-state.png" alt="" data-cy="todo-empty-state" /> : ""}</div>
    </div>
  );
};

export default ScheduleDetail;
