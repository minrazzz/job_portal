import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import mongoose from "mongoose";
import { editJobAction, loadJobType, singleJobAction } from "../../redux";

const modules = {
   toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
         { list: "ordered" },
         { list: "bullet" },
         { indent: "-1" },
         { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
   ],
};

const formats = [
   "header",
   "bold",
   "italic",
   "underline",
   "strike",
   "blockquote",
   "list",
   "bullet",
   "indent",
   "link",
   "image",
];

const EditDashJob = () => {
   //    console.log(id);
   const { singleJob, loading } = useSelector((state) => state.singleJob);
   const dispatch = useDispatch();
   const { jobType } = useSelector((state) => state.jobType);
   const [input, setInput] = useState({
      title: "",
      salary: "",
      location: "",
      jobType: mongoose.Types.ObjectId(),
      description: "",
   });

   const { id } = useParams();
   useEffect(() => {
      dispatch(loadJobType());
   }, []);
   useEffect(() => {
      dispatch(singleJobAction(id));
   }, [id]);

   useEffect(() => {
      if (singleJob) {
         setInput({
            title: singleJob.title,
            salary: singleJob.salary,
            location: singleJob.location,
            jobType:
               singleJob && mongoose.Types.ObjectId(singleJob.jobType._id),
            description: singleJob.description,
         });
      }
   }, [singleJob]);

   const navigate = useNavigate();
   const editJob = (e) => {
      e.preventDefault();
      dispatch(editJobAction(id, input));
      navigate("/admin/jobs");
   };

   return (
      <>
         <form
            action=""
            className="mt-5 py-2 shadow-lg rounded-lg  px-5 max-w-xl mx-auto bg-white"
            onSubmit={editJob}
         >
            <h1 className="text-center text-2xl dark:text-white mb-2 font-semibold text-[#057E01] dark:text-white">
               Create Job
            </h1>
            <input
               type="text"
               name="title"
               placeholder="Title"
               className=" block w-[100%] border-transparent focus:border-transparent focus:ring-0 outline-none py-2 px-2 rounded-md mb-3 bg-[#E8F6F0] dark:bg-slate-200"
               value={input.title}
               onChange={(e) =>
                  setInput((prev) => ({
                     title: e.target.value,
                     salary: prev.salary,
                     location: prev.location,
                     jobType: prev.jobType,
                     description: prev.description,
                  }))
               }
            />
            <input
               type="text"
               name="salary"
               placeholder="Salary"
               className=" block w-[100%] border-transparent focus:border-transparent focus:ring-0 outline-none py-2 px-2 rounded-md mb-3 bg-[#E8F6F0] dark:bg-slate-200"
               value={input.salary}
               onChange={(e) =>
                  setInput((prev) => ({
                     title: prev.title,
                     salary: e.target.value,
                     location: prev.location,
                     jobType: prev.jobType,

                     description: prev.description,
                  }))
               }
            />
            <input
               type="text"
               name="location"
               placeholder="Location"
               className=" block w-[100%] border-transparent focus:border-transparent focus:ring-0 outline-none py-2 px-2 rounded-md mb-3 bg-[#E8F6F0] dark:bg-slate-200"
               value={input.location}
               onChange={(e) =>
                  setInput((prev) => ({
                     title: prev.title,
                     salary: prev.salary,
                     location: e.target.value,
                     jobType: prev.jobType,
                     description: prev.description,
                  }))
               }
            />

            <select
               className="mb-3 p-2 w-full px-2 my-2"
               name="jobType"
               id="jobType"
               value={input.jobType}
               onChange={(e) =>
                  setInput((prev) => ({
                     ...prev,
                     jobType: mongoose.Types.ObjectId(e.target.value),
                  }))
               }
            >
               <option value="">Select a jobType</option>
               {jobType &&
                  jobType.map((cat) => (
                     <option key={cat._id} value={cat._id}>
                        {cat.jobTypeName}
                     </option>
                  ))}
            </select>
            <ReactQuill
               theme="snow"
               modules={modules}
               formats={formats}
               value={input.description}
               className="dark:text-white "
               onChange={(value) =>
                  setInput((prev) => ({
                     title: prev.title,
                     salary: prev.salary,
                     location: prev.location,
                     jobType: prev.jobType,

                     description: value,
                  }))
               }
            />
            <div className="grid place-items-center  ">
               <button
                  className="py-1 bg-[#057E01] text-white w-1/4 rounded-md shadow-md hover:bg-yellow-400 dark:bg-[#ced6e0] mt-4"
                  type="submit"
               >
                  Edit
               </button>
            </div>
         </form>
      </>
   );
};

export default EditDashJob;
