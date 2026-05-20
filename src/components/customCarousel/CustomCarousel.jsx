import React from "react";
import Carousel from "react-bootstrap/Carousel";
import carouselImg1 from "@assets/images/library2.jpg";
import carouselImg2 from "@assets/images/library3.jpg";
import carouselImg3 from "@assets/images/library4.jpg";
export const CustomCarousel = () => {
  return (
    <div>
      {" "}
      <Carousel className="m-3">
        <Carousel.Item>
          <img src={carouselImg1} alt="slider 1" className="d-block w-100" />

          <Carousel.Caption className="carousel-caption rounded p-2">
            <hr />
            <h3>Your Gateway to Endless Discovery</h3>
            <p>
              No more hunting through stacks. Use our intuitive search to find,
              reserve, and renew your favourite titles in seconds.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={carouselImg2} alt="slider 2" className="d-block w-100" />

          <Carousel.Caption className="carousel-caption rounded p-2">
            <h3>Streamline Your Library Operations</h3>
            <hr />
            <p>
              {" "}
              Automate cataloguing, circulation, and member management with an
              intuitive platform designed to save time and reduce manual errors.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={carouselImg3} alt="slider 3" className="d-block w-100" />

          <Carousel.Caption className="carousel-caption rounded p-2">
            <h3>Your Library, Reimagined</h3>
            <hr />
            <p>
              Effortless organization meets instant accessibility. Experience
              the future of library services at your fingertips.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
