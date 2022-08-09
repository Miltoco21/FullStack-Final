import React from "react";
import GrillaPeliculas from "./GrillaPeliculas";
import styles from "./Main.module.css";
import { Link } from "react-router-dom";
import CarouselDestacados from "./CarouselDestacados";
const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
  return (
    <>
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1> </h1>
				<button className={styles.white_btn} onClick={handleLogout}>
				Cerrar sesion
				</button>
			</nav>
		</div>
      <CarouselDestacados />
      <Link to="/">
        <h1 className={styles.title}>Peliculas Populares</h1>
      </Link>
      <GrillaPeliculas />
    </>
  );
};

export default Main;

