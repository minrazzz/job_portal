import React from "react";

const Filter = () => {
   return (
      <>
         <div className="flex-2 px-2  dark:shadow-md ">
            <div className=" min-w-[300px] mb-3   py-2 filter flex px-auto bg-[#057E01] justify-center shadow-md rounded-md cursor-pointer dark:bg-[#1E2936] ">
               <div className="pb-2">
                  <button className="text-center uppercase  outline-none   px-2 text-lg text-white">
                     Filter Jobs By
                  </button>
               </div>
            </div>
         </div>
      </>
   );
};

export default Filter;
