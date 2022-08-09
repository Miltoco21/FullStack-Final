/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { PersonPlusFill, PersonFill } from "react-bootstrap-icons";


function AddUsers() {
  const empyform = {
    nombre: "",
    apellido: "",
    password: "",
    email: "",
    role: "",
  };
  const [dataUser, setDataUser] = useState(empyform);
  const { nombre, apellido, password, email, role } = dataUser;
  const { id } = useParams();

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !apellido || !password || !email || !role) {
      toast.error("Por favor complete los campos");
    } else {
      if (!id) {
        axios
          .post("http://localhost:8080/user/post", {
            nombre,
            apellido,
            password,
            email,
            role,
          })
          .then(() => {
            setDataUser(empyform);
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("Usuario creado con exito");
      } else {
        axios
          .put(`http://localhost:8080/user/update/${id}`, {
            nombre,
            apellido,
            password,
            email,
            role,
          })
          .then(() => {
            setDataUser(empyform);
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("Usuario editado con exito");
      }
      setTimeout(() => {}, 500);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataUser({ ...dataUser, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/user/${id}`)
      .then((resp) => setDataUser({ ...resp.data[0] }));
  }, [id]);

  return (
    <div className="fd">
      <Container className="pt-5">
        <Row>
            <Col xs={12} md={6} className=" d-none d-md-flex align-items-center justify-content-center ">
                { id ? <PersonFill className="redcolor fonticon" /> : <PersonPlusFill className="redcolor fonticon"/>}
            </Col>
          <Col xs={12} md={6}>
            {id ? <h4 className="pb-4">Editar usuario</h4> : <h4 className="pb-4">Agregar usuario</h4>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu nombre"
                  value={nombre || ""}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="surname">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu apellido"
                  value={apellido || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu email"
                  value={email || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresa tu password"
                  value={password || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="role">
                <Form.Label>Rol</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu rol"
                  value={role || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Link to="/admin">
                <Button variant="danger"> Volver</Button>
              </Link>
              <Button
                variant="warning"
                className="mx-4"
                type="submit"
                value={id ? "update" : "save"}
              >
                {id ? "Editar" : "Agregar"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AddUsers;
