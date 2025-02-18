// import { useEffect, useState } from "react";
// import axios from "axios";
// import AppRouts from "@/Constant/Constant";
// import EditButton from "@/app/Components/EditProject";
// import DeleteButton from "@/app/Components/DeleteProject";
// import ProjectDetails from "@/app/Components/projectDetails";

// const Projects = () => {
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [projects, setProjects] = useState([]);

//   // Calculate stats
//   const totalProjects = projects.length;
//   const pendingProjects = projects.filter(
//     (project) => project.status === "Pending"
//   ).length;
//   const completedProjects = projects.filter(
//     (project) => project.status === "Completed"
//   ).length;

//   // Fetch all projects
//   useEffect(() => {
//     const fetchAllProjects = async () => {
//       try {
//         const response = await axios.get(AppRouts.getAllProject);
//         setProjects(response.data.data || []);
//         // console.log(response.data.data);

//         setLoading(false);
//       } catch (error) {
//         alert(error.message);
//         setError(error.message);
//         setLoading(false);
//       }
//     };
//     fetchAllProjects();
//   }, []);

//   useEffect(() => {
//     console.log("teacher info = ", teachers);

//     const filtereddata = teachers.filter((data) => {
//       // searching in all fields
//       return (
//         data.name.toLowerCase().includes(searchTerm) ||
//         data.userId.toLowerCase().includes(searchTerm) ||
//         data.batch.join("").toLowerCase().includes(searchTerm) ||
//         data.course.join("").toLowerCase().includes(searchTerm) ||
//         data.courseId.join("").toLowerCase().includes(searchTerm) ||
//         data.days.join("").toLowerCase().includes(searchTerm) ||
//         data.sectionId.join("").toLowerCase().includes(searchTerm)
//         // data.CNICno.includes(searchTerm)
//       );
//     });

//     setfilteredTeachers(filtereddata);
//   }, [searchTerm]);

//   // Handle Delete Project
//   const handleDelete = async (id) => {
//     try {
//       const confirmDelete = window.confirm(
//         "Are you sure you want to delete this project?"
//       );
//       if (confirmDelete) {
//         await axios.delete(`${AppRouts.deleteProject}/${id}`);
//         setProjects(projects.filter((project) => project._id !== id)); // Remove the project from the state
//         alert("Project deleted successfully");
//       }
//     } catch (error) {
//       alert("Error deleting project: " + error.message);
//     }
//   };

//   // Handle Edit Project
//   const handleEdit = (id) => {
//     console.log("user id : ", id);

//     // Redirect to the edit page or open a modal for editing
//     // window.location.href = `/edit-project/${id}`; // Adjust the URL as needed
//   };

//   return (
//     <div className="min-h-screen bg-background text-text">

// {/* Search Bar with Results */}
// <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-1/2">
//             <input
//               className="w-full sm:w-2/3 py-2 px-4 rounded-lg border border-blue-300 focus:outline-none focus:ring focus:ring-blue-500"
//               type="search"
//               name="searchFilter"
//               placeholder="Search here"
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//             </div>

//       {/* Main Content */}
//       <div className="p-4">
//         {/* Stats Section */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
//           <div className="bg-white p-6 rounded-lg shadow-md flex justify-between">
//             <h2 className="text-lg font-semibold text-subheading">
//               Total Projects
//             </h2>
//             <p className="text-3xl font-bold text-heading">{totalProjects}</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md flex justify-between">
//             <h2 className="text-lg font-semibold text-subheading">
//               Pending Projects
//             </h2>
//             <p className="text-3xl font-bold text-heading">{pendingProjects}</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md flex justify-between">
//             <h2 className="text-lg font-semibold text-subheading">
//               Completed Projects
//             </h2>
//             <p className="text-3xl font-bold text-heading">
//               {completedProjects}
//             </p>
//           </div>
//         </div>

//         {/* Project Management Section */}
//         <section className="mb-8">
//           <div className="bg-white py-6 rounded-lg shadow-md overflow-x-auto">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-gray-200 font-serif text-left">
//                   <th className="p-3 text-md">Sr</th>
//                   <th className="p-3 text-md">Project-ID</th>
//                   <th className="p-3 text-md">Project Title</th>
//                   <th className="p-3 text-md">Project Type</th>
//                   <th className="p-3 text-md">Client</th>
//                   <th className="p-3 text-md">Contact No</th>
//                   <th className="p-3 text-md">Email</th>
//                   <th className="p-3 text-md">Project Cost</th>
//                   <th className="p-3 text-md">Onboarding</th>
//                   <th className="p-3 text-md">Sales Person</th>
//                   <th className="p-3 text-md">Status</th>
//                   <th className="p-3 text-md">Link</th>
//                   <th className="p-3 text-md">Developer</th>
//                   <th className="p-3 text-md">Proposed Completion Date</th>
//                   <th className="p-3 text-md">Actual Completion Date</th>
//                   <th className="p-3 text-md text-center">Actions</th>{" "}
//                   {/* New column for actions */}
//                 </tr>
//               </thead>
//               <tbody>
//                 {projects.map((project, index) => (
//                   <tr
//                     key={index}
//                     className=" hover:bg-gray-100 hover:border hover:border-black transition text-sm font-serif"
//                   >
//                     <td className="p-3">{index + 1}</td>
//                     <td className="p-3">{project.projectID}</td>
//                     {/* <td className="p-3">{project.projectTitle}<p>{project._id}</p></td> */}
//                     <td className="p-3">{project.projectTitle}</td>
//                     <td className="p-3">{project.projectType}</td>
//                     <td className="p-3">{project.client}</td>
//                     <td className="p-3">{project.contactNo}</td>
//                     <td className="p-3">{project.email}</td>
//                     <td className="p-3">{project.projectCost}</td>
//                     <td className="p-3">
//                       {new Date(project.onboarding).toISOString().split("T")[0]}
//                     </td>
//                     <td className="p-3">{project.salesPerson}</td>
//                     <td
//                       className={`p-3 font-semibold ${
//                         project.status === "Completed"
//                           ? "text-green-600"
//                           : project.status === "Pending"
//                           ? "text-red-600"
//                           : "text-yellow-600"
//                       }`}
//                     >
//                       {project.status}
//                     </td>
//                     <td className="p-3">
//                       <a
//                         href={project.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-600 underline"
//                       >
//                         View
//                       </a>
//                     </td>
//                     <td className="p-3">{project.developer}</td>
//                     <td className="p-3">
//                       {
//                         new Date(project.proposedCompletionDate)
//                           .toISOString()
//                           .split("T")[0]
//                       }
//                     </td>
//                     <td className="p-3">
//                       {
//                         new Date(project.actualCompletionDate)
//                           .toISOString()
//                           .split("T")[0]
//                       }
//                     </td>
//                     <td className="p-3 flex gap-2">
//                       {/* Edit Button */}
//                       <EditButton id={project._id} />
//                       {/* Delete Button */}
//                       <DeleteButton id={project._id} Title={project.projectTitle} />
//                       {/* details Button */}
//                       {/* <ProjectDetails id={project._id} Title={projectTitle} /> */}
//                       <ProjectDetails id={project._id}  />

//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Projects;
// -----------------

import { useEffect, useState } from "react";
import axios from "axios";
import AppRouts from "@/Constant/Constant";
import EditButton from "@/app/Components/EditProject";
import DeleteButton from "@/app/Components/DeleteProject";
import ProjectDetails from "@/app/Components/projectDetails";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all projects
  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        const response = await axios.get(AppRouts.getAllProject);
        setProjects(response.data.data || []);
        setFilteredProjects(response.data.data || []); // Initialize with all projects
      } catch (error) {
        alert("Error fetching projects: " + error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAllProjects();
  }, []);

  useEffect(() => {
    const filteredData = projects.filter((project) => {
      const searchLower = searchTerm.toLowerCase();

      // Convert dates to YYYY-MM-DD format
      const proposedDate = project.proposedCompletionDate
        ? new Date(project.proposedCompletionDate).toISOString().split("T")[0]
        : "";
      const actualDate = project.actualCompletionDate
        ? new Date(project.actualCompletionDate).toISOString().split("T")[0]
        : "";

      return (
        // project.Sr.includes(searchLower) ||
        project.projectTitle.toLowerCase().includes(searchLower) ||
        project.projectType.toLowerCase().includes(searchLower) ||
        project.client.toLowerCase().includes(searchLower) ||
        project.contactNo.toLowerCase().includes(searchLower) ||
        project.email.toLowerCase().includes(searchLower) ||
        project.projectCost.toString().includes(searchLower) ||
        project.onboarding.toLowerCase().includes(searchLower) ||
        project.salesPerson.toLowerCase().includes(searchLower) ||
        project.status.toLowerCase().includes(searchLower) ||
        project.link.toLowerCase().includes(searchLower) ||
        project.developer.toLowerCase().includes(searchLower) ||
        proposedDate.includes(searchLower) || // Search formatted proposedCompletionDate
        actualDate.includes(searchLower) // Search formatted actualCompletionDate
      );
    });

    setFilteredProjects(filteredData);
  }, [searchTerm, projects]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle Delete Project
  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this project?"
      );
      if (confirmDelete) {
        await axios.delete(`${AppRouts.deleteProject}/${id}`);
        setProjects(projects.filter((project) => project._id !== id));
        alert("Project deleted successfully");
      }
    } catch (error) {
      alert("Error deleting project: " + error.message);
    }
  };

  // Calculate stats
  const totalProjects = projects.length;
  const pendingProjects = projects.filter((p) => p.status === "Pending").length;
  const completedProjects = projects.filter(
    (p) => p.status === "Completed"
  ).length;

  return (
    <div className="min-h-screen bg-background text-text p-4">
      
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md flex justify-between">
          <h2 className="text-lg font-semibold text-subheading">
            Total Projects
          </h2>
          <p className="text-3xl font-bold text-heading">{totalProjects}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex justify-between">
          <h2 className="text-lg font-semibold text-subheading">
            Pending Projects
          </h2>
          <p className="text-3xl font-bold text-heading">{pendingProjects}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex justify-between">
          <h2 className="text-lg font-semibold text-subheading">
            Completed Projects
          </h2>
          <p className="text-3xl font-bold text-heading">{completedProjects}</p>
        </div>
      </div>

      {/* search bar */}
      <div className="flex justify-end ">
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-1/2 mb-6">
          <input
            className="w-full sm:w-2/3 py-2 px-4 rounded-lg border border-blue-300 focus:outline-none focus:ring focus:ring-blue-500"
            type="search"
            placeholder="Search here..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className="w-full sm:w-1/3 bg-blue-50 text-center text-headingColor shadow-md rounded-lg py-2 px-3">
              <span className="text-sm md:text-lg font-serif">
                {!searchTerm ? "No" : filteredProjects.length} result(s) found
              </span>
            </div>
        </div>
      </div>

      {/* Project List Table */}
      <div className="bg-white py-6 rounded-lg shadow-md overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 font-serif text-left">
              <th className="p-3 text-md">Sr</th>
              <th className="p-3 text-md">Project-ID</th>
              <th className="p-3 text-md">Title</th>
              <th className="p-3 text-md">Type</th>
              <th className="p-3 text-md">Client</th>
              <th className="p-3 text-md">Contact</th>
              <th className="p-3 text-md">Email</th>
              <th className="p-3 text-md">Cost</th>
              <th className="p-3 text-md">Onboarding</th>
              <th className="p-3 text-md">Sales Person</th>
              <th className="p-3 text-md">Status</th>
              <th className="p-3 text-md">Link</th>
              <th className="p-3 text-md">Developer</th>
              <th className="p-3 text-md">Proposed Completion</th>
              <th className="p-3 text-md">Actual Completion</th>
              <th className="p-3 text-md text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 text-sm font-serif"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{project.projectID}</td>
                  <td className="p-3">{project.projectTitle}</td>
                  <td className="p-3">{project.projectType}</td>
                  <td className="p-3">{project.client}</td>
                  <td className="p-3">{project.contactNo}</td>
                  <td className="p-3">{project.email}</td>
                  <td className="p-3">{project.projectCost}</td>
                  <td className="p-3">
                    {new Date(project.onboarding).toISOString().split("T")[0]}
                  </td>
                  <td className="p-3">{project.salesPerson}</td>
                  <td
                    className={`p-3 font-semibold ${
                      project.status === "Completed"
                        ? "text-green-600"
                        : project.status === "Pending"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {project.status}
                  </td>
                  <td className="p-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      View
                    </a>
                  </td>
                  <td className="p-3">{project.developer}</td>
                  <td className="p-3">
                    {
                      new Date(project.proposedCompletionDate)
                        .toISOString()
                        .split("T")[0]
                    }
                  </td>
                  <td className="p-3">
                    {
                      new Date(project.actualCompletionDate)
                        .toISOString()
                        .split("T")[0]
                    }
                  </td>
                  <td className="p-3 flex gap-2">
                    <EditButton id={project._id} />
                    <DeleteButton
                      id={project._id}
                      Title={project.projectTitle}
                    />
                    <ProjectDetails id={project._id} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="16" className="text-center py-4">
                  No projects found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Projects;
