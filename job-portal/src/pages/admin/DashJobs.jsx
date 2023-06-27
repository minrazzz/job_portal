import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadJobs } from "../../redux";
import JobsInfo from "../../component/JobsInfo";
import { useParams } from "react-router-dom";

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
            {jobs &&
               jobs.map((job, index) => <JobsInfo {...job} key={index} />)}
         </div>
      </>
   );
};

export default DashJobs;
