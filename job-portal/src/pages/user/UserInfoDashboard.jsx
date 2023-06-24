import React from "react";
import { useSelector } from "react-redux";

const UserInfoDashboard = () => {
   const { user } = useSelector((state) => state.profile);

   return (
      <>
         <div className="max-w-lg h-screen mx-auto  pt-10 ">
            <div className=" flex  justify-center items-center  mx-auto  ">
               <div className="min-w-[500px] bg-white p-4 flex flex-col rounded-lg gap-9 justify-center items-center shadow-md border-2 ">
                  <div className="text-2xl font-bold mb-4 uppercase">
                     Personal-Info
                  </div>
                  <div className="w-[100px] h-[100px] mt-[40px] rounded-full ml-9 text-center bg-green-100 ml-[5%]  ">
                     <i className="fa-solid fa-user  mt-3 text-[#057E01]  text-[60px]"></i>
                  </div>

                  <hr className="mb-" />
                  <div className="text-lg mb-3">
                     <p className="font-semibold">
                        First Name:{" "}
                        <span className="ml-3">{user && user.firstName}</span>
                     </p>
                  </div>
                  <div className="text-lg mb-4">
                     <p className="font-semibold">
                        Last Name:{" "}
                        <span className="ml-3">{user && user.lastName}</span>
                     </p>
                  </div>
                  <div className="text-lg mb-4 ml-20">
                     <p className="font-semibold">
                        Email:
                        <span className="ml-3">{user && user.email}</span>
                     </p>
                  </div>
                  <div className="text-lg mb-4 ml-1">
                     <p className="font-semibold">
                        Status:
                        <span className="ml-3">
                           {user && user.role === 0 ? "Regular User" : "Admin"}
                        </span>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default UserInfoDashboard;
