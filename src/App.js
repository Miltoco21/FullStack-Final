import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
// import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home";
import Categorias from "./pages/Categorias";
import PaginaDetalle from "./pages/PaginaDetalle";
import DetalleCategoria from "./pages/DetalleCategoria";
import FullContenido from "./pages/FullContenido";
import Registro from "./Components/Registro/Registro";
import Login from "./Components/Login/Login";
import Error404 from "./pages/Error404";
import Footer from "./Components/Footer/Footer";
import Admin from "./Components/Admin/Admin";
import AdminCategorias from "./pages/AdminCategorias";
import AdminPeliculas from "./pages/AdminPeliculas";
import AdminUsuarios from "./pages/AdminUsuarios";
import AgregarCategoria from "./Components/AgregarCategoria/AgregarCategoria";
import AgregarPelicula from "./Components/AgregarPelicula/AgregarPelicula";
// import clientAxios from "./config/clientAxios";

function App() {
  const user = localStorage.getItem("token");

  // const [roles, setRoles] = useState();
  // useEffect(() => {
  //   clientAxios.get("/registro/getRoles").then((response) => {
  //     setRoles(response.data);
  //   });
  // }, []);
  // localStorage.setItem("email", `${roles.email}`);
  // localStorage.setItem("role", `${roles.role}`);

  // console.log(roles);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {user && <Route path="/" element={<Home />} />}
          {user && <Route path="/admin" element={<Admin />} />}
          <Route path="/error404" element={<Error404 />} />
          <Route path="/registro" exact element={<Registro />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/fullContenido/:categoria" element={<FullContenido />} />
          <Route path="/pelicula/:peliculaId" element={<PaginaDetalle />} />
          <Route
            path="/detalleCategoria/:detalleId"
            element={<DetalleCategoria />}
          />
          <Route path="*" element={<Navigate replace to="/error404" />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
          {user && <Route path="/adminCategorias" element={<AdminCategorias />} />}
          {user && <Route path="/adminPeliculas" element={<AdminPeliculas />} />}
          {user && <Route path="/adminUsuarios" element={<AdminUsuarios />} />}
          {user && <Route path="/agregarCategoria" element={<AgregarCategoria />} />}
          {user && <Route path="/agregarPelicula" element={<AgregarPelicula />} />}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
