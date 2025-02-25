import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "@/Context/contrext";
import AppRouts from "@/Constant/Constant";
import axios from "axios";

const UpdateProject = ({ Pid, projectTitle }) => {
  const { user } = useContext(AuthContext);
//   console.log(user);

  const [updateProject, setUpdateProject] = useState(false);
  const [file, setFile] = useState(null);

  const handleClick = async () => {
    console.log("Project ID:", Pid);
    console.log("Project Title:", projectTitle);
    setUpdateProject(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target.remarks.value);

    const updatedData = {
      userID: user.userId,
      userName: user.name,
      userRole: user.role,
      projecTitle: projectTitle,
      projectID: Pid,
      remarks: e.target.remarks.value,
    };

    // console.log(updatedData);

    try {
      const response = await axios.post(AppRouts.updateProject, updatedData);
      console.log("response", response);
      alert("Project Updated Successfully");
      setUpdateProject(false);
    }
     catch (error) {
      console.log(error);
      alert("ERROR ", error);
    }
    // Logic to update project data
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
      >
        Update
      </button>

      {updateProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white/90 p-4 rounded-lg shadow-2xl w-full max-w-4xl mx-4 overflow-y-auto max-h-[95vh]">
            <div className="flex justify-between items-end mb-20">
              <h2 className="text-2xl font-serif text-heading">
                {projectTitle}
                <span className="text-lg">
                  {" ( Project ID # "}
                  {Pid} {" ) "}{" "}
                </span>
              </h2>
              <button
                onClick={() => setUpdateProject(false)}
                className="text-4xl text-gray-600 hover:text-black transition duration-300"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* comment or remarks */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full ">
                  <label
                    htmlFor="remarks"
                    className="block text-text text-lg font-semibold font-serif"
                  >
                    Remarks
                  </label>

                  <textarea
                    name="remarks"
                    id="remarks"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-heading"
                    placeholder="Enter remarks"
                    rows="5"
                  ></textarea>
                </div>
              </div>

              {/* File Upload */}
              <div className="w-full">
                <label htmlFor="file" className="block text-text text-lg font-semibold font-serif">
                  Attach Document (PDF, DOC, IMG)
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  accept=".pdf,.doc,.docx,.jpg,.png"
                //   onChange={handleFileChange}
                  className="w-full px-4 py-2 border rounded-lg cursor-pointer"
                />
                {file && <p className="text-sm text-gray-600 mt-2">Selected File: {file.name}</p>}
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-fit bg-blue-500 text-white text-xl font-semibold font-serif px-10 py-3 rounded-lg hover:bg-heading transition duration-100"
                >
                  update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateProject;
