import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
