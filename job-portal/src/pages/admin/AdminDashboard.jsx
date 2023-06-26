import React from "react";
import StatComponent from "../../component/StatComponent";

const AdminDashboard = () => {
   return (
      <>
         <div className="p-4 mb-5 flex flex-col justify-center h-screen ">
            <h4 className="pb-3 ml-[41%] text-[#057E01] mb-2 text-4xl">
               Dashboard
            </h4>

            <div className="flex flex-col gap-y-9  w-[70%] mx-auto">
               <StatComponent
                  value="45612"
                  icon={<i class="fa-solid fa-calendar-days"></i>}
                  description="Administrator"
                  money=""
               />
               <StatComponent
                  value="450"
                  icon={<i class="fa-solid fa-briefcase"></i>}
                  description="Jobs"
                  money=""
               />
               <StatComponent
                  value="450"
                  icon={<i class="fa-solid fa-briefcase"></i>}
                  description="Jobs Category"
                  money=""
               />
            </div>
         </div>
      </>
   );
};

export default AdminDashboard;
