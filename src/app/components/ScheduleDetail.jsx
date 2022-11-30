import React from "react";
import "./ScheduleDetail.css";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState, useEffect } from "react";
import { ReactSession } from "react-client-session";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Close from "@mui/icons-material/Close";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const ScheduleDetail = () => {
  const [data, setData] = useState(null);
  const [id, setId] = useState(null);
  const [email, setEmail] = useState("");
  const [matkul, setMatkul] = useState("");
  const [submitable, setSubmitable] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  const [openDelete, setOpenDelete] = React.useState(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

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

  const handleChangeMatkul = (event) => {
    if (event.target.value !== "" && event.target.value !== null) {
      setSubmitable(true);
    } else {
      setSubmitable(false);
    }
    setMatkul(event.target.value);
  };

  const fetchData = async () => {
    const listData = await axios(`https://getjadwal.api.devcode.gethired.id/schedule?email=${email}&day=${day}`);

    setData(listData.data);
  };

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

  let handleSubmit = async (e) => {
    e.preventDefault();
    handleClose();
    setSubmitable;
    try {
      let res = await fetch("https://getjadwal.api.devcode.gethired.id/schedule?email=" + email, {
        method: "POST",
        body: JSON.stringify({
          title: matkul,
          day: day,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 201) {
        console.log("berhasil");
        fetchData();
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: 24,
    background: "#FFFFFF",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
    padding: "24px 35px;",
    width: "830px;",
  };

  return (
    <div>
      <div className="header">
        <a href="/home">
          <ArrowBackIosIcon data-cy="btn-back"></ArrowBackIosIcon>
        </a>
        <p data-cy="detail-title">{hari}</p>
        <Button variant="contained" id="btn-add-new" data-cy="btn-create-schedule" onClick={handleOpen}>
          + Tambah Mata Kuliah
        </Button>
      </div>
      <div className="main">
        {data === null ? (
          <img src="../public/todo-empty-state.png" alt="" data-cy="todo-empty-state" />
        ) : (
          data.data.map((data, index) => {
            return (
              <div className="sch-container">
                {" "}
                <p data-cy="card-item-title">{data.title}</p>
                <div className="action-icon">
                  <EditOutlinedIcon data-cy="card-item-edit" onClick={handleOpenEdit}></EditOutlinedIcon>
                  <DeleteOutlineOutlinedIcon data-cy="card-item-delete" onClick={handleOpenDelete}></DeleteOutlineOutlinedIcon>
                </div>
              </div>
            );
          })
        )}
      </div>

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style} data-cy="detail-form">
          <div className="modal-title">
            <h3>Tambah Mata Kuliah</h3>
            <Button onClick={handleClose} data-cy="close-modal">
              <Close></Close>
            </Button>
          </div>
          <div className="modal-content">
            <p>Mata Kuliah</p>
            <TextField
              id="outlined-basic"
              sx={{ width: "100%" }}
              inputProps={{
                "data-cy": "form-matkul",
              }}
              onChange={handleChangeMatkul}
            />
          </div>
          <div className="modal-btn">
            <Button variant="contained" id="btn-add-new-modal" data-cy="btn-submit" type="submit" disabled={submitable === false} onClick={handleSubmit}>
              Simpan
            </Button>
          </div>
        </Box>
      </Modal>

      <Modal open={openEdit} onClose={handleCloseEdit} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style} data-cy="detail-form">
          <div className="modal-title">
            <h3>Edit Mata Kuliah</h3>
            <Button onClick={handleCloseEdit} data-cy="close-modal">
              <Close></Close>
            </Button>
          </div>
          <div className="modal-content">
            <p>Mata Kuliah</p>
            <TextField
              id="outlined-basic"
              sx={{ width: "100%" }}
              inputProps={{
                "data-cy": "form-matkul",
              }}
              onChange={handleChangeMatkul}
            />
          </div>
          <div className="modal-btn">
            <Button variant="contained" id="btn-add-new-modal" data-cy="btn-submit" type="submit" disabled={submitable === false} onClick={handleSubmit}>
              Simpan
            </Button>
          </div>
        </Box>
      </Modal>

      <Modal open={openDelete} onClose={handleCloseDelete} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style} data-cy="form-delete">
          <div className="modal-title">
            <h3>Edit Mata Kuliah</h3>
            <Button onClick={handleCloseDelete} data-cy="close-modal">
              <Close></Close>
            </Button>
          </div>

          <div className="modal-btn">
            <Button variant="contained" id="btn-add-new-modal" data-cy="btn-close" type="submit" onClick={handleCloseDelete}>
              Simpan
            </Button>
            <Button variant="contained" id="btn-add-new-modal" data-cy="btn-submit" type="submit" onClick={handleSubmit}>
              Simpan
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ScheduleDetail;
