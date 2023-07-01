import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const AllUsersComponent = ({
   id,
   firstName,
   lastName,
   email,
   createdAt,
   role,
}) => {
   console.log(id);
   return (
      <>
         <div className=" bg-white shadow-md w-[full]   ml-3 mr-3  flex flex-wrap justify-between flex-1  px-auto  px-3 py-1.5 my-[2%]  dark:bg-[#1E2936] bg-white  rounded-md shadow-md hover:shadow-lg hover:transition-all">
            <div className="category  text-sm    dark:text-white ">
               <span className="mr-2 text-[#057E01]">ID:</span>
               <span>{id}</span>
            </div>
            <div className="category uppercase text-sm  dark:text-white">
               <span className="mr-2 text-sm text-[#057E01]">Name: </span>
               <span className="text-sm mr-2">{firstName}</span>
               <span>{lastName}</span>
            </div>
            <div className="email  text-sm   dark:text-white">
               <span className="mr-2 text-[#057E01]">Email:</span>
               <span>{email}</span>
            </div>
            <div className="email  text-sm   dark:text-white">
               <span className="mr-2  text-[#057E01]">Status:</span>
               <span>{role === 0 ? "Regular User" : "Admin"}</span>
            </div>
            <div className="email  text-sm   dark:text-white">
               <span className="mr-2  text-[#057E01]">CreatedAt:</span>
               <span>
                  {moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}
               </span>
            </div>
            <div className="flex justify-between items-center w-full gap-x-3  ">
               <div className="   hover:bg-opacity-80  rounded-md ">
                  <Link
                     to={`/singleUser/${id}`}
                     className=" text-sm font-semibold  text-white px-2 rounded-md py-0.5 bg-[#057E01] hover:bg-opacity-80"
                  >
                     see more
                  </Link>
               </div>
               {role === 0 && (
                  <div>
                     <Link
                        to={`/applied/Jobs/${id}`}
                        className="font-semibold text-sm  text-white px-2 rounded-md py-0.5 bg-[#057E01] hover:bg-opacity-80"
                     >
                        Applied Jobs
                     </Link>
                  </div>
               )}
            </div>
         </div>
      </>
   );
};

export default AllUsersComponent;
