import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadJobType, loadJobs } from "../redux";
import Filter from "../component/Filter";
import JobsInfo from "../component/JobsInfo";
import JobType from "../component/JobType";

const Home = () => {
   const { jobs, setUniqueLocation, pages, loading, count } = useSelector(
      (state) => state.allJobs
   );

   const { keyword, location } = useParams();
   const [currentPage, setCurrentPage] = useState(1);
   const [cat, setCat] = useState("");
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(loadJobs(currentPage, keyword, cat, location));
   }, [currentPage, keyword, cat, location]);

   useEffect(() => {
      dispatch(loadJobType());
   }, []);

   if (loading) {
      return (
         <div className="no-data text-2xl font-bold grid justify-center items-center min-h-[300px]">
            <h1 className="dark:text-white">Loading...</h1>
         </div>
      );
   }

   if (jobs.length <= 0) {
      return (
         <div className="no-data text-2xl font-bold grid justify-center items-center min-h-[300px]">
            <h1 className="dark:text-white">No jobs found!</h1>
         </div>
      );
   }

   const handleChangeCategory = (e) => {
      e.preventDefault();
      setCat(e.target.value);
      setCurrentPage(1); // Reset page to 1 when category changes
   };

   const handlePreviousPage = () => {
      if (currentPage > 1) {
         setCurrentPage((prevPage) => prevPage - 1);
      }
   };

   const handleNextPage = () => {
      if (currentPage < pages) {
         setCurrentPage((prevPage) => prevPage + 1);
      }
   };

   return (
      <>
         <div className="bg-[#] min-h-[100vh]">
            <Header />
            <div className="mt-[50px] flex gap-x-1 ">
               <div className="flex flex-col gap-y-2">
                  <Filter />
                  <JobType
                     handleChangeCategory={handleChangeCategory}
                     cat={cat}
                  />
               </div>

               <div className="alljobs w-full flex flex-col gap-y-[50px] mr-4 ">
                  {jobs &&
                     jobs.map((job, index) => (
                        <JobsInfo
                           {...job}
                           key={index}
                           category={
                              job.jobType
                                 ? job.jobType.jobTypeName
                                 : "no category"
                           }
                        />
                     ))}
               </div>
            </div>
         </div>
         {currentPage > pages ? null : (
            <div className="pagination-container flex justify-center gap-x-3 items-center mt-4">
               <div>
                  <button
                     className="pagination-previous bg-[#057E01] px-2 py-1 rounded-full disabled:cursor-not-allowed hover:bg-opacity-80 text-white"
                     onClick={handlePreviousPage}
                     disabled={currentPage === 1}
                  >
                     Previous
                  </button>
               </div>
               <div>
                  <button
                     className="pagination-next bg-[#057E01] px-5 py-1 rounded-full disabled:cursor-not-allowed  hover:bg-opacity-80 text-white"
                     onClick={handleNextPage}
                     disabled={currentPage === pages}
                  >
                     Next
                  </button>
               </div>
            </div>
         )}
      </>
   );
};

export default Home;
