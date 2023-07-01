import React from "react";
import { Link } from "react-router-dom";

const truncateText = (text, length) => {
   if (text.length <= length) return text;
   return text.substring(0, length) + ".....";
};

const JobHistory = ({ title, description, location, id, salary }) => {
   const truncatedDescription = truncateText(description, 100);
   return (
      <>
         <div className="px-3 py-1 my-[14px] mr-1 dark:bg-[#1E2936] bg-white  rounded-md shadow-md hover:shadow-lg hover:transition-all">
            <div className="location my-1 flex items-center gap-x-1 text-[#057E01]">
               <i className="fa-solid fa-location-dot"></i>
               <p className="font-sm text-[#057E01] dark:text-white">
                  {location}
               </p>
            </div>
            <div className="title rounded-md">
               <h1 className="text-2xl uppercase font-bold text-[#057E01] dark:text-white ">
                  {title}
               </h1>
            </div>
            <div className="category uppercase font-semibold text-[#057E01] dark:text-white">
               {salary}
            </div>
            <div className="Description text-md py-1   dark:text-white">
               <div
                  dangerouslySetInnerHTML={{
                     __html: truncatedDescription,
                  }}
               ></div>
            </div>
         </div>
      </>
   );
};

export default JobHistory;
