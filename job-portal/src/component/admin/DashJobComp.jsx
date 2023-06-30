import React from "react";
import { Link } from "react-router-dom";

const truncateText = (text, length) => {
   if (text.length <= length) return text;
   return text.substring(0, length) + ".....";
};

const DashJobComp = ({ title, description, location, category, id }) => {
   const truncatedDescription = truncateText(description, 100);
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
               <div
                  dangerouslySetInnerHTML={{
                     __html: truncatedDescription,
                  }}
               ></div>
               <div className=" my-2  flex justify-between">
                  <Link
                     to={`/single/dash/job/${id}`}
                     className="text-white font-semibold bg-[#057E01] hover:bg-opacity-80 px-2 py-1 rounded-md  "
                  >
                     see more
                  </Link>
                  <Link
                     to={`/edit/dash/job/${id}`}
                     className="text-white font-semibold bg-[#057E01] hover:bg-opacity-80 px-2 py-1 rounded-md "
                  >
                     Edit
                  </Link>
                  <Link
                     to={`/delete/dash/job/${id}`}
                     className="text-white font-semibold bg-[#057E01] hover:bg-opacity-80 px-2 py-1 rounded-md "
                  >
                     Delete
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
};

export default DashJobComp;
