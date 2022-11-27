import React from "react";

const Schedule = () => {
  return (
    <div>
      <Button data-cy="btn-create-schedule" variant="contained">
        + Buat Jadwal Kuliah
      </Button>
      <div className="schedule-list"></div>
    </div>
  );
};

export default Schedule;
