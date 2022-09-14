import Carousel from "react-bootstrap/Carousel";
import React from "react";

function Carrousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../Images/carr1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Aprovecha nuestras ofertas de primavera!!</h3>
          <p>
            Se viene la mejor temporada para salir a jugar, hacelo con estilo.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../Images/carr2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Hasta un 50% de descuento </h3>
          <p>En productos seleccionados.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../Images/carr3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Guadapulpe te ofrece accesorios originales</h3>
          <p>Nuestros accesorios son más que eso, son hermosuras!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;
