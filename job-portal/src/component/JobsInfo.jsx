import React from "react";
import { Link } from "react-router-dom";

const JobsInfo = ({ title, description, location, category }) => {
   return (
      <>
         <div className="px-3 mr-1 dark:bg-[#1E2936] bg-white  rounded-md shadow-md hover:shadow-lg hover:transition-all ">
            <div className="jobInfo ml-3 pt-2  ">
               <div className="location flex items-center gap-x-1 text-[#057E01]">
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
               <div className="Description text-[#057E01] dark:text-white">
                  {description}
               </div>
               <div className=" my-2  bg-[#057E01] hover:bg-opacity-80 w-[10%] pl-2 pb-1 rounded-full">
                  <Link
                     to={`/jobView/`}
                     className="text-white font-semibold   "
                  >
                     see more
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
};

export default JobsInfo;
