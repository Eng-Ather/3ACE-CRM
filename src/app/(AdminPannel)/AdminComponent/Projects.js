import { useEffect, useState } from "react";
import axios from "axios";
import AppRouts from "@/Constant/Constant";
import EditButton from "@/app/Components/EditProject";

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

  // Fetch all projects
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

  // Handle Delete Project
  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete this project?");
      if (confirmDelete) {
        await axios.delete(`${AppRouts.deleteProject}/${id}`);
        setProjects(projects.filter((project) => project._id !== id)); // Remove the project from the state
        alert("Project deleted successfully");
      }
    } catch (error) {
      alert("Error deleting project: " + error.message);
    }
  };

  // Handle Edit Project
  const handleEdit = (id) => {
    console.log("user id : ", id);
    
    // Redirect to the edit page or open a modal for editing
    // window.location.href = `/edit-project/${id}`; // Adjust the URL as needed
  };

  return (
    <div className="min-h-screen bg-background text-text">
      {/* Main Content */}
      <div className="p-4">
     
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
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
            <p className="text-3xl font-bold text-heading">
              {completedProjects}
            </p>
          </div>
        </div>

        {/* Project Management Section */}
        <section className="mb-8">
          <div className="bg-white py-6 rounded-lg shadow-md overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 font-serif text-left">
                  <th className="p-3 text-md">Sr</th>
                  <th className="p-3 text-md">Project Title</th>
                  <th className="p-3 text-md">Project Type</th>
                  <th className="p-3 text-md">Client</th>
                  <th className="p-3 text-md">Contact No</th>
                  <th className="p-3 text-md">Email</th>
                  <th className="p-3 text-md">Onboarding</th>
                  <th className="p-3 text-md">Sales Person</th>
                  <th className="p-3 text-md">Status</th>
                  <th className="p-3 text-md">Link</th>
                  <th className="p-3 text-md">Developer</th>
                  <th className="p-3 text-md">Proposed Completion Date</th>
                  <th className="p-3 text-md">Actual Completion Date</th>
                  <th className="p-3 text-md">Actions</th> {/* New column for actions */}
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr
                    key={index}
                    className=" hover:bg-gray-100 hover:border hover:border-black transition text-sm font-serif"
                  >
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">
                      {project.projectTitle}
                      <p>{project._id}</p>
                    </td>
                    <td className="p-3">{project.projectType}</td>
                    <td className="p-3">{project.client}</td>
                    <td className="p-3">{project.contactNo}</td>
                    <td className="p-3">{project.email}</td>
                    <td className="p-3">{new Date(project.onboarding).toISOString().split("T")[0]}</td>
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
                    <td className="p-3">{new Date(project.proposedCompletionDate).toISOString().split("T")[0]}</td>
                    <td className="p-3">{new Date(project.actualCompletionDate).toISOString().split("T")[0]}</td>
                    <td className="p-3 flex gap-2">
                      {/* Edit Button */}
                      <EditButton id={project._id} />
              
                      {/* Delete Button */}
                      <button
                        onClick={() => handleDelete(project._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </td>
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