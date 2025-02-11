// import SalesPerson from "@/app/(SalesPerrson)/SalesPersonDashboard/page";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import AppRouts from "@/Constant/Constant";

// const Projects = () => {
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [projects, setProjects] = useState([]);

//   // calling Api to get all project
//   useEffect(() => {
//     const fetchAllProjects = async () => {
//       try {
//         const response = await axios.get(AppRouts.getAllProject); 
//         // console.log("response", response.data.data);
//         setProjects(response.data.data || []); 
//         setLoading(false);
//       } catch (error) {
//         alert(error.message);
//         setError(error.message);
//         setLoading(false);
//       }
//     };
//     fetchAllProjects();
//   }, []);

//   return (
//     <div className="min-h-screen bg-background text-text">
//       {/* Main Content */}
//       <div className="p-8">
//         {/* Stats Section */}
//         {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <h2 className="text-lg font-semibold text-subheading">
//                   Total Employees
//                 </h2>
//                 <p className="text-3xl font-bold text-heading">{totalEmployees}</p>
//               </div>
//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <h2 className="text-lg font-semibold text-subheading">
//                   Pending Projects
//                 </h2>
//                 <p className="text-3xl font-bold text-heading">{pendingProjects}</p>
//               </div>
//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <h2 className="text-lg font-semibold text-subheading">
//                   Total Sales
//                 </h2>
//                 <p className="text-3xl font-bold text-heading">
//                   ${totalSales.toLocaleString()}
//                 </p>
//               </div>
//             </div> */}

//         {/* Project Management Section */}
//         <section className="mb-8">
//           <h2 className="text-2xl font-bold mb-4 text-heading">Project </h2>

//           <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-gray-200 text-left">
//                   <th className="p-3 border border-red-500 text-subheading">
//                     Sr
//                   </th>
//                   <th className="p-3 border border-red-500 text-subheading">
//                     Project{" "}
//                   </th>
//                   <th className="p-3 border border-red-500 text-subheading">
//                     Project type
//                   </th>
//                   <th className="p-3 border border-red-500 text-subheading">
//                     Client
//                   </th>
//                   <th className="p-3 border border-red-500 text-subheading">
//                     Contact no
//                   </th>
//                   <th className="p-3 border border-red-500 text-subheading">
//                     Email
//                   </th>
//                   <th className="p-3 border border-red-500 text-subheading">
//                     Onbording
//                   </th>
//                   <th className="p-3 border border-red-500 text-subheading">
//                     Sales Person
//                   </th>
//                   <th className="p-3 border border-red-500 text-subheading">
//                     Status
//                   </th>
//                   <th className="p-3 border border-red-500 text-subheading">
//                     Link
//                   </th>
//                   <th className="p-3 border border-red-500 text-subheading">
//                     Developer
//                   </th>
//                   {/* <th className="p-3 border border-red-500 text-subheading">Timeline</th> */}
//                   <th className="p-3 border border-red-500 text-subheading">
//                     Porpose Completion date
//                   </th>
//                   <th className="p-3 border border-red-500 text-subheading">
//                     Actual Completion date
//                   </th>
//                   {/* <th className="p-3 border border-red-500 text-subheading">Region</th> */}
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* {projectsData.map((project, index) => ( */}
//                 {projects.map((project, index) => (
//                   <tr
//                     key={index}
//                     className="border-b hover:bg-gray-100 transition"
//                   >
//                     <td className="p-3">{project.index}</td>
//                     <td className="p-3">{project.projectTitle}</td>
//                     <td className="p-3">{project.projectType}</td>
//                     <td className="p-3">{project.client}</td>
//                     <td className="p-3">{project.contactNo}</td>
//                     <td className="p-3">{project.email}</td>
//                     <td className="p-3">{project.onboarding}</td>
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

//                     {/* <td className="p-3">{project.timeline}</td> */}
//                     <td className="p-3">{project.proposedCompletionDate}</td>
//                     <td className="p-3">{project.actualCompletionDate}</td>
//                     {/* <td className="p-3">{project.region}</td> */}
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
// --------------
import SalesPerson from "@/app/(SalesPerrson)/SalesPersonDashboard/page";
import { useEffect, useState } from "react";
import axios from "axios";
import AppRouts from "@/Constant/Constant";

const Projects = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  // Calculate stats
  const totalProjects = projects.length;
  const pendingProjects = projects.filter(
    (project) => project.status === "Pending"
  ).length;
  const completedProjects = projects.filter(
    (project) => project.status === "Completed"
  ).length;

  // calling Api to get all project
  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        const response = await axios.get(AppRouts.getAllProject);
        setProjects(response.data.data || []);
        setLoading(false);
      } catch (error) {
        alert(error.message);
        setError(error.message);
        setLoading(false);
      }
    };
    fetchAllProjects();
  }, []);

  return (
    <div className="min-h-screen bg-background text-text">
      {/* Main Content */}
      <div className="p-4">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-subheading">
              Total Projects
            </h2>
            <p className="text-3xl font-bold text-heading">{totalProjects}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-subheading">
              Pending Projects
            </h2>
            <p className="text-3xl font-bold text-heading">{pendingProjects}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-subheading">
              Completed Projects
            </h2>
            <p className="text-3xl font-bold text-heading">
              {completedProjects}
            </p>
          </div>
        </div>

        {/* Project Management Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-heading">Project </h2>

          <div className="bg-white py-6 rounded-lg shadow-md overflow-x-auto">
            <table className="w-full border-collapse ">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-3 text-md">
                    Sr
                  </th>
                  <th className="p-3 text-md">
                    Project{" "}
                  </th>
                  <th className="p-3 text-md">
                    Project type
                  </th>
                  <th className="p-3 text-md">
                    Client
                  </th>
                  <th className="p-3 text-md">
                    Contact no
                  </th>
                  <th className="p-3 text-md">
                    Email
                  </th>
                  <th className="p-3 text-md">
                    Onbording
                  </th>
                  <th className="p-3 text-md">
                    Sales Person
                  </th>
                  <th className="p-3 text-md">
                    Status
                  </th>
                  <th className="p-3 text-md">
                    Link
                  </th>
                  <th className="p-3 text-md">
                    Developer
                  </th>
                  <th className="p-3 text-md">
                    Porpose Completion date
                  </th>
                  <th className="p-3 text-md">
                    Actual Completion date
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-100 transition"
                  >
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">{project.projectTitle}</td>
                    <td className="p-3">{project.projectType}</td>
                    <td className="p-3">{project.client}</td>
                    <td className="p-3">{project.contactNo}</td>
                    <td className="p-3">{project.email}</td>
                    <td className="p-3">{project.onboarding}</td>
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
                    <td className="p-3">{project.proposedCompletionDate}</td>
                    <td className="p-3">{project.actualCompletionDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;