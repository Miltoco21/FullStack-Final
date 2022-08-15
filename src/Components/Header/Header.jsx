import React from "react";
import { Navbar, Container, Nav, Button, Image } from "react-bootstrap";
import logo from "../../assets/img/logoStrangerFlix.png";
import styles from "../Header/Header.module.css";
function Header() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location= "/";
  };
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <Image src={logo} alt="logito" width={180} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-secondary border-3 " />
        <Navbar.Collapse id="basic-navbar-nav"  >
          <Nav className="ms-auto  ">
            <div className={styles.containerButtons}>
              <Button
                variant="danger"
                className={`${styles.botonRegistro} rounded-pill ms-1 me-2`}
                href="/"
              >
                Home
              </Button>
              <Button
                variant="danger"
                className={`${styles.botonCategorias} rounded-pill ms-1 me-2`}
                href="/categorias"
              >
                Categorias
              </Button>
              <Button
                variant="danger"
                className={`${styles.botonSesion} rounded-pill ms-1 me-2 my-2`}
                onClick={handleLogout}
              >
                Cerrar sesión
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
