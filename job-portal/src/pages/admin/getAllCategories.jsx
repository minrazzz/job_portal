import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadJobType } from "../../redux";
import GetAllCatComp from "../../component/admin/GetAllCatComp";
import { Link } from "react-router-dom";

const GetAllCategories = () => {
   const dispatch = useDispatch();
   const { jobType } = useSelector((state) => state.jobType);

   useEffect(() => {
      dispatch(loadJobType());
   }, []);

   return (
      <>
         <div className="  flex justify-center max-w-2xl mx-auto mt-4 mb-9">
            <h1 className="uppercase text-2xl bg-[#057E01] px-2 py-1 rounded  text-white">
               All Categories
            </h1>
         </div>
         <div className="flex justify-end mx-6 mb-9">
            <Link
               className="px-2 py-1 rounded-md uppercase text-white bg-[#057E01]"
               to={`/admin/create/category`}
            >
               Create
            </Link>
         </div>
         <div>
            {jobType &&
               jobType.map((jt, index) => (
                  <div className="shadow-md">
                     <GetAllCatComp {...jt} key={jt ? jt._id : index} />
                  </div>
               ))}
         </div>
      </>
   );
};

export default GetAllCategories;
