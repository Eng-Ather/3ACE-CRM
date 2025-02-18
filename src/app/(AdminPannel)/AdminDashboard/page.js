"use client";

import React from "react";
import LogoutButton from "@/app/Components/Logout";
import AdminNavbar from "../AdminComponent/AdminNavbar";
// import AdminHerosection from "../AdminComponent/Projects";
import Projects from "../AdminComponent/Projects";
import AddNewProject from "@/app/Components/AddNewProject";
import { useContext } from "react";
import { AuthContext } from "@/Context/contrext";
import RoleBasedNavigation from "@/app/Components/RoleBaseNavigation";

export default function AdminDashboard() {

 // Access user and token from AuthContext
 const { user, setUser, setToken, setSession } = useContext(AuthContext);
 console.log("User:" , user);




  // Dummy data for demonstration
  const totalEmployees = 50;
  const pendingProjects = 12;
  const totalSales = 120000;

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">

     {/* <RoleBasedNavigation/> */}

      {/* Navbar */}
      <AdminNavbar />
  
      {/* Main Content */}
      <div className=" py-3 mx-auto bg-white shadow-md rounded-lg">
        {/* Header Section */}
        <div className="w-full flex gap-10 items-center underline decoration-heading p-4 mb-6">
          <h2 className="text-2xl  font-serif text-heading">Project Details</h2>
          <AddNewProject />
        </div>
  
        {/* Projects List */}
        <Projects />
      </div>
    </div>
)}