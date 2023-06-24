import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const UserRoutes = ({ children }) => {
   const { userInfo } = useSelector((state) => state.login);
   const [cookies] = useCookies(["auth"]);

   useEffect(() => {
      if (!userInfo || !cookies.auth) {
         window.location.replace("/"); // Redirect to "/" if user does not exist or "auth" cookie is not present
      }
   }, [userInfo, cookies.auth]);

   return userInfo ? children : <Navigate to="/" replace />;
};

export default UserRoutes;