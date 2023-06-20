import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../redux";
import { toast } from "react-toastify";

export const Login = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { isAuthenticated } = useSelector((state) => state.login);
   const [input, setInput] = useState({
      email: "",
      password: "",
   });
   const [error, setError] = useState(null);
   const [passwordPreview, setPasswordPreview] = useState(false);
   //onSubmit
   const loginUSer = async (e) => {
      e.preventDefault();
      await dispatch(loginAction(input));
      for (const key in input) {
         if (input[key] === "") {
            setError("All fields are required!!");
            return false;
         }
      }

      if (isAuthenticated) {
         navigate("/");
      }
   };

   return (
      <>
         <form
            action=""
            onSubmit={loginUSer}
            className=" mx-auto max-w-sm pt-1 shadow-lg  pb-3 px-5 max-h dark:shadow-lg dark:bg-[#1E2936] mt-20"
         >
            <h1 className="text-3xl  text-[#057E01] font-bold text-center mb-4 dark:text-white py-3">
               Login
            </h1>
            <input
               className="email bg-[#E8F6F0] border-transparent focus:border-transparent focus:ring-0 block w-full  py-2 mb-5 rounded-md px-2 shadow-md dark:bg-white"
               type="text"
               name="email"
               placeholder="Email"
               value={input.email}
               onChange={(e) =>
                  setInput((prev) => ({
                     email: e.target.value,
                     password: prev.password,
                  }))
               }
            />
            <input
               className="password bg-[#E8F6F0] border-transparent focus:border-transparent focus:ring-0 block w-full  py-2 mb-4 rounded-md px-2 shadow-md dark:bg-white"
               type="text"
               name="password"
               placeholder="Password"
               value={input.password}
               onChange={(e) =>
                  setInput((prev) => ({
                     email: prev.email,
                     password: e.target.value,
                  }))
               }
            />
            <div className="error-box mb-2  ">
               <p className="text-red-500 font-semibold text-sm">
                  {error ? error : ""}
               </p>
            </div>
            <div className="grid place-items-center mt-1 mb-3">
               <button
                  className="py-1 w-1/4 bg-[#E8F6F0] text-[#057E01] rounded-md hover:bg-[#BCEAD5] hover:transition-all dark:bg-[#ced6e0] dark:hover:bg-[#b0bdce] dark:text-black"
                  type="submit"
               >
                  Login
               </button>
            </div>
            <div className="Register mx-auto text-center flex flex-col gap-1 dark:text-slate-400">
               <p className="">Already have an account</p>
               <NavLink
                  className="hover:font-bold hover:transition-all text-[#057E01] dark:text-white"
                  to="/register"
               >
                  Register
               </NavLink>
            </div>
         </form>
      </>
   );
};
