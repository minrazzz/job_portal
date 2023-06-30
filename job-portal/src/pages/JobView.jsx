import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyJobAction, singleJobAction } from "../redux";
import { useParams } from "react-router-dom";
import moment from "moment";

const JobView = () => {
   const dispatch = useDispatch();
   const { singleJob, loading } = useSelector((state) => state.singleJob);
   const { id } = useParams();

   useEffect(() => {
      dispatch(singleJobAction(id));
   }, [id]);

   const applyJob = () => {
      dispatch(
         applyJobAction({
            title: singleJob && singleJob.title,
            description: singleJob && singleJob.description,
            salary: singleJob && singleJob.salary,
            location: singleJob && singleJob.location,
         })
      );
   };

   return (
      <>
         <div className="h-screen">
            <div className="container pt-30px   h-screen">
               <div className="flex flex-col   mx-auto h-screen    space-y-2 justify-center ">
                  <div className="flex-1 p-2  ">
                     {loading ? (
                        <div>Loading...</div>
                     ) : (
                        <div className="mx-auto bg-white h-full max-w-3xl shadow-lg mt-[5%] rounded-lg pb-8">
                           <div className="title my-5 dark:bg-slate-700 dark:rounded-lg pt-5 ">
                              <h1 className="text-center text-[#057E01] text-3xl font-bold dark:text-white uppercase ">
                                 {singleJob && singleJob.title}
                              </h1>
                           </div>
                           <div className="date flex ">
                              <div className="w-full flex justify-between items-center ">
                                 <p className="text-center ml-5  text-md font-semibold text-[#7f7f7f] ">
                                    <span className="pl-2">
                                       {singleJob &&
                                          moment(
                                             singleJob.createdAt ?? ""
                                          ).format("MMMM Do YYYY, h:mm:ss a")}
                                    </span>
                                 </p>
                                 <p className="text-center mr-5   text-md font-semibold  ">
                                    <span className="text-[#057E01]">
                                       Location:
                                    </span>
                                    <span className="ml-1 text-[#7f7f7f]">
                                       {singleJob && singleJob.location}
                                    </span>
                                 </p>
                              </div>
                           </div>
                           <hr className="mb-6 border-1 border-green mt-5" />
                           <div className="introduction dark:text-white text-lg ">
                              <p className="pl-2 mx-[20%]">
                                 <span className="font-bold">Salary:</span>
                                 <span className="pl-2">
                                    {singleJob && singleJob.salary}
                                 </span>
                              </p>{" "}
                           </div>
                           <div className="introduction  dark:text-white text-lg font-semibold">
                              <p className="pl-2 mx-[20%]">
                                 Category:{" "}
                                 {singleJob && singleJob.jobType
                                    ? singleJob.jobType.jobTypeName
                                    : "No category"}
                              </p>{" "}
                           </div>

                           <div className="description text-lg text-center  dark:text-white px-3 py-3 ">
                              <p className="font-semibold">Description: </p>
                              {singleJob && (
                                 <div
                                    dangerouslySetInnerHTML={{
                                       __html: singleJob.description,
                                    }}
                                 ></div>
                              )}
                           </div>
                           <div className="mt-[5%]  flex justify-center">
                              <button
                                 className="bg-[#057E01] text-white rounded-md px-2 py-1"
                                 onClick={applyJob}
                              >
                                 Apply For This Job
                              </button>
                           </div>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default JobView;
