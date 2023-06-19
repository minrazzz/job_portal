import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../component/SearchBar";

const Navbar = () => {
   const [theme, setTheme] = useState(
      localStorage.getItem("mernTheme") ?? "light"
   );
   useEffect(() => {
      if (theme === "dark") {
         document.documentElement.classList.add("dark");
      } else {
         document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("mernTheme", theme);
   }, [theme]);
   const handleTheme = () => {
      {
         console.log("hello");
      }

      setTheme(theme === "dark" ? "light" : "dark");
   };
   return (
      <>
         <div className="navbar dark:bg-[#1E2936] bg-[#047E01] flex px-5 py-2 items-center justify-between rounded-sm shadow-lg">
            <div className="logo flex items-center gap-x-5">
               <Link
                  className="font-lilita text-2xl text-white hover:font-semibold"
                  to="/"
               >
                  Job-seeker
               </Link>
               <div className="job flex gap-x-5 text-white">
                  <Link to="/job">Jobs</Link>
                  <Link to="/contact">Contact Us</Link>
               </div>
            </div>
            <div className="right-box link mr-3 flex items-center gap-9">
               <SearchBar />
               <div className="links flex gap-3">
                  <Link
                     className="text-white hover:font-semibold hover:transition-all"
                     to="/login"
                  >
                     Login
                  </Link>
               </div>
               <div className="icons">
                  {theme === "dark" ? (
                     <div>
                        <i
                           className="fa-solid fa-sun text-white"
                           onClick={handleTheme}
                        ></i>
                     </div>
                  ) : (
                     <div>
                        <i
                           className="fa-solid fa-moon text-white"
                           onClick={handleTheme}
                        ></i>
                     </div>
                  )}
               </div>
               <div className=" profile relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <svg
                     className="absolute w-10 h-10 text-gray-400 -left-1"
                     fill="currentColor"
                     viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                     ></path>
                  </svg>
               </div>
            </div>
         </div>
      </>
   );
};

export default Navbar;
