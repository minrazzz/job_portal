import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { userProfileAction } from "../../redux";
const SidebarAdm = () => {
   const dispatch = useDispatch();
   const [open, setOpen] = useState(true);
   const { userInfo } = useSelector((state) => state.login);
   const navigate = useNavigate();

   useEffect(() => {
      dispatch(userProfileAction());
   }, []);

   const logout = () => {
      localStorage.removeItem("userInfo");
      Cookies.remove("auth");
      setTimeout(() => {
         navigate("/");
         window.location.reload(true);
      }, 300);
   };
   return (
      <>
         <div className="flex ">
            <div
               className={`${
                  open ? "w-72" : "w-32"
               }  h-screen shadow-xl pt-8 relative transition-all duration-200`}
            >
               <div
                  className={`absolute cursor-pointer -right-3 top-9 w-7  ${
                     !open && "rotate-180"
                  }`}
                  onClick={() => {
                     setOpen(!open);
                  }}
               >
                  <i
                     className="fa-solid fa-arrow-right bg-[#057E01] hover:bg-opacity-80 rounded-md font-lg text-white px-1.5  py-1"
                     onClick={() => {
                        setOpen(!open);
                     }}
                  ></i>
               </div>
               <div className="flex gap-x-4 items-center px-2">
                  <img
                     src=""
                     alt="image"
                     className={`cursor-pointer duration-500 ${
                        open && "rotate-[360deg]"
                     } ${!open ? "ml-4" : ""}`}
                  />
                  <h1
                     className={`text-[#057E01] origin-left font-medium text-xl duration-200 ${
                        !open && "hidden"
                     }`}
                  >
                     Job-Seeker
                  </h1>
               </div>
               <div
                  className={`${
                     open ? "ml-[20%]" : "ml-1"
                  } links   flex flex-col space-y-20 absolute top-[15%] relative transition-all duration-400`}
               >
                  {userInfo && userInfo.role === 1 ? (
                     <>
                        <div className="flex items-center">
                           <div className={`${!open ? "hidden" : ""}`}>
                              <i className="fa-solid fa-vault text-3xl mr-2 text-[#057E01] hover:bg-opacity-80"></i>
                           </div>
                           <Link
                              to="/admin/dashboard"
                              className="text-white text-lg bg-[#057E01] px-3 py-1 text-white rounded-md hover:bg-opacity-80"
                           >
                              Dashboard
                           </Link>
                        </div>
                        <div className="flex items-center">
                           <div className={`${!open ? "hidden" : ""}`}>
                              <i className="fa-solid fa-users text-3xl mr-2 text-[#057E01] hover:bg-opacity-80"></i>
                           </div>
                           <Link
                              to="/admin/users"
                              className="text-white text-lg bg-[#057E01] px-8 py-1 text-white rounded-md hover:bg-opacity-80"
                           >
                              Users
                           </Link>
                        </div>
                        <div className="flex items-center">
                           <div className={`${!open ? "hidden" : ""}`}>
                              <i
                                 className={`fa-solid fa-briefcase text-3xl mr-2 text-[#057E01] hover:bg-opacity-80`}
                              ></i>
                           </div>
                           <Link
                              to="/admin/jobs"
                              className="text-white text-lg bg-[#057E01] px-9 py-1 text-white rounded-md hover:bg-opacity-80"
                           >
                              Jobs
                           </Link>
                        </div>
                        <div className="flex items-center">
                           <div className={`${!open ? "hidden" : ""}`}>
                              <i className="fa-solid fa-wrench text-3xl mr-2 text-[#057E01] hover:bg-opacity-80"></i>
                           </div>
                           <Link
                              to="/admin/category"
                              className="text-white text-lg bg-[#057E01] px-5 py-1 text-white rounded-md hover:bg-opacity-80"
                           >
                              Category
                           </Link>
                        </div>
                     </>
                  ) : (
                     <>
                        <div className="flex items-center">
                           <div className={`${!open ? "hidden" : ""}`}>
                              <i className="fa-solid fa-vault text-3xl mr-2 text-[#057E01] hover:bg-opacity-80"></i>
                           </div>
                           <Link
                              to="/user/dashboard"
                              className="bg-[#057E01] px-5 py-1 text-white rounded-md hover:bg-opacity-80"
                           >
                              Dashboard
                           </Link>
                        </div>
                        <div className="flex items-center">
                           <div className={`${!open ? "hidden" : ""}`}>
                              <i
                                 className={`fa-solid fa-briefcase text-3xl mr-2 text-[#057E01] hover:bg-opacity-80`}
                              ></i>
                           </div>
                           <Link
                              to="/user/jobs"
                              className="bg-[#057E01] px-3 py-1 text-white rounded-md hover:bg-opacity-80"
                           >
                              Applied Jobs
                           </Link>
                        </div>
                        <div className="flex items-center">
                           <div className={`${!open ? "hidden" : ""}`}>
                              <i className="fa-solid fa-users-gear text-3xl mr-2 text-[#057E01] hover:bg-opacity-80"></i>
                           </div>
                           <Link
                              to="/user/Info"
                              className="bg-[#057E01] px-3 py-1 text-white rounded-md hover:bg-opacity-80"
                           >
                              Personal Info
                           </Link>
                        </div>
                     </>
                  )}
               </div>
               <div
                  className={`${
                     open ? "ml-[20%]" : "ml-1"
                  } absolute bottom-5  flex`}
               >
                  <div className={`${!open ? "hidden" : ""}`}>
                     <i className="fa-solid fa-right-from-bracket text-3xl mr-2 text-[#057E01]"></i>
                  </div>
                  <Link
                     className="bg-[#057E01] px-8 py-1 text-white rounded-md hover:font-semibold hover:transition-all"
                     to="#"
                     onClick={() => logout()}
                  >
                     Logout
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
};
export default SidebarAdm;
