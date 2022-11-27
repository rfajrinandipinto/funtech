import React from "react";
import { Button } from "@mui/material";
import "./Schedule.css";
import { useState, useEffect } from "react";
import UserProfile from "./UserProfile";
import axios from "axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CloseIcon from "@mui/icons-material/Close";
import Close from "@mui/icons-material/Close";
import { useNavigate } from "react-router";
import { ReactSession } from "react-client-session";

const Schedule = () => {
  const [data, setData] = useState({ monday: null, tuesday: null, wednesday: null, thursday: null, friday: null });
  const [list, setList] = useState({ monday: null, tuesday: null, wednesday: null, thursday: null, friday: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");

  const [submitable, setSubmitable] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const [matkul, setMatkul] = React.useState("");
  const [hari, setHari] = React.useState("");

  const handleChangeMatkul = (event) => {
    if (event.target.value !== "" && hari !== "") {
      setSubmitable(true);
    } else {
      setSubmitable(false);
    }

    setMatkul(event.target.value);
  };

  let handleSubmit = async (e) => {
    handleClose();
    e.preventDefault();
    try {
      let res = await fetch("https://getjadwal.api.devcode.gethired.id/schedule?email=" + email, {
        method: "POST",
        body: JSON.stringify({
          title: matkul,
          day: hari,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 201) {
        console.log("berhasil");
        refecth();
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const refecth = () => {
    const fetchData = async () => {
      const listMonday = await axios(`https://getjadwal.api.devcode.gethired.id/schedule?email=${email}&day=monday`);
      const listTuesday = await axios(`https://getjadwal.api.devcode.gethired.id/schedule?email=${email}&day=tuesday`);
      const listWednesday = await axios(`https://getjadwal.api.devcode.gethired.id/schedule?email=${email}&day=wednesday`);
      const listThursday = await axios(`https://getjadwal.api.devcode.gethired.id/schedule?email=${email}&day=thursday`);
      const listFriday = await axios(`https://getjadwal.api.devcode.gethired.id/schedule?email=${email}&day=friday`);
      const listDay = await axios(`https://getjadwal.api.devcode.gethired.id/schedule?email=${email}`);

      setList({ monday: listMonday.data, tuesday: listTuesday.data, wednesday: listWednesday.data, thursday: listThursday.data, friday: listFriday.data });
      setData(listDay.data.data);
      setLoading(false);
    };

    fetchData();
  };

  const handleChangeHari = (event) => {
    if (event.target.value !== "" && matkul !== "") {
      setSubmitable(true);
    } else {
      setSubmitable(false);
    }

    setHari(event.target.value);
  };

  useEffect(() => {
    const email = ReactSession.get("email");
    if (email) {
      setEmail(email);
    }
    console.log(UserProfile.getEmail());

    const fetchData = async () => {
      const listMonday = await axios(`https://getjadwal.api.devcode.gethired.id/schedule?email=${email}&day=monday`);
      const listTuesday = await axios(`https://getjadwal.api.devcode.gethired.id/schedule?email=${email}&day=tuesday`);
      const listWednesday = await axios(`https://getjadwal.api.devcode.gethired.id/schedule?email=${email}&day=wednesday`);
      const listThursday = await axios(`https://getjadwal.api.devcode.gethired.id/schedule?email=${email}&day=thursday`);
      const listFriday = await axios(`https://getjadwal.api.devcode.gethired.id/schedule?email=${email}&day=friday`);
      const listDay = await axios(`https://getjadwal.api.devcode.gethired.id/schedule?email=${email}`);

      setList({ monday: listMonday.data, tuesday: listTuesday.data, wednesday: listWednesday.data, thursday: listThursday.data, friday: listFriday.data });
      setData(listDay.data.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <Button data-cy="btn-create-schedule" variant="contained" id="btn-add" onClick={handleOpen}>
        + Buat Jadwal Kuliah
      </Button>
      <div className="schedule-list">
        <div className="schedule-day">
          <a href="detail">
            <div className="schedule-container schedule-day-senin" data-cy="card-day">
              <div class="title-card">
                <h3 data-cy="card-title-Senin">Senin</h3>
                <p data-cy="card-desc-Senin" className={data.monday !== 0 ? "not-null" : ""}>
                  {data.monday !== 0 ? data.monday + " Mata Kuliah" : "Belum ada mata kuliah "}
                </p>
              </div>
              <div className="list-card">
                {list.monday !== null
                  ? list.monday.data.map((data, i) => {
                      return (
                        <div className="day-card">
                          <p>{data.title}</p>
                        </div>
                      );
                    })
                  : ""}
              </div>
            </div>
          </a>
          <a href="detail/tuesday">
            <div className="schedule-container schedule-day-selasa">
              <div class="title-card" data-cy="card-day">
                <h3 data-cy="card-title-Selasa">Selasa</h3>
                <p data-cy="card-desc-Selasa" className={data.tuesday !== 0 ? "not-null" : ""}>
                  {data.tuesday !== 0 ? data.tuesday + " Mata Kuliah" : "Belum ada mata kuliah "}
                </p>
              </div>
              <div className="list-card">
                {list.tuesday !== null
                  ? list.tuesday.data.map((data, i) => {
                      return (
                        <div className="day-card">
                          <p>{data.title}</p>
                        </div>
                      );
                    })
                  : ""}
              </div>
            </div>
          </a>
          <a href="detail/wednesday">
            <div className="schedule-container schedule-day-rabu">
              <div class="title-card" data-cy="card-day">
                <h3 data-cy="card-title-Rabu">Rabu</h3>
                <p data-cy="card-desc-Rabu" className={data.wednesday !== 0 ? "not-null" : ""}>
                  {data.wednesday !== 0 ? data.wednesday + " Mata Kuliah" : "Belum ada mata kuliah "}
                </p>
              </div>
              <div className="list-card">
                {list.wednesday !== null
                  ? list.wednesday.data.map((data, i) => {
                      return (
                        <div className="day-card">
                          <p>{data.title}</p>
                        </div>
                      );
                    })
                  : ""}
              </div>
            </div>
          </a>
          <a href="detail/thursday">
            <div className="schedule-container schedule-day-kamis">
              <div class="title-card" data-cy="card-day">
                <h3 data-cy="card-title-Kamis">Kamis</h3>
                <p data-cy="card-desc-Kamis" className={data.thursday !== 0 ? "not-null" : ""}>
                  {data.thursday !== 0 ? data.thursday + " Mata Kuliah" : "Belum ada mata kuliah "}
                </p>
              </div>
              <div className="list-card">
                {list.thursday !== null
                  ? list.thursday.data.map((data, i) => {
                      return (
                        <div className="day-card">
                          <p>{data.title}</p>
                        </div>
                      );
                    })
                  : ""}
              </div>
            </div>
          </a>
          <a href="detail/friday">
            <div className="schedule-container schedule-day-jumat">
              <div class="title-card" data-cy="card-day">
                <h3 data-cy="card-title-Jumat">Jumat</h3>
                <p data-cy="card-desc-Jumat" className={data.friday !== 0 ? "not-null" : ""}>
                  {data.friday !== 0 ? data.friday + " Mata Kuliah" : "Belum ada mata kuliah "}
                </p>
              </div>
              <div className="list-card">
                {list.friday !== null
                  ? list.friday.data.map((data, i) => {
                      return (
                        <div className="day-card">
                          <p>{data.title}</p>
                        </div>
                      );
                    })
                  : ""}
              </div>
            </div>
          </a>
        </div>
      </div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <form onSubmit={handleSubmit} className="modal-form">
          <Box className="modal-box">
            <div className="modal-box-title">
              <Typography id="modal-modal-title" variant="h6" component="h2" data-cy="form-add">
                Buat Jadwal Kuliah
                <Button onClick={handleClose} data-cy="close-modal">
                  <Close></Close>
                </Button>
              </Typography>
            </div>

            <Typography id="modal-modal-description-1" className="modal-title">
              Mata Kuliah
            </Typography>
            <TextField
              inputProps={{
                "data-cy": "form-matkul",
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  marginInline: "35px",
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
              name="matkul"
              value={matkul}
              onChange={handleChangeMatkul}
              variant="outlined"
              placeholder="Masukkan Mata Kuliah"
            />
            <Typography id="modal-modal-description-2" className="modal-title" htmlFor="days">
              Pilih Hari
            </Typography>

            <FormControl
              htmlFor="days"
              fullWidth
              data-cy="form-day"
              sx={{
                "& .MuiOutlinedInput-root": {
                  marginInline: "35px",
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
            >
              <select name="hari" id="days" value={hari} onChange={handleChangeHari}>
                <option value={"monday"}>Senin</option>
                <option value={"tuesday"}>Selasa</option>
                <option value={"wednesday"}>Rabu</option>
                <option value={"thursday"}>Kamis</option>
                <option value={"friday"}>Jumat</option>
              </select>
            </FormControl>
            <div className="btn-container">
              <Button variant="contained" id="btn-save" disabled={submitable === false} data-cy="btn-submit" type="submit">
                Simpan
              </Button>
            </div>
          </Box>
        </form>
      </Modal>
    </div>
  );
};

export default Schedule;
