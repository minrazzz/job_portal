import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar flex bg-[#609966] px-4 py-2 items-center justify-between rounded-md shadow-md">
        <div className="logo   flex items-center gap-x-5">
          <Link className="font-lilita text-2xl" to="#">
            Job-seeker
          </Link>
          <div className="job flex gap-x-5">
            <Link to="/job">Jobs</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="link">
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
