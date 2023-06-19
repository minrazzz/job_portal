import React from "react";
import Carousel from "./Carousel";
import image from "../assets/forest.jpg";

const Header = () => {
   const slides = [
      {
         url: image,
      },
      {
         url: image,
      },
      {
         url: image,
      },

      {
         url: image,
      },
      {
         url: image,
      },
   ];
   return (
      <>
         <div className=" mx-auto bg-yellow-500 object-cover">
            <Carousel autoslide={true}>
               {slides.map((slide, index) => (
                  <img
                     key={index}
                     className="object-cover opacity-70"
                     src={slide.url}
                  />
               ))}
            </Carousel>
         </div>
      </>
   );
};

export default Header;
