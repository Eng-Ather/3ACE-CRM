// "use client";

// import { useEffect, useState } from "react";
// // import { useRouter } from "next/router";
// // import AppRouter from "next/dist/client/components/app-router";
// import { useRouter } from "next/navigation"; // ✅ Corrected Router import
// import AppRouts from "@/Constant/Constant";
// import axios from "axios";

// const Signin = () => {
//   const [loding, setLoading] = useState();
//   const [userDetails, setUserDetails] = useState();

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form submission
//     // console.log("email", e.target.email.value);
//     // console.log("email", e.target.password.value);
//     if (!e.target.email.value || !e.target.password.value) {
//       alert("Email And Password Both are Required");
//       return;
//     }

//     const userInfo = {
//       email: e.target.email.value,
//       password: e.target.password.value,
//     };
//     setLoading(true);

//     try {
//       const response = await axios.post(AppRouts.signin, userInfo);
//       console.log("Response:", response);
//       setUserDetails(response.data.data.info);
//       console.log("User Role:", response.data.data.info.role);
//     } catch (error) {
//       alert("ERROR => " + error);
//     } finally {
//       setLoading(false);
//     }

// console.log(userDetails.role);
// console.log("userInfo.role", userInfo.role);

//     switch (userDetails?.role) {
//         case "admin":
//           router.push("/AdminDashBoard");
//           break;
//         case "employee":
//           router.push("/EmployeeDashBoard");
//           break;
//         default:
//           alert("Unauthorized role!");
//       }

// // ✅ Navigate after userDetails is set
// // if (userDetails.role == "admin") {
// //     router.push("/AdminDashBoard");
// //   } else if (userDetails.role === "employee") {
// //     router.push("/EmployeeDashBoard");
// //   } else {
// //     alert("Unauthorized role!");
// //   }

//   };

//   console.log("Current User Details:", userDetails); // This will now show correct data

//   return (
//     // Sign-in Form
//     <div className="container mx-auto py-10 px-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-heading text-xl md:text-4xl font-serif text-center mb-12">
//         Sign In
//       </h2>

//       <form className="space-y-4" onSubmit={handleSubmit}>
//         {/* Email */}
//         <div>
//           <label htmlFor="email" className="block text-gray-700">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//             placeholder="Enter your email"
//             required
//           />
//         </div>

//         {/* Password */}
//         <div>
//           <label htmlFor="password" className="block text-gray-700">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//             placeholder="Enter your password"
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
//         >
//           Sign In
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Signin;
// -------------

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AppRouts from "@/Constant/Constant";
import axios from "axios";
import Cookies from "js-cookie";
import { useContext } from "react";
import { AuthContext } from "@/Context/contrext";

const Signin = () => {


  // Access user and token from AuthContext
  const { user, setUser, setToken, setSession } = useContext(AuthContext);
  // console.log("User:" , user);


  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      alert("Email and Password are required");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(AppRouts.signin, { email, password });
      const userInfo = response.data.data.info;
      const token = response.data.data.token;
      console.log("token : ", token);
      // console.log("User Info:", userInfo);
      setUserDetails(userInfo);

      //****** Update sessionStorage & cookies to maintain tab session
      Cookies.set("token", token, { expires: 7 });
      sessionStorage.setItem("tokenForSessionStorage", token);
      setUser(userInfo);
      // setSession(token);
      // setToken(token);

      console.log(user);
      
      //  Navigate
      if (userInfo.role === "admin") {
        router.push("/AdminDashboard");
      } else if (userInfo.role === "employee") {
        router.push("/EmployeeDashboard");
      } else if (userInfo.role === "salesPerson") {
        // router.push("/EmployeeDashboard");
        router.push("/SalesPersonDashboard");
      } else if (userInfo.role === "developer") {
        router.push("/DeveloperDashBoard");
      } else if (userInfo.role === "graphicsDesigner") {
        router.push("/GraphicsDesignerDashBoard");
      } else {
        alert("Unauthorized role!");
        router.push("/");
      }
    } catch (error) {
      alert("ERROR: " + error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto py-4 px-6">
      <h2 className="text-heading text-xl pt-10 md:text-4xl font-serif text-center ">
        Sign In
      </h2>

      <form
        className="space-y-6 flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <div className="w-full md:w-4/5">
          <label
            htmlFor="email"
            className="block text-text text-lg font-semibold font-serif"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-heading"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="w-full md:w-4/5">
          <label
            htmlFor="password"
            className="block text-text text-lg font-semibold font-serif"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-heading"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full md:w-4/5  bg-blue-500 text-white text-lg font-semibold font-serif px-10 py-3 rounded-lg hover:bg-heading transition duration-100"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default Signin;
