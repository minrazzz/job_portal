import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadJobType, loadJobs } from "../redux";
import Filter from "../component/Filter";
import JobsInfo from "../component/JobsInfo";
import JobType from "../component/JobType";

//added the page below just now
const Home = () => {
   const { jobs, setUniqueLocation, pages, loading, count } = useSelector(
      (state) => state.allJobs
   );

   //jo
   const { keyword, location } = useParams();
   const [page, setPage] = useState(1);
   {
      console.log(page);
   }
   const [total, setTotal] = useState(0);
   const [cat, setCat] = useState("");
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(loadJobs(page, keyword, cat, location));
      console.log();
   }, [page, keyword, cat, location]);

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
            <h1 className="dark:text-white">No jobs found !</h1>
         </div>
      );
   }
   const handleChangeCategory = (e) => {
      setCat(e.target.value);
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
         {jobs?.length >= count ? (
            " "
         ) : (
            <div className="see-more flex justify-center items-center pt-4 pb-3">
               <div className="cursor-pointer flex flex-col justify-center items-center ">
                  <h1
                     className="text-md font-semibold dark:text-white"
                     onClick={() => setPage(page + 1)}
                  >
                     See More
                  </h1>
                  <i className="fa-solid fa-angles-down dark:text-white"></i>
               </div>
            </div>
         )}
      </>
   );
};

export default Home;
