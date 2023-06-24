import React from "react";
import { useSelector } from "react-redux";
import StatComponent from "../../component/StatComponent";
import moment from "moment";

const UserDashboard = () => {
   const { user } = useSelector((state) => state.profile);
   return (
      <>
         <div className="p-4 mb-5 flex flex-col justify-center h-screen ">
            <h4 className="pb-3 ml-[41%] text-[#057E01] mb-2 text-4xl">
               Dashboard
            </h4>

            <div className="flex flex-col gap-y-9  w-[70%] mx-auto">
               <StatComponent
                  value={user && moment(user.createdAt).format("YYYY/MM/DD")}
                  icon={<i class="fa-solid fa-calendar-days"></i>}
                  description="Member Since"
                  money=""
               />
               <StatComponent
                  value={user && user.jobHistory.length}
                  icon={<i class="fa-solid fa-briefcase"></i>}
                  description="Number Of Jobs Submitted"
                  money=""
               />
            </div>
         </div>
      </>
   );
};

export default UserDashboard;
