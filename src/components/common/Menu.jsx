import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";

const Menu = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" className="imgLogo" width="160px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto">
            <Nav.Link href="#" className="text-white tamanioOpcionesMenu">
              Inicio
            </Nav.Link>
            <Nav.Link href="#" className="text-white tamanioOpcionesMenu">
              Administrador
            </Nav.Link>
            <Nav.Link href="#" className="text-white tamanioOpcionesMenu">
              Contacto
            </Nav.Link>
            <Nav.Link href="#" className="text-white tamanioOpcionesMenu">
              Nosotros
            </Nav.Link>
            <Nav.Link href="#" className="text-white tamanioOpcionesMenu">
              <i className="bi bi-cart"></i> Compras
            </Nav.Link>
            <Nav.Link href="#" className="text-white tamanioOpcionesMenu">
              <i className="bi bi-person"></i> Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
