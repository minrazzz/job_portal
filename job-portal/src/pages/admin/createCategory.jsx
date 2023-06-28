import { set } from "mongoose";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCatAction } from "../../redux/createJobType/createCatAction";
import { useNavigate } from "react-router-dom";

const CreateCategory = () => {
   const dispatch = useDispatch();
   const [input, setInput] = useState({
      jobTypeName: "",
   });
   const navigate = useNavigate();

   const createJobType = (e) => {
      e.preventDefault();
      dispatch(createCatAction(input));
      setTimeout(() => {
         navigate("/admin/category");
      }, 400);
   };
   return (
      <>
         <div className="  flex justify-center my-[30%]  ">
            <input
               className="w-full mx-5 rounded-md bg-[#E8F6F0] shadow-md border-transparent focus:border-transparent focus:ring-0"
               type="text"
               placeholder="Enter Category Name"
               name="jobTypeName"
               value={input.jobTypeName}
               onChange={(e) =>
                  setInput((prev) => ({
                     ...prev,
                     jobTypeName: e.target.value,
                  }))
               }
            />
            <div className=" flex items-center mx-1">
               <button
                  className="px-2 py-2  bg-[#057E01] text-white uppercase rounded-md"
                  onClick={createJobType}
               >
                  Submit
               </button>
            </div>
         </div>
      </>
   );
};

export default CreateCategory;
