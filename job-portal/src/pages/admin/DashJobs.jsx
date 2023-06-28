import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadJobs } from "../../redux";
import JobsInfo from "../../component/JobsInfo";
import { Link, useParams } from "react-router-dom";

const DashJobs = () => {
   const { jobs } = useSelector((state) => state.allJobs);
   //    const { keyword } = useParams();
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(loadJobs());
   }, []);

   return (
      <>
         <div className="flex flex-col gap-y-5 ">
            <div className=" flex justify-end mx-2 mt-5">
               <Link
                  className="uppercase px-2 py-1 bg-[#057E01] hover:bg-opacity-80 text-white rounded-md"
                  to={`/admin/create/job`}
               >
                  Create Job
               </Link>
            </div>
            {jobs &&
               jobs.map((job, index) => <JobsInfo {...job} key={index} />)}
         </div>
      </>
   );
};

export default DashJobs;
