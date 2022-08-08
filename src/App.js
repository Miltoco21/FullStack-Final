import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./Components/Header/Header";
import Admin from "./Components/Admin/Admin";
import AddUsers from "./Components/Admin/Inputs/AddUsers";
import AddCategory from "./Components/Admin/Inputs/AddCategory";
import Footer from "./Components/Footer/Footer";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import AddMovies from "./Components/Admin/Inputs/AddMovies";

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer position="top-right" />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/agregaruser" element={<AddUsers />} />
        <Route path="/editaruser/:id" element={<AddUsers />} />
        <Route path="/agregarcategoria" element={<AddCategory />} />
        <Route path="/editarcategoria/:id" element={<AddCategory />} />
        <Route path="/agregarmovie" element={<AddMovies />} />
        <Route path="/editarmovie/:id" element={<AddMovies />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
