import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../redux";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

export const Login = () => {
   const dispatch = useDispatch();
   const { isAuthenticated, userInfo } = useSelector((state) => state.login);
   const [error, setError] = useState(null);
   const navigate = useNavigate();
   const [passwordPreview, setPasswordPreview] = useState(false);
   const [input, setInput] = useState({
      email: "",
      password: "",
   });
   //still not working properly
   //onSubmit
   const loginUSer = async (e) => {
      e.preventDefault();
      dispatch(loginAction(input));
      setTimeout(() => {
         if (!userInfo) {
            setError("Invalid credentials");
         } else {
            resetForm();
         }
      }, 500);
   };

   const resetForm = () => {
      setInput({ email: "", password: "" }); // Reset form fields
      setError(null); // Reset error message
   };

   useEffect(() => {
      // console.log(isAuthenticated);
      if (isAuthenticated) {
         if (userInfo.role === 1) {
            navigate("/admin/dashboard");
         } else {
            navigate("/user/dashboard");
         }
      }
   }, [isAuthenticated]);

   // useEffect(() => {
   //    console.log(userInfo); // Log the updated userInfo object
   //    if (!userInfo || !userInfo.success) {
   //       setError("Invalid credentials");
   //    } else {
   //       resetForm();
   //    }
   // }, [userInfo]);

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
            <div className="grid place-items-center mt-1 mb-3 gap-4">
               <button
                  className="py-1 w-1/4 bg-[#E8F6F0] text-[#057E01] rounded-md hover:bg-[#BCEAD5] hover:transition-all dark:bg-[#ced6e0] dark:hover:bg-[#b0bdce] dark:text-black"
                  type="submit"
               >
                  Login
               </button>
               <GoogleLogin
                  ux_mode="popup"
                  shape="circle"
                  text="Sign in with Google"
                  onSuccess={(credentialResponse) => {
                     console.log(credentialResponse);
                  }}
                  onError={() => {
                     console.log("Login Failed");
                  }}
                  useOneTap
               />
            </div>

            <div className="Register mx-auto text-center flex flex-col gap-1 dark:text-slate-400">
               <p className="">Don't have an account ?</p>
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
