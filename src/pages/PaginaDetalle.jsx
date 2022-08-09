import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import clientAxios from "../config/clientAxios";
import styles from "./PaginaDetalle.module.css";
import Loader from "../Loader/Loader";
import Header from "../Components/Header/Header";
const PaginaDetalle = () => {
  const { peliculaId } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  // const [generos, setGeneros] = useState([]);

  useEffect(() => {
    clientAxios.get(`/peliculasById/${peliculaId}`).then((response) => {
      setMovie(response.data);
      setIsLoader(true);
    });

    // fetch(
    //   `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=es-MX`
    // )
    //   .then((response) => response.json())
    //   .then((response) => {
    //     setGeneros(response.genres);
    //     console.log(generos);
    //   });
  }, [peliculaId]);

  return (
    <>
      {isLoader ? (
        <>
          <Header />
          <div className={styles.detalleContainer}>
            <img
              className={`${styles.col} ${styles.detalleImagen}`}
              src={movie.poster}
              alt={movie.titulo}
            />
            <div className={styles.col}>
              <p className={styles.firstItem}>
                <strong>Titulo: </strong>
                {movie.titulo}
              </p>
              <p>
                <strong>Descripcion:</strong> {movie.descripcion}
              </p>
              <p>
                <strong>Genero: </strong>
                {movie.genero.join(", ")}
              </p>
              <p>
                <strong>Fecha de Estreno: </strong>
                {movie.fecha}
              </p>
              <form>
                <h2>Deja tu comentario:</h2>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Reseña
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-primary">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default PaginaDetalle;
