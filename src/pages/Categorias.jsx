import { useState, useEffect } from "react";
import styles from "./Categorias.module.css";
import clientAxios from "../config/clientAxios";
import GridCategorias from "../Components/GridCategorias/GridCategorias";
import Header from "../Components/Header/Header";
const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    clientAxios
      .get("/categorias/getCategorias")
      .then((response) => setCategorias(response.data));
  }, []);
  return (
    <>
      <Header />
      <div>
        <h1 className={styles.titulo}>Categorias</h1>
        {categorias.map((categoria) => {
          return (
            <GridCategorias key={categoria.id} categoria={categoria.name} />
          );
        })}
      </div>
    </>
  );
};

export default Categorias;
