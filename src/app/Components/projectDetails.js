"use client";

import { useState } from "react";
import axios from "axios";
import AppRouts from "@/Constant/Constant";

const ProjectDetails = ({ Pid }) => {
  const [loading, setLoading] = useState(false);

  const handleDetails = async () => {
    if (!Pid) {
      console.error("No Pid provided for deletion.");
      return;
    }

    console.log("Pid" , Pid);
    

    const confirmDelete = window.confirm(`Are you sure you want to delete this project? Pid: ${Pid}`);
    if (!confirmDelete) return;

    setLoading(true);
    // try {
    //   console.log("Deleting project with ID:", id);
    //   const response = await axios.delete(`${AppRouts.deleteProject}/${id}`);
    //   console.log("Deletion successful:", response.data);
    //   // Re load page 
    //   window.location.reload();

    // } catch (error) {
    //   console.error("Error deleting project:", error);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="flex justify-end">
      <button
        onClick={handleDetails}
        type="button"
        className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-700 transition disabled:bg-gray-400"
        // disabled={loading}
      >Details
        {/* {loading ? "Loading..." : "Details"} */}
      </button>
    </div>
  );
};

export default ProjectDetails;
