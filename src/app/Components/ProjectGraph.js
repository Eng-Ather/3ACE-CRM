'use client';

import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ProjectChart() {
  const [totalProject, setTotalProject] = useState(12);
  const [pendingProject, setPendingProject] = useState(2);
  const [deliveredProjects, setDeliveredProjects] = useState(10);

  const percentageDelivered = totalProject > 0 ? (deliveredProjects / totalProject) * 100 : 0;
  const percentagePending = totalProject > 0 ? (pendingProject / totalProject) * 100 : 0;

  return (
    <div className="w-full p-3 bg-white rounded-xl shadow-lg">
      {/* <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
        Project Status
      </h2> */}
      <h2 className="text-heading text-xl md:text-4xl text-center font-serif mb-12">Project Status</h2>


      <div className="flex flex-wrap justify-center gap-10 md:gap-32">
        {/* Total Projects */}
        <div className="flex flex-col items-center w-20 md:w-36">
          <p className="font-semibold text-sm text-gray-700 mb-2">Total </p>
          <div className="w-18 md:w-28">
            <CircularProgressbar
              value={100}
              text={`${totalProject}`}
              styles={buildStyles({
                textColor: "#333",
                pathColor: "#3182CE",
                trailColor: "#E2E8F0",
                textSize: "24px",
              })}
            />
          </div>
        </div>

        {/* Delivered Projects */}
        <div className="flex flex-col items-center w-20 md:w-36">
          <p className="font-semibold text-sm text-green-600 mb-2">Delivered</p>
          <div className="w-18 md:w-28">
            <CircularProgressbar
              value={percentageDelivered}
              text={`${deliveredProjects}`}
              styles={buildStyles({
                textColor: "#38A169",
                pathColor: "#38A169",
                trailColor: "#C6F6D5",
                textSize: "24px",
              })}
            />
          </div>
          <p className="text-sm text-green-700 mt-1">({percentageDelivered.toFixed(1)}%)</p>
        </div>

        {/* Pending Projects */}
        <div className="flex flex-col items-center w-20 md:w-36">
          <p className="font-semibold text-sm text-red-600 mb-2">Pending</p>
          <div className="w-18 md:w-28">
            <CircularProgressbar
              value={percentagePending}
              text={`${pendingProject}`}
              styles={buildStyles({
                textColor: "#E53E3E",
                pathColor: "#E53E3E",
                trailColor: "#FED7D7",
                textSize: "24px",
              })}
            />
          </div>
          <p className="text-sm text-red-700 mt-1">({percentagePending.toFixed(1)}%)</p>
        </div>
      </div>
    </div>
  );
}
