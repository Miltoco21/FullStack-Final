import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
  Image,
} from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import logito from "../../assets/img/logito.png";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <Image src={logito} alt="logito" width={150} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Form className="d-flex mx-3">
              <Form.Control
                type="search"
                placeholder=" Buscar"
                className="me-2 rounded-pill"
                aria-label="Search"
              />
              <Button variant="outline-danger rounded-pill pt-0">
                <Search />
              </Button>
            </Form>
            <div className="text-center mt-3 mt-lg-0">
              <Button variant="danger" className="rounded-pill ms-1 me-2">
                Iniciar sesion
              </Button>
              <Button variant="danger" className="rounded-pill ms-1 me-2">
                Registrarse
              </Button>
            </div>
            <div className="text-center mt-3 mt-lg-0">
              <NavDropdown
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
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
