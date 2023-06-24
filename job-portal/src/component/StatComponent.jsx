import React from "react";

const StatComponent = ({ value, icon, description, money }) => {
   return (
      <>
         <div className="w-full bg-white py-9 rounded-2xl shadow-lg">
            <div className="px-4">
               <div className="text-[#057E01] text-4xl   mb-2 rounded-full ">
                  {icon}
               </div>
               <div className="text-xl font-bold mb-1 text-[#057E01]">
                  {description}
               </div>
               <div className="text-4xl text-[#057E01]">
                  {" "}
                  {money !== "" ? money + value : value}
               </div>
            </div>
         </div>
      </>
   );
};

export default StatComponent;
