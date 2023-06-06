import React from "react";
import Carousel from "./Carousel";

const Header = () => {
  const slides = [
    {
      url: "forest.jpg",
    },
    {
      url: "forest.jpg",
    },
    {
      url: "forest.jpg",
    },

    {
      url: "forest.jpg",
    },
    {
      url: "forest.jpg",
    },
  ];
  return (
    <>
      <div className=" mx-auto bg-yellow-500 object-cover">
        <Carousel autoslide={true}>
          {slides.map((slide, index) => (
            <img className="object-cover opacity-70" src={slide.url} />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Header;
