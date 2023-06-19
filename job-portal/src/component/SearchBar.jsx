import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
   search: yup.string("Enter your search query"),
});

const initialValues = {
   search: "",
};

const SearchBar = () => {
   const navigate = useNavigate();
   const onSubmit = (values, actions) => {
      //alert(values.search);
      const { search } = values;
      if (search?.trim()) {
         navigate(`/search/${search}`);
      } else {
         navigate("/");
      }
      actions.resetForm();
   };
   const {
      values,
      errors,
      touched,
      handleBlur,
      handleChange,
      handleSubmit,
      isSubmitting,
   } = useFormik({
      initialValues,
      validationSchema: validationSchema,
      onSubmit,
   });
   return (
      <div className="form">
         <form action="" className="flex items-center" onSubmit={handleSubmit}>
            <input
               name="search"
               type="text"
               placeholder="Search Jobs"
               value={values.search}
               onChange={handleChange}
               error={touched.search && Boolean(errors.search)}
               className="  border-transparent focus:border-transparent focus:ring-0 block h-[28px]  rounded-l-full "
            />

            <button
               className=" bg-[#E8F6EF] rounded-r-full h-7 px-2"
               type="submit"
               disabled={isSubmitting}
            >
               <svg
                  aria-hidden="true"
                  className="w-5 h-5  rounded-full bg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
               </svg>
            </button>
         </form>
      </div>
   );
};

export default SearchBar;
