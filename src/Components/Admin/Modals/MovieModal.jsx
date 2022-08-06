import React, { useState } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import { PlusCircle, Pencil, XCircle } from "react-bootstrap-icons";
import { MultiSelect } from "react-multi-select-component";
/* import Swal from "sweetalert2";
import axios from "axios"; */

function MovieModal({
  showMovie,
  setShowMovie,
  selectedUser,
  setSelectedUser,
}) {

  const options = [
    { label: "Accion ", value: "accion" },
    { label: "Comedia ", value: "comedia" },
    { label: "Terror ", value: "terror" },
  ];
  const emptyForm = {
      titulo: "",
      fecha: "",
      genero: [],
      descripcion: "",
      categoria: "",
      poster: "",
    },
    [selected, setSelected] = useState([]),
    [errorMsg, setErrorMsg] = useState(""),
    [showAlert, setShowAlert] = useState(false),
    [form, setForm] = useState(emptyForm),
    handleChange = ({ target }) =>
      setForm({ ...form, [target.id]: target.value }),
    handleClose = () => {
      setShowMovie(false);
      setErrorMsg("");
      setForm(emptyForm);
      setShowAlert(false);
      setSelectedUser();
    },
    handleSubmit = async (e) => {
      e.preventDefault();
      if (form.name.length < 3) {
        setShowAlert(true);
        setErrorMsg("El nombre es muy corto");
        return;
      }
      if (form.surname.length < 2) {
        setShowAlert(true);
        setErrorMsg("El apellido es muy corto");
        return;
      }
      if (form.username.length < 3) {
        setShowAlert(true);
        setErrorMsg("El usuario es muy corto");
        return;
      }
      if (form.password.length < 6) {
        setShowAlert(true);
        setErrorMsg("El password es muy corta");
        return;
      }
      if (form.email.length < 0) {
        setShowAlert(true);
        setErrorMsg("El email es muy corto");
        return;
      }
      /* axios({
        method: "post",
        url: `/users/${selectedUser.id ? `edit/${selectedUser.id}` : "create"}`,
        data: { ...form },
      })
        .then((response) => {
          if (response.status === 200) {
            Swal.fire({
              title: "Hecho!",
              text: `Usuario ${selectedUser.id ? "Modificado" : "Creado"}!`,
              icon: "success",
              timer: 2000,
              showConfirmButton: false,
            });
            handleClose();
          } else {
            Swal.fire({
              title: "Hubo un error",
              icon: "error",
              timer: 2000,
              showConfirmButton: false,
            });
            throw new Error(response.data.msg);
          }
        })
        .catch((error) =>
          console.log("Hubo un problema con la petición: " + error.message)
        ); */
      handleClose();
    };

  return (
    <Modal show={showMovie} centered backdrop="static" onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {selectedUser ? "Modificar " : "Crear "} Pelicula
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="titulo">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresar Titulo"
              required
              value={form.titulo}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="date"
              required
              value={form.date}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="genero">
            <Form.Label>Genero</Form.Label>
            
      <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
          </Form.Group>
          <Form.Group className="mb-3" controlId="descripcion">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresar descripcion"
              required
              value={form.descripcion}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="categoria">
            <Form.Label>Categoria</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Seleccione la categoria</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="poster">
            <Form.Label>Poster</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresar link del poster"
              required
              value={form.poster}
              onChange={handleChange}
            />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button
              variant="warning"
              className="shadow zoom me-4"
              type="submit"
            >
              {selectedUser ? (
                <>
                  <Pencil className="me-2" /> Modificar
                </>
              ) : (
                <>
                  <PlusCircle className="me-2" /> Agregar
                </>
              )}
            </Button>
            <Button
              variant="danger"
              onClick={handleClose}
              className="shadow zoom bk"
            >
              <XCircle className="me-2" />
              Cerrar
            </Button>
          </div>
        </Form>
        <div className="mt-4">
          {showAlert ? (
            <Alert
              variant="danger"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              {errorMsg}
            </Alert>
          ) : null}
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MovieModal;
