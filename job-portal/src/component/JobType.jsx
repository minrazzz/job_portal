import React from "react";
import { useSelector } from "react-redux";

const JobType = ({ handleChangeCategory, cat }) => {
   const { jobType } = useSelector((state) => state.jobType);
   return (
      <>
         <div class="min-w-120   mx-2">
            <div class="w-full outline-none  border-x-2 border-[#057E01] ">
               <label
                  for="demo-simple-select"
                  class="block text-center text-[#057E01] mb-2"
               >
                  Category
               </label>
               <select
                  id="demo-simple-select"
                  class="w-full  border-x-2 focus:border-x-2 focus:border-[#057E01]  border-[#057E01]   rounded-md text-[#057E01] shadow-md focus:border-transparent ring-0 focus:ring-0 cursor-pointer"
                  value={cat}
                  onChange={handleChangeCategory}
               >
                  <option value="">All</option>
                  {jobType &&
                     jobType.map((jt) => (
                        <option key={jt._id} value={jt._id}>
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
