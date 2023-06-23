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
import JobView from "./pages/JobView";
import NotFound from "./pages/NotFound";
import UserDashboard from "./pages/UserDashboard";
import UserRoutes from "./component/UserRoutes";

function App() {
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
               path: "/user/dashboard",
               element: (
                  <UserRoutes>
                     <UserDashboard />,
                  </UserRoutes>
               ),
            },
            {
               path: "/jobView",
               element: <JobView />,
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
