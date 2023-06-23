import React from "react";
import SidebarAdm from "./Sidebar";

const Common =
   (Component) =>
   ({ ...props }) => {
      return (
         <div className="flex min-h-screen">
            <SidebarAdm />
            <div className="w-full">
               <div className="p-3">
                  <Component {...props} />
               </div>
            </div>
         </div>
      );
   };

export default Common;
