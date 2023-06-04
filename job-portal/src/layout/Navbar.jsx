import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-[#047E01] flex px-4 py-2 items-center justify-between rounded-sm shadow-md">
        <div className="logo flex items-center gap-x-5">
          <NavLink
            className="font-lilita text-2xl text-white hover:font-semibold"
            to="/"
          >
            Job-seeker
          </NavLink>
          <div className="job flex gap-x-5 text-white">
            <NavLink to="/job">Jobs</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>
        </div>
        <div className="right-box link mr-3 flex items-center gap-9">
          <div className="form">
            <form action="" className="flex items-center ">
              <input
                type="text"
                placeholder="Search Jobs"
                className=" outline-none active:outline-none focus:outline-none block h-[30px]  rounded-l-full "
              />

              <button className=" bg-[#E8F6EF] rounded-r-full h-7 px-2   ">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5  rounded-full bg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </form>
          </div>
          <div className="links flex gap-3">
            <NavLink
              className="text-white hover:font-semibold hover:transition-all"
              to="/register"
            >
              Register
            </NavLink>
            <NavLink className="text-white" to="/login">
              Login
            </NavLink>
          </div>
          <div class="profile relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg
              class="absolute w-10 h-10 text-gray-400 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;