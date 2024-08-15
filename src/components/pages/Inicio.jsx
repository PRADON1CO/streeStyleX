import React from "react";
import BannerInicio from "../banners/BannerInicio";
import "../../style/inicio.css";
import { Col, Row } from "react-bootstrap";
import CardZapatillas from "../zatatillas/CardZapatillas";
import BnanerPromocionesInicio from "../banners/BnanerPromocionesInicio";
import pagoRealizado from"../../assets/pagoRealizado.png"
import pedidoEmpaquetado from"../../assets/pedidoEmpaquetado.png"
import pedidoEnviado from"../../assets/pedidoEnviado.png"
import recibeCompra from"../../assets/recibiTuCompra.png"
import CarouselZapatillas from "../zatatillas/CarouselZapatillas";


const Inicio = () => {
  return (
    <section className="mainSection">
      <BannerInicio></BannerInicio>
      <div className="container py-3">
        <h3 className="text-center text-white py-3">- NEW DROP -</h3>
        <Row>
          <CardZapatillas></CardZapatillas>
          <CardZapatillas></CardZapatillas>
          <CardZapatillas></CardZapatillas>
          <CardZapatillas></CardZapatillas>
          <CardZapatillas></CardZapatillas>
          <CardZapatillas></CardZapatillas>
        </Row>
      </div>
      <BnanerPromocionesInicio></BnanerPromocionesInicio>
      <div className="container py-3">
        <h3 className="text-center text-white py-3">- SUMALE A TUS LOOKS -</h3>
        <CarouselZapatillas></CarouselZapatillas>
      </div>
      <div className="container py-2 text-center text-white">
        <h3 className="pb-3">- SOBRE ENVIOS -</h3>
        <p className="textoCentrado pb-3">Ofrecemos múltiples opciones de envío para que recibas tus compras de manera rápida y segura, sin importar dónde te encuentres. Disfruta de la comodidad de entregas a domicilio en cualquier rincón del país.</p>
        <Row>
          <Col xs={6} md={6} lg={3}>
            <img src={pagoRealizado} alt="imagen de factura de pago" className="imgEnvios" />
            <p className="pt-2">PAGO REALIZADO</p>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <img src={pedidoEmpaquetado} alt="imagen de pedido empaquetado" className="imgEnvios" />
            <p className="pt-2">PEDIDO EMPAQUETADO</p>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <img src={pedidoEnviado} alt="imagen de pedido enviado" className="imgEnvios" />
            <p className="pt-2">PEDIDO ENVIADO</p>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <img src={recibeCompra} alt="imagen de recibir tu compra" className="imgEnvios" />
            <p className="pt-2">RECIBI TU COMPRA</p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Inicio;
