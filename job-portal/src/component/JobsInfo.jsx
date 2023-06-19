import React from "react";
import { Link } from "react-router-dom";

const JobsInfo = ({ title, description, location, category }) => {
   return (
      <>
         <div className="basis-3/4 px-3 mr-1 dark:bg-[#1E2936] bg-white  rounded-md shadow-md hover:shadow-lg hover:transition-all">
            <div className="jobInfo ml-3 pt-2 ">
               <div className="location flex items-center gap-x-1 text-[#057E01]">
                  <i className="fa-solid fa-location-dot"></i>
                  <p className="font-sm text-[#057E01] dark:text-white">
                     {location}
                  </p>
               </div>
               <div className="title">
                  <h1 className="text-2xl uppercase font-bold text-[#057E01] dark:text-white">
                     {title}
                  </h1>
               </div>
               <div className="category uppercase font-semibold text-[#057E01] dark:text-white">
                  {category}
               </div>
               <div className="Description text-[#057E01] dark:text-white">
                  {description}
               </div>
               <div className="w-full my-2  ">
                  <Link
                     to={`/jobView/`}
                     className="text-[#057E01] font-semibold underline"
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
