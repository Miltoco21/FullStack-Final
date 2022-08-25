import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import clientAxios from "../../config/clientAxios";
import PeliculaCard from "./PeliculaCard";
import Loader from "../../Loader/Loader";
import styles from "./GrillaPeliculas.module.css";
import Button from "react-bootstrap/Button";

const GrillaPeliculas = () => {
  const [movies, setMovies] = useState([]);
  const [moviesAux, setMoviesAux] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  const getPeliculas = async () => {
    await clientAxios
      .get("/peliculas")
      .then((response) => {
        setMovies(response.data);
        setMoviesAux(response.data);
        setIsLoader(true);

      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPeliculasRenovadas = async () => {
    await clientAxios
      .get("/peliculas/getPeliculas")
      .then((response) => {
        setMovies(response.data);
        setMoviesAux(response.data);
        setIsLoader(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPeliculas();
  }, []);

  const handleFilter = (text) => {
    if (text.length >= 3) {
      const peliculasFiltradas = movies.filter((movie) => {
        if (movie.titulo.toLowerCase().indexOf(text.toLowerCase()) !== -1) {
          return movie;
        }else{
          return null
        }
      });
      setMoviesAux(peliculasFiltradas);
    } else {
      setMoviesAux(movies);
    }
  };
  return (
    <>
      <form className={styles.searchContainer}>
        <div className={styles.searchBox}>
          <input
            className={styles.searchInput}
            onChange={(e) => handleFilter(e.target.value)}
            type="text"
          />
          <button className={styles.searchButton} type="submit">
            <FaSearch size={20} />
          </button>
        </div>
      </form>
      {isLoader ? (
        <ul className={styles.peliculasGrid}>
          {moviesAux.map((movie) => (
            <PeliculaCard key={movie.id} movie={movie} />
          ))}
        </ul>
      ) : (
        <Loader />
      )}
      <div className="d-flex justify-content-center">
        <Button
          className="my-5"
          onClick={() => getPeliculasRenovadas()}
          variant="danger"
        >
          Actualizar Peliculas
        </Button>
      </div>
    </>
  );
};
export default GrillaPeliculas;
