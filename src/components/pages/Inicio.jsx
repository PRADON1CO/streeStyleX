import React from "react";
import BannerInicio from "../banners/BannerInicio";
import "../../style/inicio.css";
import { Row } from "react-bootstrap";
import CardZapatillas from "../zatatillas/CardZapatillas";
import BnanerPromocionesInicio from "../banners/BnanerPromocionesInicio";

const Inicio = () => {
  return (
    <section className="mainSection">
      <BannerInicio></BannerInicio>
      <div className="container py-3">
        <h2 className="text-center text-white">- SUMALE A TUS LOOKS -</h2>
        <Row>
          <CardZapatillas></CardZapatillas>
          <CardZapatillas></CardZapatillas>
          <CardZapatillas></CardZapatillas>
          <CardZapatillas></CardZapatillas>
        </Row>
      </div>
      <BnanerPromocionesInicio></BnanerPromocionesInicio>
    </section>
  );
};

export default Inicio;
