import React from "react";
import { Tab, Nav, Row, Col, Container } from "react-bootstrap";
import CategoryTable from "./Tables/CategoryTable";
import UserTable from "./Tables/UserTable";
import MovieTable from "./Tables/MovieTable";
import "./Admin.css"

function Admin() {
  return (
    <div className="fd">
      <h1 className="text-center pt-5 titleadmin">Administrador</h1>
      <Container className="mt-2 py-5">
        <Tab.Container id="left-tabs-example" defaultActiveKey="users">
          <Row>
            <Col xs={12} md={3} className="mt-5">
              <Nav variant="pills" className="flex-column bg-white">
                <Nav.Item >
                  <Nav.Link eventKey="users" href="#">
                    Usuarios
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="categories" href="#">
                    Categorias
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="movies" href="#">
                    Peliculas
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col xs={12} md={9}>
              <Tab.Content>
                <Tab.Pane eventKey="users"><UserTable/></Tab.Pane>
                <Tab.Pane eventKey="categories"><CategoryTable/></Tab.Pane>
                <Tab.Pane eventKey="movies"><MovieTable /></Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
}

export default Admin;
