import React from "react";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Components/Admin/Admin";
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

function App() {
  const user = localStorage.getItem("token");
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          {user && <Route path="/" element={<Home />} />}
          <Route path="/admin" element={<Admin />} />
          <Route path="/registro" exact element={<Registro />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/fullContenido/:categoria" element={<FullContenido />} />
          <Route path="/pelicula/:peliculaId" element={<PaginaDetalle />} />
          <Route
            path="/detalleCategoria/:detalleId"
            element={<DetalleCategoria />}
          />
          <Route path="*" element={<Navigate replace to="<Error404/>" />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
