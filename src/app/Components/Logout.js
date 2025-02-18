
// import React, { useContext } from "react";
// import Cookies from "js-cookie";
// // import { AuthContext } from "../context/context";

// const LogoutButton = () => {
// //   const { setUser, setToken } = useContext(AuthContext);

//   const handleLogout = () => {
//     setUser(null);                                    // Clear user state
//     setToken(null);                                  // Clear token state
//     Cookies.remove("token");                        // Remove token from cookies
//     sessionStorage.clear("tokenForSessionStorage")
//     console.log("User logged out successfully");
   
//     window.location = "/";    //Redirect forcefully to the main landing screen
//   };

//   return (
//     <button onClick={handleLogout}
//     className=" bg-blue-500 text-white font-serif font-semibold  px-10 py-3 rounded-lg hover:bg-heading transition duration-100"
//     // className="w-full bg-navbarColor font-serif font-bold text-lg text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
//     > Logout  </button>
//   );
// };

// export default LogoutButton;
// -------------------------

// "use client"; // Ensure Next.js client-side execution

// import React, { useContext } from "react";
// import Cookies from "js-cookie";
// import { useRouter } from "next/navigation";
// // import { AuthContext } from "../context/context"; // Ensure this is correctly imported

// const LogoutButton = () => {
// //   const { setUser, setToken } = useContext(AuthContext);
//   const router = useRouter(); // Initialize Next.js router

//   const handleLogout = () => {
//     // if (setUser && setToken) {
//     //   setUser(null); // Clear user state
//     //   setToken(null); // Clear token state
//     // }
//     Cookies.remove("token"); // Remove token from cookies
//     sessionStorage.removeItem("tokenForSessionStorage"); // Correct method to remove sessionStorage item

//     // console.log("User logged out successfully");

//     router.push("/"); // Use Next.js navigation
//   };

//   return (
//     <button
//       onClick={handleLogout}
//       className="w-full px-2 py-1 rounded-lg hover:border hover:bg-gradient-to-r from-gray-800 to-blue-800 hover:text-white transition duration-100"
//     >
//       Logout
//     </button>
//   );
// };

// export default LogoutButton;
// --------------------------
// 'use client'
// import React, { useContext } from "react";
// import Cookies from "js-cookie";
// // import { useRouter } from "next/router";
// import { useRouter } from "next/navigation";
// // import { AuthContext } from "../context/context"; // Ensure this is correctly imported

// const LogoutButton = () => {
//   // const { setUser, setToken } = useContext(AuthContext);
//   const router = useRouter();

//   const handleLogout = () => {
    
//     // Remove authentication tokens
//     Cookies.remove("token");
//     sessionStorage.clear();  // Clear all session storage data
//     localStorage.clear();    // Clear all local storage data

//     // Clear Next.js cache
//     router.refresh();

//     // Redirect to home page
//     router.replace("/");
//   };

//   return (
//     <button
//       onClick={handleLogout}
//       className="w-full px-2 py-1 rounded-lg hover:border hover:bg-gradient-to-r from-gray-800 to-blue-800 hover:text-white transition duration-100"
//     >
//       Logout
//     </button>
//   );
// };

// export default LogoutButton;

// ------------------------
'use client';
import React, { useContext } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/Context/contrext";

const LogoutButton = () => {
  const { setUser, setToken, setSession } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    console.log("Logging out...");

    // Clear authentication state
    setUser(null);
    setToken(null);
    setSession(null);

    // Remove authentication tokens
    Cookies.remove("token");
    sessionStorage.clear();
    localStorage.clear();

    // Redirect to home page
    setTimeout(() => {
      router.replace("/");  // Ensure redirection
    }, 100);
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full px-2 py-1 rounded-lg hover:border hover:bg-gradient-to-r from-gray-800 to-blue-800 hover:text-white transition duration-100"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
