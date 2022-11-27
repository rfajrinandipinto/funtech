import React from "react";
import { Button } from "@mui/material";
import "./Schedule.css";

const Schedule = () => {
  return (
    <div className="container">
      <Button data-cy="btn-create-schedule" variant="contained" id="btn-add">
        + Buat Jadwal Kuliah
      </Button>
      <div className="schedule-list">
        <div className="schedule-day">
          <div className="schedule-container schedule-day-senin">
            <div class="title-card" data-cy="card-day">
              <h3 data-cy="card-title-Senin">Senin</h3>
              <p data-cy="card-desc-Senin">Belum ada mata kuliah</p>
            </div>
          </div>
          <div className="schedule-container schedule-day-selasa">
            <div class="title-card" data-cy="card-day">
              <h3 data-cy="card-title-Selasa">Selasa</h3>
              <p data-cy="card-desc-Selasa">Belum ada mata kuliah</p>
            </div>
          </div>
          <div className="schedule-container schedule-day-rabu">
            <div class="title-card" data-cy="card-day">
              <h3 data-cy="card-title-Rabu">Rabu</h3>
              <p data-cy="card-desc-Rabu">Belum ada mata kuliah</p>
            </div>
          </div>
          <div className="schedule-container schedule-day-kamis">
            <div class="title-card" data-cy="card-day">
              <h3 data-cy="card-title-Kamis">Kamis</h3>
              <p data-cy="card-desc-Kamis">Belum ada mata kuliah</p>
            </div>
          </div>
          <div className="schedule-container schedule-day-jumat">
            <div class="title-card" data-cy="card-day">
              <h3 data-cy="card-title-Jumat">Jumat</h3>
              <p data-cy="card-desc-Jumat">Belum ada mata kuliah</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
