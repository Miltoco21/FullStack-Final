import React, { useState, useEffect } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PlusCircleFill, PencilFill, Trash3Fill } from "react-bootstrap-icons";
import clientAxios from "../../../config/clientAxios";

function CategoryTable() {
  const [showCategory, setShowCategory] = useState(false),
    [category, setCategory] = useState(null),
    [categories, setCategories] = useState([]),
    handleShow = () => setShowCategory(true),
    onEdit = (item) => {
      console.log(item);
      setCategory(item);
      setShowCategory(true);
    },
    onDelete = (id) => {
      const arrayUser = categories.filter((item) => item.id !== id);
      setCategories(arrayUser);
    };

  useEffect(() => {
    clientAxios.get("/categorias/getCategorias").then((response) => {
      setCategories(response.data);
    });
  }, []);
  console.log(categories);
  return (
    <Container>
      <div className="d-flex justify-content-end my-3">
        <Link to="/agregarcategoria">
          <Button className="shadow rounded-pill pt-1" variant="danger">
            <PlusCircleFill className="me-2" />
            Agregar
          </Button>
        </Link>
      </div>
      <Table className="bg-white shadow" striped bordered hover responsive>
        <thead>
          <tr>
            <th>Category</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <Link to={`/editarcategoria/${item.id}`}>
                  <Button variant="link">
                    <PencilFill className="text-warning" />
                  </Button>
                </Link>
              </td>
              <td>
                <Button variant="link" onClick={() => onDelete(item.id)}>
                  <Trash3Fill className="text-danger" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default CategoryTable;
