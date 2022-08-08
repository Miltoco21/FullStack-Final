import React from "react";
import { Navbar, Container, Nav, Button, Image } from "react-bootstrap";
import logo from "../../assets/img/logoStrangerFlix.png";
import styles from "../Header/Header.module.css";
function Header() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <Image src={logo} alt="logito" width={150} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div className={styles.containerButtons}>
              <Button
                variant="danger"
                className={`${styles.botonSesion} rounded-pill ms-1 me-2`}
              >
                Iniciar sesion
              </Button>
              <Button
                variant="danger"
                className={`${styles.botonRegistro} rounded-pill ms-1 me-2`}
              >
                Registrarse
              </Button>
              <Button
                variant="danger"
                className={`${styles.botonCategorias} rounded-pill ms-1 me-2`}
              >
                Categorias
              </Button>
            </div>
            {/* <NavDropdown
              title="Categorias"
              id="basic-nav-dropdown"
              className="me-5"
            >
              <NavDropdown.Item className="text-danger fontbold" href="/">
                Peliculas
              </NavDropdown.Item>
              <NavDropdown.Item
                className="text-danger fontbold"
                href="#action/3.4"
              >
                Series
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
