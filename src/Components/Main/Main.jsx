import React from "react";
import GrillaPeliculas from "./GrillaPeliculas";
import styles from "./Main.module.css";
import { Link } from "react-router-dom";
import CarouselDestacados from "./CarouselDestacados";
const Main = () => {
  return (
    <>
      <CarouselDestacados />
      <Link to="/">
        <h1 className={styles.title}>Peliculas Populares</h1>
      </Link>
      <GrillaPeliculas />
    </>
  );
};

export default Main;
