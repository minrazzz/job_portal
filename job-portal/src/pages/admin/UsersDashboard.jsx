import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AllUsersComponent from "../../component/AllUsersComponent";
import { allUsersAction } from "../../redux";
import { Link } from "react-router-dom";

const UsersDashboard = () => {
   const { allUsers, loading } = useSelector((state) => state.allUsers);
   const itemsPerPage = 8; // Number of items to display per page
   const [currentPage, setCurrentPage] = useState(1);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(allUsersAction());
   }, []);
   console.log(allUsers);
   if (loading) {
      return (
         <div className="no-data text-2xl font-bold grid justify-center items-center min-h-[300px]">
            <h1 className="dark:text-white">Loading...</h1>
         </div>
      );
   }
   // Pagination calculations

   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentJobs = allUsers?.slice(indexOfFirstItem, indexOfLastItem);

   const totalPages = Math.ceil(allUsers?.length / itemsPerPage);
   const handleNextPage = () => {
      if (currentPage < totalPages) {
         setCurrentPage(currentPage + 1);
      }
   };

   const handlePrevPage = () => {
      if (currentPage > 1) {
         setCurrentPage(currentPage - 1);
      }
   };

   return (
      <>
         <div className=" ">
            <h4 className="text-2xl -mb-3 text-center  uppercase text-[#057E01] font-bold">
               All Users
            </h4>
         </div>

         <div className=" ">
            <div className="w-full flex-col space-y-5 ">
               {currentJobs &&
                  currentJobs.map((user, index) => (
                     <AllUsersComponent key={index} {...user} id={user._id} />
                  ))}
            </div>
            <div className="flex justify-center items-center ">
               <button
                  className={`${
                     currentPage === 1
                        ? "cursor-not-allowed opacity-50"
                        : "hover:bg-gray-200"
                  } px-4 py-2 rounded-md mr-2`}
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
               >
                  Prev
               </button>
               <button
                  className={`${
                     currentPage === totalPages
                        ? "cursor-not-allowed opacity-50"
                        : "hover:bg-gray-200"
                  } px-4 py-2 rounded-md`}
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
               >
                  Next
               </button>
            </div>
         </div>
      </>
   );
};

export default UsersDashboard;
