import React from "react";
import "./ScheduleDetail.css";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const ScheduleDetail = () => {
  let { day } = useParams();
  return (
    <div>
      <div className="header">
        <a href="/home">
          <ArrowBackIosIcon data-cy="btn-back"></ArrowBackIosIcon>
        </a>
        <p data-cy="detail-title">{day}</p>
        <Button variant="contained" id="btn-add-new" data-cy="btn-create-schedule" type="submit">
          + Tambah Mata Kuliah
        </Button>
      </div>
    </div>
  );
};

export default ScheduleDetail;
