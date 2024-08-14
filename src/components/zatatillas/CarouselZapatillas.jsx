import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardZapatillas from './CardZapatillas';

const CarouselZapatillas = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1024 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1024, min: 768 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 768, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1.5
        }
      };
    return (
        <Carousel responsive={responsive}>
            <CardZapatillas isCarousel />
            <CardZapatillas isCarousel />
            <CardZapatillas isCarousel />
            <CardZapatillas isCarousel />
            <CardZapatillas isCarousel />
            <CardZapatillas isCarousel />
            <CardZapatillas isCarousel />
            <CardZapatillas isCarousel />
            <CardZapatillas isCarousel />
            <CardZapatillas isCarousel />
            <CardZapatillas isCarousel />
            <CardZapatillas isCarousel />
        </Carousel>
    );
};

export default CarouselZapatillas;