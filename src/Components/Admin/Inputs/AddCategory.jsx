/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { PersonPlusFill, PersonFill } from "react-bootstrap-icons";


function AddCategory() {
  const empyform = {
    category: "",
  };
  const [dataCategory, setDataCategory] = useState(empyform);
  const { category } = dataCategory;
  const { id } = useParams();

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category ) {
      toast.error("Por favor complete los campos");
    } else {
      if (!id) {
        axios
          .post("http://localhost:8080/user/post", {
            category
          })
          .then(() => {
            setDataCategory(empyform);
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("Usuario creado con exito");
      } else {
        axios
          .put(`http://localhost:8080/user/update/${id}`, {
            category
          })
          .then(() => {
            setDataCategory(empyform);
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("Usuario editado con exito");
      }
      setTimeout(() => {}, 500);
    }
  };

  const handleChange = (e) => {
    const { category, value } = e.target;
    setDataCategory({ ...dataCategory, [category]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/user/${id}`)
      .then((resp) => setDataCategory({ ...resp.data[0] }));
  }, [id]);

  return (
    <div className="fd">
      <Container className="pt-5">
        <Row>
            <Col xs={12} md={6} className=" d-none d-md-flex align-items-center justify-content-center ">
                { id ? <PersonFill className="redcolor fonticon" /> : <PersonPlusFill className="redcolor fonticon"/>}
            </Col>
          <Col xs={12} md={6}>
            {id ? <h4 className="pb-4">Editar Categoria</h4> : <h4 className="pb-4">Agregar Categoria</h4>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="category">
                <Form.Label>Categoria</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu categoria"
                  value={category || ""}
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

export default AddCategory;
