import React from "react";

const Register = () => {
  return (
    <>
      <form
        action=""
        className="shadow-lg mx-auto max-w-sm pt-1 shadow-lg  pb-3 px-5 max-h dark:shadow-lg dark:bg-[#1E2936] mt-20"
      >
        <h1 className="text-3xl font-fair text-[#057E01] font-bold text-center mb-4 dark:text-white py-3">
          Register
        </h1>
        <input
          className="email bg-[#E8F6F0] border-transparent focus:border-transparent focus:ring-0 block w-full  py-2 mb-5 rounded-md px-2 shadow-md dark:bg-white"
          type="text"
          name="fullName"
          placeholder="Full Name"
        />
        <input
          className="email bg-[#E8F6F0] border-transparent focus:border-transparent focus:ring-0 block w-full  py-2 mb-5 rounded-md px-2 shadow-md dark:bg-white"
          type="text"
          name="username"
          placeholder="Username"
        />
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
        <input
          className="password bg-[#E8F6F0] border-transparent focus:border-transparent focus:ring-0 block w-full  py-2 mb-5 rounded-md px-2 shadow-md dark:bg-white"
          type="text"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
        <div className="grid place-items-center mb-3">
          <button
            className="py-1 w-1/4 bg-[#E8F6F0] text-[#057E01] rounded-md hover:bg-[#BCEAD5] hover:transition-all dark:bg-[#ced6e0] dark:hover:bg-[#b0bdce] dark:text-black"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
