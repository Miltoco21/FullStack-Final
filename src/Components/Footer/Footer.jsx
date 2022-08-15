import React from "react";
import "./Footer.css";
import Button from "react-bootstrap/Button";
const Footer = () => {
  return (
    <div className=" container-fluid bg-dark text-white ">
      <div className=" row">
        <div className="container-fluid col-2 d-flex justify-content-center">
          <div className="row">
            <span className="fw-bolder">Información</span>
            <span>Acerca de nosotros</span>
            <span>Avisos legales</span>
            <span>Ayuda</span>
          </div>
        </div>
        <div className="col col-3 d-flex justify-content-center ">
          <div className="row">
            <span className="fw-bolder">Productos</span>
            <span>Cuenta Familiar</span>
            <span>Tarjetas de regalo</span>
            <span>Plan Premium</span>
          </div>
        </div>
        <div className="col  d-flex justify-content-center">
          <div className="row">
            <span className="fw-bolder">Trabaja con nosotros</span>
            <span>Carreras</span>
          </div>
        </div>
        <div className="col    d-flex justify-content-center">
          <div className="row ">
            <span className="fw-bolder">Registrate Gratis</span>
            <div >
              <Button
                href="/registro"
                variant="danger"
                className="d-flex justify-content-center"
              >
                Registrate
              </Button>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="container-fluid row">
        <div className="col-container-fluid">
          <div className="col d-flex justify-content-evenly">
            <i class="bi bi-twitter"></i>
            
            <i class="bi bi-meta"></i>
            <i class="bi bi-github"></i>
            <i class="bi bi-instagram"></i>
            
          </div>
          
        </div>
      </div>
      <hr />
      <div
        className="  d-flex justify-content-center align-items-center fst-italic 
      "
      >
        Copyright © 2022
      </div>
    </div>
  );
};

export default Footer;
