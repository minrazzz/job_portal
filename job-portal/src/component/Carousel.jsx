import React, { useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import { useState } from "react";

const Carousel = ({
   children: slides,
   autoslide = false,
   autoslideInterval = 3000,
}) => {
   const [currentIndex, setCurrentIndex] = useState(0);

   const prev = () =>
      setCurrentIndex((currentIndex) =>
         currentIndex === 0 ? slides.length - 1 : currentIndex - 1
      );

   const next = () =>
      setCurrentIndex((currentIndex) =>
         currentIndex === slides.length - 1 ? 0 : currentIndex + 1
      );

   useEffect(() => {
      if (!autoslide) return;
      const slideInterval = setInterval(next, autoslideInterval);
      return () => clearInterval(slideInterval);
   }, []);

   return (
      <>
         <div className="overflow-hidden relative group shadow-md ">
            <div
               className="flex transition-transform ease-in-out duration-500 max-h-[320px] "
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
               {slides}
            </div>

            <div className="absolute inset-0 flex items-center justify-between">
               {/* left-button */}
               <div className="hidden group-hover:block  text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ml-2 ">
                  <BsChevronCompactLeft onClick={prev} size={30} />
               </div>
               {/* right-button */}
               <div className="hidden group-hover:block  text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer mr-2">
                  <BsChevronCompactRight onClick={next} size={30} />
               </div>
            </div>

            <div className="absolute bottom-4 right-0 left-0">
               <div className="flex items-center justify-center gap-3">
                  {slides.map((slide, index) => (
                     <div
                        key={index}
                        className={`transition-all w-3 h-3 bg-white rounded-full ${
                           currentIndex === index ? "p-1" : "bg-opacity-40"
                        }`}
                     />
                  ))}
               </div>
            </div>
         </div>
      </>
   );
};

export default Carousel;
