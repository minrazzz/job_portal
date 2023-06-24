import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import { Link, useParams } from "react-router-dom";
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
         <div className=" min-h-[100vh]">
            <Header />
            <div className="mt-[50px] flex gap-x-5">
               <div className="flex  flex-col ">
                  <Filter />

                  <JobType
                     handleChangeCategory={handleChangeCategory}
                     cat={cat}
                  />
                  <ul className="menu-list bg-white flex flex-col  mt-[50px] py-3 mx-3 px-3 rounded-md shadow-md  dark:bg-[#1E2936] hover:shadow-lg   ">
                     <div className=" mx-3 mb-1 text-center  text-[#057E01] uppercase dark:text-white">
                        search by location
                     </div>
                     <div className="flex ml-3 items-center gap-x-3 ">
                        <i className="fa-solid fa-location-dot text-[#057E01]"></i>
                        <Link
                           to={`/`}
                           className="text-[#057E01]  hover:font-bold hover:transition-all"
                        >
                           All
                        </Link>
                     </div>
                     {setUniqueLocation &&
                        setUniqueLocation.map((location, i) => (
                           <li
                              key={i}
                              className="menu-item flex gap-x-3 ml-3 items-center"
                           >
                              <i className="fa-solid fa-location-dot text-[#057E01]"></i>

                              <Link
                                 to={`/search/location/${location}`}
                                 className="menu-link text-[#057E01] hover:font-bold hover:transition-all"
                              >
                                 {location}
                              </Link>
                           </li>
                        ))}
                  </ul>
               </div>

               <div className="alljobs w-full flex flex-col gap-y-[50px] mr-2 ">
                  {jobs.length === 0 && (
                     <>
                        <h1 className="text-2xl hover:font-semibold ml-[30%] my-auto text-[#057E01]">
                           Jobs Not Found
                        </h1>
                     </>
                  )}
                  {jobs &&
                     jobs.map((job, index) => (
                        <JobsInfo
                           {...job}
                           id={job ? job._id : ""}
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
            <div className="pagination-container flex justify-center gap-x-3 items-center mt-4 px-auto mb-4">
               <div>
                  <button
                     className="pagination-previous dark:bg-[#1E2936] dark:hover:bg-opacity-60 bg-[#057E01] px-6  py-1 rounded-full disabled:cursor-not-allowed hover:bg-opacity-80 text-white"
                     onClick={handlePreviousPage}
                     disabled={currentPage === 1}
                  >
                     Prev
                  </button>
               </div>
               <div>
                  <button
                     className="pagination-next dark:hover:bg-opacity-60 dark:bg-[#1E2936] bg-[#057E01] px-5 py-1 rounded-full disabled:cursor-not-allowed  hover:bg-opacity-80 text-white"
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
