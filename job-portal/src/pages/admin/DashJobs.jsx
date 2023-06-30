import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadJobs } from "../../redux";
import JobsInfo from "../../component/JobsInfo";
import { Link, useParams } from "react-router-dom";
import DashJobComp from "../../component/admin/DashJobComp";

const DashJobs = () => {
   const { jobs } = useSelector((state) => state.allJobs);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(loadJobs());
   }, []);

   //    const { keyword } = useParams();
   const itemsPerPage = 4; // Number of items to display per page
   const [currentPage, setCurrentPage] = useState(1);

   // Pagination calculations
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentJobs = jobs?.slice(indexOfFirstItem, indexOfLastItem);
   const totalPages = Math.ceil(jobs?.length / itemsPerPage);

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
         <div className="flex flex-col gap-y-5 ">
            <div className=" flex justify-end mx-2 mt-2">
               <Link
                  className="uppercase px-2 py-1 bg-[#057E01] hover:bg-opacity-80 text-white rounded-md"
                  to={`/admin/create/job`}
               >
                  Create Job
               </Link>
            </div>
            {currentJobs &&
               currentJobs.map((job, index) => (
                  <DashJobComp
                     id={job ? job._id : ""}
                     {...job}
                     key={index}
                     category={
                        job.jobType ? job.jobType.jobTypeName : "no category"
                     }
                  />
               ))}
         </div>

         <div className=" flex justify-center">
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

export default DashJobs;
