import React, { useState,  useEffect } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PlusCircleFill, PencilFill, Trash3Fill } from "react-bootstrap-icons";
import axios from "axios";
import { toast } from "react-toastify";

function CategoryTable() {
  let data = [
    {
      id: 1,
      category: "drama"
    },
    {
      id: 2,
      category: "terror"
    },
    {
      id: 3,
      category: "comedia"
    },
  ];

  const [categories, setCategories] = useState(data);

  const loadData = async () => {
      const response = await axios.get("http://localhost:/8080/api/get");
      console.log("response :>> ", response);
      setCategories(data);
    },
    onDelete = (id) => {
      axios.delete(`http://localhost:/8080/user/delete/${id}`);
      const arrayUser = categories.filter((item) => item.id !== id);
      setCategories(arrayUser);
      toast.success("Categoria eliminada");
      setTimeout(() => loadData(), 500);
    };

  useEffect(() => {
      loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
              <td>{item.category}</td>
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
