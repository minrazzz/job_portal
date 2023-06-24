import React, { useState } from "react";
import JobHistory from "../../component/JobHistory";
import { useSelector } from "react-redux";

const UserJobHistory = () => {
   const { user } = useSelector((state) => state.profile);

   const itemsPerPage = 4; // Number of items to display per page
   const [currentPage, setCurrentPage] = useState(1);

   // Pagination calculations
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentJobs = user?.jobHistory?.slice(
      indexOfFirstItem,
      indexOfLastItem
   );
   const totalPages = Math.ceil(user?.jobHistory?.length / itemsPerPage);

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
         <div className="ml-[40%] ">
            <h4 className="text-2xl text-[#057E01] font-bold">Jobs History</h4>
         </div>
         <div className="">
            {currentJobs &&
               currentJobs.map((history, index) => (
                  <JobHistory key={index} {...history} category="" />
               ))}
         </div>
         <div className="mt-4 flex justify-center">
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
      </>
   );
};

export default UserJobHistory;
