import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import { jobDeleteAction, singleJobAction } from "../../redux";

const SingleDashJob = () => {
   const dispatch = useDispatch();
   const { singleJob, loading } = useSelector((state) => state.singleJob);
   const { id } = useParams();
   const navigate = useNavigate();

   useEffect(() => {
      dispatch(singleJobAction(id));
   }, [id]);

   const handleDelete = () => {
      dispatch(jobDeleteAction(id));
      navigate("/admin/jobs");
   };

   return (
      <>
         <div className="h-screen ">
            <div className="container  pt-2 h-full">
               <div className="flex flex-col   mx-auto h-full sm:h-screen    space-y-2 justify-center ">
                  <div className="flex-1 p-2  ">
                     {loading ? (
                        <div>Loading...</div>
                     ) : (
                        <div className="mx-auto    mt-1 rounded-lg pb-8">
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
                                 <p className="text-center mr-5 uppercase  text-md font-semibold text-[#7f7f7f] ">
                                    <span className="">
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
                           <div className="introduction  dark:text-white text-lg ">
                              <p className="pl-2  mx-[20%]">
                                 <span className="font-semibold">
                                    Category:{" "}
                                 </span>
                                 <span className="">
                                    {singleJob && singleJob.jobType
                                       ? singleJob.jobType.jobTypeName
                                       : "No category"}
                                 </span>{" "}
                              </p>
                           </div>

                           <div className="description text-lg text-center  dark:text-white  ">
                              <p className="font-semibold">Description: </p>
                              {singleJob && (
                                 <div
                                    dangerouslySetInnerHTML={{
                                       __html: singleJob.description,
                                    }}
                                 ></div>
                              )}
                           </div>
                           <div className="text-center ">
                              <Link
                                 className="bg-[#057E01] px-2 py-1 rounded-sm text-white font-semibold"
                                 onClick={() => {
                                    window.confirm("Are you sure")
                                       ? handleDelete()
                                       : "";
                                 }}
                              >
                                 Delete
                              </Link>
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

export default SingleDashJob;
