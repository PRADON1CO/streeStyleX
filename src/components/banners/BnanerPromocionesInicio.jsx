import React from "react";
import promocion1 from "../../assets/promocion1.png";
import promocion2 from "../../assets/promocion2.png";
import { Carousel } from "react-bootstrap";

const BannerPromocionesInicio = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={promocion1} className="w-100" alt="Promoción 1" />
        <Carousel.Caption className="text-dark posicionTextPromo ">
          <div>
            <p className="fw-bold tamanioTextEnvio">ENVÍOS A TODO EL PAÍS</p>
            <p className="text-white bg-dark btn rounded-0 p-2 tamanioTextPromo">VER MÉTODOS DE ENVÍO</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={promocion2} className="w-100" alt="Promoción 2" />
        <Carousel.Caption className="text-dark posicionTextPromo tamanioTextPromo"
        >
            <p>Moda, diseño y calidad.</p>
            <p className="fw-bold">MAECAS DE CALIDAD</p>
            <p className="text-white bg-dark btn rounded-0 p-2 tamanioTextPromo">VER MÁS</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default BannerPromocionesInicio;
