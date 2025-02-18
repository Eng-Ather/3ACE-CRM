// "use client";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Cookies from "js-cookie";
// import { useContext } from "react";
// import { AuthContext } from "@/Context/contrext";

// const RoleBasedNavigation = () => {
//   // Access user and token from AuthContext
//   const { user, setUser, setToken, setSession } = useContext(AuthContext);
//   console.log("User:", user);

//   const router = useRouter();

//   useEffect(() => {

//     if (!user || !user.role)
//     {
//       router.push("/");

//       return; 
//     }
    
//     if (user.role == "admin") {
//       router.push("/AdminDashboard");
//     } else if (user.role == "employee") {
//       router.push("/EmployeeDashboard");
//     } else if (user.role == "salesPerson") {
//       router.push("/SalesPersonDashboard");
//     } else if (user.role == "developer") {
//       router.push("/DeveloperDashBoard");
//     } else if (user.role == "graphicsDesigner") {
//       router.push("/GraphicsDesignerDashBoard");
//     } else {
//       alert("Unauthorized role!");
//       router.push("/");
//     }
//   }, [user]);

//   return null;
// };

// export default RoleBasedNavigation;
// --------------------------------

"use client";
import { useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/Context/contrext";

const RoleBasedNavigation = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user || !user.role) {
      router.replace("/"); 
      return;
    }

    switch (user.role) {
      case "admin":
        router.replace("/AdminDashboard");
        break;
      case "employee":
        router.replace("/EmployeeDashboard");
        break;
      case "salesPerson":
        router.replace("/SalesPersonDashboard");
        break;
      case "developer":
        router.replace("/DeveloperDashBoard");
        break;
      case "graphicsDesigner":
        router.replace("/GraphicsDesignerDashBoard");
        break;
      default:
        alert("Unauthorized role!");
        router.replace("/");
    }
  }, [user]);

  return null;
};

export default RoleBasedNavigation;
