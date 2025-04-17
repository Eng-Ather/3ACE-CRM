// "use client";
// //src/app/component/EditProfile/page.js
// //this page is use to pass user ID ( document ID from MongoDB) dynamically from user profifile page to Edit profile page


// import { useState } from "react";
// import axios from "axios";
// import AppRouts from "@/Constant/Constant";
// import { Pencil, X } from "lucide-react";
// // import { useParams, useRouter } from "next/navigation";

// import { useParams, useRouter } from "next/navigation";

    
//     const EditUsersProfile = ({ uid }) => {
//         const router = useRouter();
//         console.log("userID bring fron employee Navebar: ", uid);

//         return (
//             <button
//                 className="text-green-500 px-2 py-1 rounded-md hover:bg-green-600 hover:text-white transition disabled:bg-gray-400"
//                 onClick={() => router.push(`/EditUserProfile/${uid}`)}

//             > <Pencil size={18} />
//             </button>
//         );
//     };

//     export default EditUsersProfile;
// ---------------

"use client";

import { useState } from "react";
import axios from "axios";
import AppRouts from "@/Constant/Constant";
import { Pencil, X } from "lucide-react";
// import { useRouter } from "next/router";
import { useParams, useRouter } from "next/navigation";

const EditUserProfile = ({ uid}) => {
  const router = useRouter();
  return (
    <button
     className="flex items-center justify-center gap-3 hover:bg-gradient-to-r from-gray-900 to-blue-900 px-3 py-1.5 rounded-md hover:bg-blue-700 hover:text-white transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
     
      onClick={() => router.push(`/EditUserProfile/${uid}`)}
    >
      <Pencil size={14} /> Edit Password
    </button>
  );
};

export default EditUserProfile;
