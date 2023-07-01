import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singleUserAction } from "../../redux";
import AppliedJobsComp from "../../component/admin/AppliedJobsComp";

const AppliedJobs = () => {
   const { singleUserInfo } = useSelector((state) => state.singleUser);
   const dispatch = useDispatch();
   const { id } = useParams();

   useEffect(() => {
      dispatch(singleUserAction(id));
   }, [id]);

   const itemsPerPage = 5; // Number of items to display per page
   const [currentPage, setCurrentPage] = useState(1);

   // Pagination calculations
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentJobs = singleUserInfo?.jobHistory?.slice(
      indexOfFirstItem,
      indexOfLastItem
   );
   console.log(currentJobs);

   const totalPages = Math.ceil(
      singleUserInfo?.jobHistory?.length / itemsPerPage
   );

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
         <div>
            {currentJobs &&
               currentJobs.map((job, index) => (
                  <AppliedJobsComp key={index} {...job} />
               ))}
         </div>
         <div className=" flex justify-center flex-wrap">
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

export default AppliedJobs;
