import React, { useState,  useEffect } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PlusCircleFill, PencilFill, Trash3Fill } from "react-bootstrap-icons";
import axios from "axios";
import { toast } from "react-toastify";
import AddCategory from "../Inputs/AddCategory";

function MovieTable() {
  const dataMovie = [
    {
      id: 1,
      fecha: "18/06/1991",
      titulo: "asdas",
      descripcion: "sadasdasdasd",
      genero: ["a", "b", "c"],
      categoria: "sda",
      poster: "dasdasdasdasda",
    },
    {
      id: 2,
      fecha: "18/06/1991",
      titulo: "asdas",
      descripcion: "sadasdasdasd",
      genero: ["a", "b", "c"],
      categoria: "sda",
      poster: "dasdasdasdasda",
    },
    {
      id: 3,
      fecha: "18/06/1991",
      titulo: "asdas",
      descripcion: "sadasdasdasd",
      genero: ["a", "b", "c"],
      categoria: "sda",
      poster: "dasdasdasdasda",
    },
  ];

  const [movies, setMovies] = useState(dataMovie);

  const loadData = async () => {
      const response = await axios.get("http://localhost:/8080/api/get");
      console.log("response :>> ", response);
      setMovies(dataMovie);
    },
    onDelete = (id) => {
      axios.delete(`http://localhost:/8080/user/delete/${id}`);
      const arrayUser = movies.filter((item) => item.id !== id);
      setMovies(arrayUser);
      toast.success("usuario eliminado");
      setTimeout(() => loadData(), 500);
    };

  useEffect(() => {
      loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <Container>
      <div className="d-flex justify-content-end my-3">
        <Link to="/agregarmovie">
          <Button className="shadow rounded-pill pt-1" variant="danger">
            <PlusCircleFill className="me-2" />
            Agregar
          </Button>
        </Link>
      </div>
      <Table className="bg-white shadow" striped bordered hover responsive>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Titulo</th>
            <th>Descripcion</th>
            <th>Genero</th>
            <th>Categoria</th>
            <th>Poster</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
        {movies.map((item) => (
            <tr key={item.id}>
              <td>{item.fecha}</td>
              <td>{item.titulo}</td>
              <td>{item.descripcion}</td>
              <td>{item.genero}</td>
              <td>{item.categoria}</td>
              <td>{item.poster}</td>
              <td>
                <Link to={`/editarmovie/${item.id}`}>
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

export default MovieTable;

