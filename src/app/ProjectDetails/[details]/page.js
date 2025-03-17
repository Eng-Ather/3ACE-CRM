"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import AppRouts from "@/Constant/Constant";
import Image from "next/image";
import LOGO from "@/images/LOGO.jpeg";

const ProjectDetailsPage = (params) => {
  console.log("project id ==>", params.params.details);

  const [projectdetails, setProjectDetails] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [projectInfo, setprojectInfo] = useState({
    title: "Project Title",
    ID: "N/A",
  });

  // calling API to get project details
  useEffect(() => {
    const fetchProjectDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const projectID = { projectID: params.params.details };
        const response = await axios.post(
          AppRouts.getProjectDetails,
          projectID
        );

        if (response.data?.data) {
          setProjectDetails(response.data.data);
        } else {
          setProjectDetails(null);
          setError("No project details found.");
        }
      } catch (err) {
        console.error("Error fetching project details:", err);
        setError("No details Found.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [params]);

  // Update project title & Project
  useEffect(() => {
    if (projectdetails?.length > 0) {
      setprojectInfo({
        title: projectdetails[0]?.projecTitle,
        ID: projectdetails[0]?.projectID,
      });
    }
  }, [projectdetails]);

  console.log("project details===> ", projectdetails);

  return (
    <div className="min-h-screen bg-white shadow-lg rounded-lg">
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 flex justify-center gap-6 items-center px-4">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white">
          <Image
            src={LOGO}
            alt="Logo"
            width={56}
            height={56}
            className="object-cover"
          />
        </div>

        <h1 className="w-full  text-white px-6 py-2 text-center sm:text-left text-md md:text-3xl font-serif ">
          Project Title : {projectInfo.title} <br />
          <i className="text-lg md:text-xl text-white">
            {" "}
            Project ID : {projectInfo.ID || "Project Details"}
          </i>
        </h1>
      </div>

      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-gray-500 text-4xl">Loading...</p>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-gray-500 text-4xl">{error}</p>
        </div>
      ) : projectdetails?.length > 0 ? (
        projectdetails.map((data, index) => (
          <div key={index} className="border-b border-gray-300 p-4">
            {/* User Info Section */}
            <div>
              <div className="flex gap-3 justify-end">
                {data?.userName && (
                  <p>
                    <strong>Edit by:</strong> {data.userName}
                  </p>
                )}
                {data?.userRole && <i>Role: {data.userRole}</i>}
              </div>

              {data?.createdAt && (
                <div className="flex gap-3 justify-end">
                  <strong>Created at:</strong>{" "}
                  {new Date(data.createdAt).toLocaleDateString()} at{" "}
                  {new Date(data.createdAt).toLocaleTimeString()}
                </div>
              )}
            </div>

            {/* Code & Deployment Links */}
            {(data?.codeLinks || data?.deploymnetLink) && (
              <div className="flex gap-3">
                {data?.codeLinks && (
                  <p>
                    <strong>Code Link:</strong> {data.codeLinks}
                  </p>
                )}
                {data?.deploymnetLink && (
                  <p>
                    <strong>Deployment Link:</strong> {data.deploymnetLink}
                  </p>
                )}
              </div>
            )}

            {/* Remarks */}
            {data?.remarks && (
              <p>
                <strong>Remarks:</strong> {data.remarks}
              </p>
            )}

            {/* Reference Link */}
            {data?.refrenceLink && (
              <p>
                <strong>Reference Link:</strong> {data.refrenceLink}
              </p>
            )}

            {/* Document */}
            {data?.document && (
              <p>
                <strong>Document:</strong> {data.document}
              </p>
            )}
          </div>
        ))
      ) : (
        <p>No Details Available</p>
      )}
    </div>
  );
};

export default ProjectDetailsPage;
