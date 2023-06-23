import React from "react";
import { Link } from "react-router-dom";

const JobHistory = ({ title, description, location, id, category }) => {
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
               {category}
            </div>
            <div className="Description text-md py-1  text-[#057E01] dark:text-white">
               <h1> {description}</h1>
            </div>
            <div className="  py-1 bg-[#057E01] hover:bg-opacity-80 w-[10%] pl-2.5 pb-1 rounded-md">
               <Link to={`/sidebar`} className="text-white font-semibold my-2">
                  see more
               </Link>
            </div>
         </div>
      </>
   );
};

export default JobHistory;
