"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import AppRouts from "@/Constant/Constant";
import ProjectChart from "@/app/Components/ProjectGraph";
import EditButton from "@/app/Components/EditProject";
import DeleteButton from "@/app/Components/DeleteProject";
import UpdateProject from "@/app/Components/UpdateProject";
import ProjectDetails from "@/app/Components/projectDetails";

const SalesPageForAdmin = () => {
  const [projectsSales, setProjectsSales] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectSales = async () => {
      try {
        setLoading(true);
        const response = await axios.get(AppRouts.getProjectsSalesRecord);
        setProjectsSales(response.data.data || []);
        console.log(response.data.data);
      } catch (error) {
        alert("Error fetching Projects Sales Record: " + error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProjectSales();
  }, []);

  useEffect(() => {
    const searchLower = searchTerm.toLowerCase();
    const filteredData = projectsSales.filter((data) => {
      const proposedDate = data.proposedCompletionDate?.split("T")[0] || "";
      const actualDate = data.actualCompletionDate?.split("T")[0] || "";
      return (
        data.projectTitle?.toLowerCase().includes(searchLower) ||
        data.projectType?.toLowerCase().includes(searchLower) ||
        data.client?.toLowerCase().includes(searchLower) ||
        data.salesPerson?.toLowerCase().includes(searchLower) ||
        data.projectID?.toLowerCase().includes(searchLower) ||
        data.assignto?.toLowerCase().includes(searchLower) ||
        proposedDate.includes(searchLower) ||
        actualDate.includes(searchLower)
      );
    });
    setFilteredProjects(filteredData);
  }, [searchTerm, projectsSales]);

  if (loading)
    return (
      <div className="min-h-screen text-center text-lg font-semibold">
        Loading projects...
      </div>
    );
  if (error)
    return (
      <div className="text-center text-lg text-red-500">Error: {error}</div>
    );

  return (
    <div className="min-h-screen text-text">
      <div className="flex flex-col items-center w-full gap-2 md:flex-row md:justify-between">
        <div className="w-full md:w-1/2 flex flex-col items-end">
          <div className="w-full sm:w-3/4 flex flex-col sm:flex-row items-center gap-4 p-2">
            <input
              className="w-full py-2 px-4 text-sm md:text-base rounded-lg border border-heading focus:outline-none focus:ring focus:ring-blue-900 shadow-sm"
              type="search"
              placeholder="Search here..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="w-full sm:w-3/4 text-white text-sm bg-heading text-center shadow-md rounded-lg py-2 px-3">
              <span className="text-sm md:text-lg font-serif">
                {!searchTerm
                  ? "Search Here"
                  : `${filteredProjects.length} result(s) found`}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-end">
          <ProjectChart />
        </div>
      </div>

      <div className="bg-white py-6 rounded-lg overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 font-serif text-left">
              <th className="p-3 text-md">Sr</th>
              <th className="p-3 text-md">Client & Project Title</th>
              <th className="p-3 text-md">Contacts</th>
              <th className="p-3 text-md">
                Project Cost & <br /> Sales Person
              </th>

              <th className="p-3 text-md">Payment Details </th>

              <th className="p-3 text-md">
                Developer / <br /> Designer
              </th>
              <th className="p-3 text-md">
                Onboarding & <br />Completion Date
              </th>
              <th className="p-3 text-md">Status</th>
              <th className="p-3 text-md text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <tr
                  key={project._id}
                  className="hover:bg-gray-100 text-sm font-serif"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">
                    {project.client} || {project.projectTitle}
                    <br />
                    {project.projectType}
                  </td>
                  <td className="p-3">
                    {project.contactNo}
                    <br />
                    {project.email}
                  </td>
                  <td className="p-3">
                    {project.projectCost} <br /> {project.salesPerson}
                  </td>

                  {project.paymentDetails?.map((detail, index) => (
                    <div key={index}>
                      {detail.amount} as {detail.purpose} on {detail.date?.split("T")[0]}
                     
                    </div>
                  ))}

                  <td className="p-3">
                    {project.assignto}
                    <br />
                    {project.assignedDate?.split("T")[0]}
                  </td>
                  <td className="p-3">
                    {project.onboarding?.split("T")[0]} <br />{" "}
                    {project.actualCompletionDate?.split("T")[0]}
                  </td>
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
                  <td className="p-3 flex gap-2">
                    <EditButton id={project._id} />
                    <DeleteButton id={project._id} />
                    <ProjectDetails Pid={project._id} />
                    <UpdateProject
                      Pid={project._id}
                      projectTitle={project.projectTitle}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="12" className="text-center py-4">
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

export default SalesPageForAdmin;
