import React from "react";

const GetAllCatComp = ({ jobTypeName, user }) => {
   return (
      <>
         <div>
            <div className=" mb-5 flex justify-between items-center gap-x-2 px-5 rounded-lg ">
               <div className="flex items-center flex-wrap   rounded-md px-2">
                  <span className="uppercase text-[#057E01] ">Category :</span>
                  <h1 className="px-2 py-1 text-lg ">{jobTypeName}</h1>
               </div>
               <div className="flex justify-end items-center flex-wrap   rounded-md px-2 ">
                  <span className="uppercase text-[#057E01]">user id :</span>
                  <h1 className="px-2 py-1 text-lg ">{user}</h1>
               </div>

               <div className="">
                  <button className="py-1 px-2 bg-[#057E01] text-white rounded-md uppercase ">
                     Delete
                  </button>
               </div>
            </div>
         </div>
      </>
   );
};

export default GetAllCatComp;
