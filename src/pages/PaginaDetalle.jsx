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
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Reseña
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-danger">
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
