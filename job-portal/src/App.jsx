import {
   createBrowserRouter,
   Navigate,
   RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";

// import { Login } from "./component/Login";
import "./App.css";
import Register from "./pages/Register";
import Layout from "./layout/Layout";
import { Login } from "./pages/Login";
import NotFound from "./pages/NotFound";
import UserRoutes from "./component/UserRoutes";

import Common from "./pages/global/Common";
import UserJobHistory from "./pages/user/UserJobHistory";
import UserInfoDashboard from "./pages/user/UserInfoDashboard";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminRoute from "./component/AdminRoute";
import JobView from "./pages/JobView";
import UsersDashboard from "./pages/admin/UsersDashboard";
import EditUser from "./pages/admin/EditUser";
import SingleUser from "./pages/admin/SingleUser";
import DashJobs from "./pages/admin/DashJobs";
import DashCreateJob from "./pages/admin/DashCreateJob";
import GetAllCategories from "./pages/admin/GetAllCategories";
import CreateCategory from "./pages/admin/CreateCategory";

function App() {
   const UserDashboardHOC = Common(UserDashboard);
   const UserJobHistoryHOC = Common(UserJobHistory);
   const UserInfoDashboardHOC = Common(UserInfoDashboard);
   const AdminDashboardHOC = Common(AdminDashboard);
   const UsersDashboardHOC = Common(UsersDashboard);
   const EditUserHoc = Common(EditUser);
   const SingleUserHOC = Common(SingleUser);
   const DashJobsHOC = Common(DashJobs);
   const DashCreateJobHOC = Common(DashCreateJob);
   const GetAllCategoriesHOC = Common(GetAllCategories);
   const CreateCategoryHOC = Common(CreateCategory);

   const router = createBrowserRouter([
      {
         path: "/",
         element: <Layout />,
         children: [
            {
               path: "/search/location/:location",
               element: <Home />,
            },
            {
               path: "/search/:keyword",
               element: <Home />,
            },
            {
               path: "/",
               element: <Home />,
            },

            {
               path: "/register",
               element: <Register />,
            },
            {
               path: "/login",
               element: <Login />,
            },
            {
               path: "/single/Job/:id",
               element: <JobView />,
            },
            {
               path: "/admin/Dashboard",
               element: (
                  <AdminRoute>
                     <AdminDashboardHOC />
                  </AdminRoute>
               ),
            },
            {
               path: "/admin/Users",
               element: (
                  <AdminRoute>
                     <UsersDashboardHOC />
                  </AdminRoute>
               ),
            },
            {
               path: "/admin/jobs",
               element: (
                  <AdminRoute>
                     <DashJobsHOC />
                  </AdminRoute>
               ),
            },
            {
               path: "/admin/create/job",
               element: (
                  <AdminRoute>
                     <DashCreateJobHOC />
                  </AdminRoute>
               ),
            },
            {
               path: "/admin/category",
               element: (
                  <AdminRoute>
                     <GetAllCategoriesHOC />
                  </AdminRoute>
               ),
            },
            {
               path: "/admin/create/category",
               element: (
                  <AdminRoute>
                     <CreateCategoryHOC />
                  </AdminRoute>
               ),
            },

            {
               path: "/editUser/:id",
               element: (
                  <AdminRoute>
                     <EditUserHoc />
                  </AdminRoute>
               ),
            },
            {
               path: "/singleUser/:id",
               element: (
                  <AdminRoute>
                     <SingleUserHOC />
                  </AdminRoute>
               ),
            },
            {
               path: "/user/dashboard",
               element: (
                  <UserRoutes>
                     <UserDashboardHOC />
                  </UserRoutes>
               ),
            },
            {
               path: "/user/jobs",
               element: (
                  <UserRoutes>
                     <UserJobHistoryHOC />
                  </UserRoutes>
               ),
            },
            {
               path: "/user/Info",
               element: (
                  <UserRoutes>
                     <UserInfoDashboardHOC />
                  </UserRoutes>
               ),
            },

            {
               path: "*",
               element: <NotFound />,
            },
         ],
      },
   ]);
   return (
      <>
         <div className=" dark:bg-[#111827]  main-wrapper min-h-screen max-w-full ">
            <main className=" max-w-screen-xl min-h-screen  mx-auto ">
               <div>
                  <RouterProvider router={router} />
               </div>
            </main>
         </div>
      </>
   );
}

export default App;
