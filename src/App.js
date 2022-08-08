import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
// import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home";
import Categorias from "./pages/Categorias";
import PaginaDetalle from "./pages/PaginaDetalle";
import DetalleCategoria from "./pages/DetalleCategoria";
import FullContenido from "./pages/FullContenido";
import Registro from "./Components/Registro/Registro";
import Login from "./Components/Login/Login";

=======
>>>>>>> navbar
function App() {
  const user = localStorage.getItem("token");
  return (
<<<<<<< HEAD
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {user && <Route path="/" element={<Home />} />}
          <Route path="/registro" exact element={<Registro />} />
			    <Route path="/login" exact element={<Login />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path='/fullContenido/:categoria' element={<FullContenido />} />
          <Route path="/pelicula/:peliculaId" element={<PaginaDetalle />} />
          <Route
            path="/detalleCategoria/:detalleId"
            element={<DetalleCategoria />}
          />
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
  
    </>
  )

=======
    <BrowserRouter>
      <Header />
      <Routes>
      </Routes>
    </BrowserRouter>
  );
>>>>>>> navbar
}

export default App;