
// "use client";

// import { useEffect, useState } from "react";
// import AppRouts from "@/Constant/Constant";
// import axios from "axios";

// const ImportToSales = ({ id }) => {
//   const [editProjectDetails, setEditProjectDetails] = useState(false);
//   const [currentProjectDetails, setCurrentProjectDetails] = useState();
//   const [loading, setLoading] = useState(false); // Added loading state

//   //  to get project details
//   const fatchData = async () => {
//     try {
//       const projectdetails = await axios.get(`${AppRouts.editProject}/${id}`);
//     //   console.log("project details: ", projectdetails.data.data);
//       setCurrentProjectDetails(projectdetails.data.data);
//     } catch (error) {
//       alert("error", error.message);
//     }
//   };

//   const handleClick = () => {
//     console.log("project id", id); // Log the project id
//     fatchData();
//     setEditProjectDetails(true); // Open the modal
//   };

// // console.log("Current Project details : ", currentProjectDetails);


// useEffect(()=>{

//     const salesDetails = { 
//         projectTitle:currentProjectDetails?.projectTitle,
//         projectType:currentProjectDetails?.projectType,
//         projectID:currentProjectDetails?._id,
//         client:currentProjectDetails?.client,
//         contactNo:currentProjectDetails?.contactNo,
//         email:currentProjectDetails?.email,
//         salesPerson:currentProjectDetails?.salesPerson,
//         salesPersonID:currentProjectDetails?.salesPersonID,
//         projectCost:currentProjectDetails?.projectCost,
//         paymentDetails:currentProjectDetails?.paymentDetails,
//         projectDeliveryDate:currentProjectDetails?.projectDeliveryDate,
//         status:currentProjectDetails?.status
//     }
//     console.log("sales details : " , salesDetails);

//     const importToSalesRecord = async()=>{
//     try{
//         const response = await axios.post(AppRouts.createProjectSalesReacord, salesDetails)
//         alert(response.data.msg)
//     }
//     catch (error) {
//         alert(error.response.data.msg);
//     }
// }

// importToSalesRecord()

// },[currentProjectDetails])
    

//   return (
//     <div className="flex justify-end">
//       <button
//         onClick={handleClick}
//         type="button"
//         className=" text-red-500 px-2 py-1 rounded-md hover:bg-red-600 hover:text-white transition disabled:bg-gray-400"
//         disabled={loading}
//       >
//         Import to Sales
//         {/* {loading ? "Deleting..." : "Delete"} */}
//       </button>
//     </div>
//   );
// }

//   export default ImportToSales
// -----------------

"use client";

import { useEffect, useState } from "react";
import AppRouts from "@/Constant/Constant";
import axios from "axios";

const ImportToSales = ({ id }) => {
  const [currentProjectDetails, setCurrentProjectDetails] = useState(null);
  const [loading, setLoading] = useState(false); // For fetching data
  const [importing, setImporting] = useState(false); // For importing to sales

  // To get project details
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${AppRouts.editProject}/${id}`); //edit api use here to get current project details 
      setCurrentProjectDetails(response.data.data);
    } catch (error) {
      alert("Error fetching project: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Handles button click
  const handleClick = () => {
    fetchData();
  };

  // Runs when currentProjectDetails is updated
  useEffect(() => {
    if (!currentProjectDetails) return;

    const salesDetails = {
      projectTitle: currentProjectDetails.projectTitle,
      projectType: currentProjectDetails.projectType,
      projectID: currentProjectDetails._id,
      client: currentProjectDetails.client,
      contactNo: currentProjectDetails.contactNo,
      email: currentProjectDetails.email,
      salesPerson: currentProjectDetails.salesPerson,
      salesPersonID: currentProjectDetails.salesPersonID,
      projectCost: currentProjectDetails.projectCost,
      paymentDetails: currentProjectDetails.paymentDetails,
      projectDeliveryDate: currentProjectDetails.projectDeliveryDate,
      status: currentProjectDetails.status,
    };

    const importToSalesRecord = async () => {
      try {
        setImporting(true);
        const response = await axios.post(AppRouts.createProjectSalesReacord, salesDetails);
        alert(response.data.msg);
      } catch (error) {
        alert(error.response?.data?.msg || "Error while importing to sales");
      } finally {
        setImporting(false);
      }
    };

    importToSalesRecord();
  }, [currentProjectDetails]);

  return (
    <div className="flex justify-end">
      <button
        onClick={handleClick}
        type="button"
        className="text-blue-600 px-2 py-1 rounded-md hover:bg-blue-700 hover:text-white transition disabled:bg-gray-400"
        disabled={loading || importing}
      >
        {loading
          ? "Fetching..."
          : importing
          ? "Importing..."
          : "Import to Sales"}
      </button>
    </div>
  );
};

export default ImportToSales;
