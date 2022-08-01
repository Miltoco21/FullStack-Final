import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home";
import Detalle from "./pages/Detalle";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalle" element={<Detalle />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
