import React, { useState } from "react";
import { Table, Button, Container } from "react-bootstrap";
import MovieModal from "../Modals/MovieModal";
import { PlusCircleFill, PencilFill, Trash3Fill } from "react-bootstrap-icons";

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

  const [showMovie, setShowMovie] = useState(false),
    [movies, setMovies] = useState(dataMovie),
    [movie, setMovie] = useState(false),

    handleShow = () => setShowMovie(true),
    onEdit = item => {
      console.log(item);
      setMovie(item);
      setShowMovie(true);
    },

    onDelete = (id) => {
      const arrayUser = movies.filter(item => item.id !== id)
      setMovies(arrayUser)
    };

  return (
    <Container>
      <div className="d-flex justify-content-end my-3">
        <Button className="shadow" variant="danger" onClick={handleShow}>
          <PlusCircleFill className="me-2" />
          Agregar
        </Button>
      </div>
      <Table className="bg-white shadow" striped bordered hover responsive>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Titulo</th>
            <th>Genero</th>
            <th>Descripcion</th>
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
              <td>{item.genero.map(i => i.length)}</td>
              <td>{item.descripcion}</td>
              <td>{item.categoria}</td>
              <td>{item.poster}</td>
              <td>
                <Button variant="link" onClick={() => onEdit(item)}>
                  <PencilFill className="text-warning" />
                </Button>
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
      <MovieModal
        showMovie={showMovie}
        setShowMovie={setShowMovie}
        movie={movie}
        setMovie={setMovie}
        movies={movies}
        setMovies={setMovies}
      />
    </Container>
  );
}

export default MovieTable;
