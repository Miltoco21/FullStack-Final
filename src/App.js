<<<<<<< .merge_file_a13848

import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div >
      <Footer/>

      
      
    </div>
=======
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home";
import Categorias from "./pages/Categorias";
import PaginaDetalle from "./pages/PaginaDetalle";
import DetalleCategoria from "./pages/DetalleCategoria";
import FullContenido from "./pages/FullContenido";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path='/fullContenido/:categoria' element={<FullContenido />} />
          <Route path="/pelicula/:peliculaId" element={<PaginaDetalle />} />
          <Route
            path="/detalleCategoria/:detalleId"
            element={<DetalleCategoria />}
          />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
>>>>>>> .merge_file_a11696
  );
}

export default App;
