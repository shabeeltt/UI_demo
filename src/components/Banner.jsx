import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { data } from "./slides";

import "../App.css";

const Banner = () => {
  return (
    <Carousel className="carousal" autoPlay showArrows showThumbs={false}>
      {data.slides.map((item) => {
        return (
          <div key={item.alt} className="carousel-item">
            <div
              className="image-container"
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "500px",
                width: "100%",
              }}
            >
              <div className="image-overlay-text">
                <h4>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
                  vitae qui dolorum officia aliquam asperiores ratione aut
                  consectetur sit enim!
                </h4>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Banner;
