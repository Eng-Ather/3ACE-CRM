"use client";

import { useState } from "react";
import axios from "axios";
import AppRouts from "@/Constant/Constant";

const DeleteButton = ({ id, Title }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!id) {
      console.error("No ID provided for deletion.");
      return;
    }

    const confirmDelete = window.confirm(`Are you sure you want to delete this project?:: ${Title} `);
    if (!confirmDelete) return;

    setLoading(true);
    try {
      console.log("Deleting project with ID:", id);
      const response = await axios.delete(`${AppRouts.deleteProject}/${id}`);
      console.log("Deletion successful:", response.data);
      // Re load page 
      window.location.reload();

    } catch (error) {
      console.error("Error deleting project:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-end">
      <button
        onClick={handleDelete}
        type="button"
        className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-700 transition disabled:bg-gray-400"
        disabled={loading}
      >
        {loading ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
};

export default DeleteButton;
