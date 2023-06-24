import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadJobs, singleJobAction } from "../redux";
import { useParams } from "react-router-dom";

const JobView = () => {
   const dispatch = useDispatch();
   const { singleJob, loading } = useSelector((state) => state.singleJob);
   const { id } = useParams();

   useEffect(() => {
      dispatch(singleJobAction(id));
   }, [id]);

   return (
      <>
         <div>Hello</div>
      </>
   );
};

export default JobView;
