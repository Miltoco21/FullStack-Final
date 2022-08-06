import React, { useState } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import { PlusCircle, Pencil, XCircle } from "react-bootstrap-icons";

function UserModal({ showUser, setShowUser, user, setUser, users, setUsers }) {
  const emptyForm = {
      nombre: "",
      apellido: "",
      password: "",
      email: "",
      role: "",
    },
    [errorMsg, setErrorMsg] = useState(""),
    [showAlert, setShowAlert] = useState(false),
    [form, setForm] = useState(emptyForm),

    handleChange = ({ target }) =>
      setForm({ ...form, [target.id]: target.value }),

    handleClose = () => {
      setShowUser(false);
      setErrorMsg("");
      setForm(emptyForm);
      setShowAlert(false);
    },

    
    handleSubmit = async (e) => {
      e.preventDefault();
      // eslint-disable-next-line no-lone-blocks
      {user === null ? setForm(emptyForm): setForm(user)};
      console.log('form', form)
      if (form.nombre.length < 3) {
        setShowAlert(true);
        setErrorMsg("El nombre es muy corto");
        return;
      }
      if (form.apellido.length < 2) {
        setShowAlert(true);
        setErrorMsg("El apellido es muy corto");
        return;
      }
      if (form.role !== "user" && form.role !== "admin") {
        setShowAlert(true);
        setErrorMsg("Elija un tipo de usuario");
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
      // eslint-disable-next-line no-lone-blocks
      {
        user === null ? setUsers([...users, form ]): setUser(item => item.id === user.id ? {id:user.id, user} : item ) ;
      }

      handleClose();
    };
    console.log("user", user);

/*     useEffect(() => {
      if (showUser && user) setForm(user);
    }, [user, showUser]); // eslint-disable-line */

  return (
    <Modal show={showUser} centered backdrop="static" onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{user ? "Modificar " : "Crear "} Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresar Nombre"
              required
              value={form.nombre}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="apellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresar Apellido"
              required
              value={form.apellido}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresar mail"
              required
              value={form.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresar contraseña"
              required
              value={form.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="role">
            <Form.Label>Rol</Form.Label>
            <Form.Select
              aria-label="Default select example"
              type="text"
              value={form.role}
              onChange={handleChange}
            >
              <option value="0">Open this select menu</option>
              <option value="user">Usuarios</option>
              <option value="admin">Administrador</option>
            </Form.Select>
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button
              variant="warning"
              className="shadow zoom me-4"
              type="submit"
            >
              {user ? (
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

export default UserModal;
