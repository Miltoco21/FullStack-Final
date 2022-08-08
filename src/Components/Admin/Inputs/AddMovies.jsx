/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { PersonPlusFill, PersonFill } from "react-bootstrap-icons";


function AddMovies() {
  const empyform = {
    fecha: "",
    titulo: "",
    categoria: "",
    genero: "",
    descripcion: "",
    poster: ""
  };
  const [dataMovie, setDataMovie] = useState(empyform);
  const { fecha, titulo, categoria, genero, descripcion, poster } = dataMovie;
  const { id } = useParams();

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fecha || !titulo || !categoria || !genero || !descripcion || !poster) {
      toast.error("Por favor complete los campos");
    } else {
      if (!id) {
        axios
          .post("http://localhost:8080/user/post", {
            fecha,
            titulo,
            categoria,
            genero,
            descripcion,
            poster
          })
          .then(() => {
            setDataMovie(empyform);
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("Usuario creado con exito");
      } else {
        axios
          .put(`http://localhost:8080/user/update/${id}`, {
            fecha,
            titulo,
            categoria,
            genero,
            descripcion,
          })
          .then(() => {
            setDataMovie(empyform);
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("Usuario editado con exito");
      }
      setTimeout(() => {}, 500);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataMovie({ ...dataMovie, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/user/${id}`)
      .then((resp) => setDataMovie({ ...resp.data[0] }));
  }, [id]);

  return (
    <div className="fd">
      <Container className="pt-5">
        <Row>
            <Col xs={12} md={6} className=" d-none d-md-flex align-items-center justify-content-center ">
                { id ? <PersonFill className="redcolor fonticon" /> : <PersonPlusFill className="redcolor fonticon"/>}
            </Col>
          <Col xs={12} md={6}>
            {id ? <h4 className="pb-4">Editar Pelicula</h4> : <h4 className="pb-4">Agregar Pelicula</h4>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="fecha">
                <Form.Label>fecha</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu fecha"
                  value={fecha || ""}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="surname">
                <Form.Label>Titulo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu titulo"
                  value={titulo || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="genero">
                <Form.Label>Genero</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu genero"
                  value={genero || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="categoria">
                <Form.Label>Categoria</Form.Label>
                <Form.Control
                  type="categoria"
                  placeholder="Ingresa tu categoria"
                  value={categoria || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="descripcion">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu rol"
                  value={descripcion || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="poster">
                <Form.Label>Poster</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu rol"
                  value={poster || ""}
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

export default AddMovies;
