import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singleUserAction } from "../../redux";

const SingleUser = () => {
   const { loading, singleUserInfo } = useSelector((state) => state.singleUser);
   const dispatch = useDispatch();
   const { id } = useParams();
   console.log(id);
   useEffect(() => {
      dispatch(singleUserAction(id));
   }, [id]);

   //    if (loading) {
   //       return (
   //          <div className="no-data text-2xl font-bold grid justify-center items-center min-h-[300px]">
   //             <h1 className="dark:text-white">Loading...</h1>
   //          </div>
   //       );
   //    }

   return (
      <>
         <div className="max-w-lg h-screen mx-auto  pt-10 ">
            <div className=" flex  justify-center items-center  mx-auto  ">
               <div className="min-w-[500px] bg-white p-4 flex flex-col rounded-lg gap-9 justify-center items-center shadow-md border-2 ">
                  <div className="text-2xl font-bold mb-4 uppercase">
                     User Details
                  </div>
                  <div className="w-[100px] h-[100px] mt-[40px] rounded-full ml-9 text-center bg-green-100 ml-[5%]  ">
                     <i className="fa-solid fa-user  mt-3 text-[#057E01]  text-[60px]"></i>
                  </div>

                  <hr className="mb-" />
                  <div className="text-lg mb-3">
                     <p className="font-semibold">
                        First Name:{" "}
                        <span className="ml-3">
                           {singleUserInfo && singleUserInfo.firstName}
                        </span>
                     </p>
                  </div>
                  <div className="text-lg mb-4">
                     <p className="font-semibold">
                        Last Name:{" "}
                        <span className="ml-3">
                           {singleUserInfo && singleUserInfo.lastName}
                        </span>
                     </p>
                  </div>
                  <div className="text-lg mb-4 ml-20">
                     <p className="font-semibold">
                        Email:
                        <span className="ml-3">
                           {singleUserInfo && singleUserInfo.email}
                        </span>
                     </p>
                  </div>
                  <div className="text-lg mb-4 ml-1">
                     <p className="font-semibold">
                        Status:
                        <span className="ml-3">
                           {singleUserInfo && singleUserInfo.role === 0
                              ? "Regular User"
                              : "Admin"}
                        </span>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default SingleUser;
