import React from "react";
import { NavLink } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <form
        action=""
        className=" mx-auto max-w-sm pt-1 shadow-lg  pb-3 px-5 max-h dark:shadow-lg dark:bg-[#1E2936] mt-5"
      >
        <h1 className="text-3xl font-fair text-[#057E01] font-bold text-center mb-4 dark:text-white py-3">
          Login
        </h1>
        <input
          className="email bg-[#E8F6F0] border-transparent focus:border-transparent focus:ring-0 block w-full  py-2 mb-5 rounded-md px-2 shadow-md dark:bg-white"
          type="text"
          name="email"
          placeholder="Email"
        />
        <input
          className="password bg-[#E8F6F0] border-transparent focus:border-transparent focus:ring-0 block w-full  py-2 mb-5 rounded-md px-2 shadow-md dark:bg-white"
          type="text"
          name="password"
          placeholder="Password"
        />
        <div className="grid place-items-center mb-3">
          <button
            className="py-1 w-1/4 bg-[#E8F6F0] text-[#057E01] rounded-md hover:bg-[#BCEAD5] hover:transition-all dark:bg-[#ced6e0] dark:hover:bg-[#b0bdce] dark:text-black"
            type="submit"
          >
            Login
          </button>
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
