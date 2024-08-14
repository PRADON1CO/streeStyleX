import { Col, Container,Row } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Container fluid className="pt-1 mt-auto bg-dark">
        <Row>
          <Col md={12} lg={3} className="text-center">
            <a to={"/"}>
              <img src={logo} alt="Logo FitFactory" width="200px" />
            </a>
          </Col>
          <Col className="d-none d-md-block text-white">
            <h4 className="text-white">Opciones</h4>
            <a className="text-decoration-none tamanioOpcionesMenu text-white" to="/">
              <p>Inicio</p>
            </a>
            <a
              className="text-decoration-none tamanioOpcionesMenu text-white"
              to="/contacto"
            >
              <p>Contacto</p>
            </a>
            <a
              className="text-decoration-none tamanioOpcionesMenu text-white"
              to="/nosotros"
            >
              <p>Nosotros</p>
            </a>
            <a
              className="text-decoration-none tamanioOpcionesMenu text-white"
              to="/login"
            >
              <p>Login</p>
            </a>
          </Col>
          <Col xs={12} md={4} lg={3} className="">
            <h4 className="text-white">Información</h4>
            <a className="text-decoration-none tamanioOpcionesMenu text-white" to="*">
              <p>Políticas de privacidad</p>
            </a>
            <a className="text-decoration-none tamanioOpcionesMenu text-white" to="*">
              <p>Legal</p>
            </a>
            <a className="text-decoration-none tamanioOpcionesMenu text-white" to="*">
              <p>Promociones</p>
            </a>
            <a className="text-decoration-none tamanioOpcionesMenu text-white" to="*">
              <p>Horarios de atención</p>
            </a>
          </Col>
          <Col xs={12} md={4} lg={3} className="">
            <h4 className="text-white">Contacto</h4>
            <a
              to={"*"}
              className="text-decoration-none text-white tamanioOpcionesMenu"
            >
              <p>
                <i className="bi bi-whatsapp"></i> 123-1234567
              </p>
            </a>
            <a to={'*'} className="text-white tamanioOpcionesMenu text-decoration-none">
              <p>
                <i className="bi bi-instagram"></i> StreetStyleX
              </p>
            </a>
            <a to={'*'} className="text-white tamanioOpcionesMenu text-decoration-none">
              <p>
                <i className="bi bi-facebook"></i> StreetStyleX
              </p>
            </a>
            <a to={'*'} className="text-white tamanioOpcionesMenu text-decoration-none">
              <p>
                <i className="bi bi-geo-alt-fill"></i> Av.Rivadavia 1090
              </p>
            </a>
          </Col>
        </Row>
      </Container>
      <div className=" py-1">
        <p className="text-center">
          &copy; FitFactory . Todos los derechos reservados. 2024.
        </p>
      </div>
    </>
  );
};

export default Footer;
