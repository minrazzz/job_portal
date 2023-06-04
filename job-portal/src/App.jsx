import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { Footer } from "./layout/Footer";
// import { Login } from "./component/Login";
import "./App.css";
import Register from "./pages/Register";
import Layout from "./layout/Layout";
import { Login } from "./pages/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
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
