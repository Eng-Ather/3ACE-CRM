
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
     className=" w-full flex items-center justify-center gap-3 hover:bg-gradient-to-r from-gray-900 to-blue-900 px-3 py-1.5 rounded-md hover:bg-blue-700 hover:text-white transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
     
      onClick={() => router.push(`/EditUserProfile/${uid}`)}
    >
      <Pencil size={14} /> Edit Password
    </button>
  );
};

export default EditUserProfile;
