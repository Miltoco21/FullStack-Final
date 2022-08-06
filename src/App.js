import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Admin from "./Components/Admin/Admin";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
