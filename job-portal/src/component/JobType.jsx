import React from "react";
import { useSelector } from "react-redux";

const JobType = ({ handleChangeCategory, cat }) => {
   const { jobType } = useSelector((state) => state.jobType);
   return (
      <>
         <div className="min-w-120 dark:bg-[#1E2936] bg-white rounded-md px-1 dark:text-white py-1 shadow-md    mx-2">
            <div className="w-full outline-none  border-x-2 border-[#057E01] px-2 ">
               <label className="block text-center text-[#057E01] uppercase mb-3 dark:text-white">
                  Category
               </label>
               <select
                  id="demo-simple-select"
                  className="w-full  dark:text-[#1E2936] dark:border-transparent  border-x-2 focus:border-x-2 focus:border-[#057E01]  border-[#057E01]   rounded-md text-[#057E01] shadow-md hover:shadow-lg  ring-0 focus:ring-0 cursor-pointer"
                  value={cat}
                  onChange={handleChangeCategory}
               >
                  <option value="" className="">
                     All
                  </option>
                  {jobType &&
                     jobType.map((jt) => (
                        <option key={jt._id} value={jt._id} className="">
                           {jt.jobTypeName}
                        </option>
                     ))}
               </select>
            </div>
         </div>
      </>
   );
};

export default JobType;
