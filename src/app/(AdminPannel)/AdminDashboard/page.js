// // import LogoutButton from "@/app/Components/Logout";

// // const AdminDashBoard = () => {
// //   return (
// //     <div>
// //       <h1>This is ADMIN DASHBOARD</h1>
// //       <LogoutButton/>
// //     </div>
// //   );
// // };

// // export default AdminDashBoard;
// // ----------------------------------------------
// "use client";

// import React from "react";
// import LogoutButton from "@/app/Components/Logout";
// import DashboardNavebar from "@/app/Components/DashboardNavebar";
// import AdminNavbar from "../AdminComponent/AdminNavbar";

// export default function AdminDashboard() {
//   // Dummy data for demonstration
//   const totalEmployees = 50;
//   const pendingProjects = 12;
//   const totalSales = 120000;

//   return (
//     <div className="min-h-screen bg-background text-text">
      
//       {/* Navbar */}
//       <AdminNavbar />

//       {/* Main Content */}
//       <div className="p-8">
//         {/* Stats Section */}
//         <div className="border grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-subheading text-lg font-semibold">
//               Total Employees
//             </h2>
//             <p className="text-heading text-3xl font-bold">{totalEmployees}</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-subheading text-lg font-semibold">
//               Pending Projects
//             </h2>
//             <p className="text-heading text-3xl font-bold">{pendingProjects}</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-subheading text-lg font-semibold">
//               Total Sales
//             </h2>
//             <p className="text-heading text-3xl font-bold">
//               ${totalSales.toLocaleString()}
//             </p>
//           </div>
//         </div>

//         {/* Employee Information Section */}
//         <section className="mb-8">
//           <h2 className="text-heading text-2xl font-bold mb-4">
//             Employee Information
//           </h2>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <p>Employee details will be displayed here.</p>
//           </div>
//         </section>

//         {/* Project Management Section */}
//         <section className="mb-8">
//           <h2 className="text-heading text-2xl font-bold mb-4">
//             Project Management
//           </h2>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <p>Project details will be displayed here.</p>
//           </div>
//         </section>

//         {/* Sales Section */}
//         <section>
//           <h2 className="text-heading text-2xl font-bold mb-4">Sales</h2>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <p>Sales details will be displayed here.</p>
//           </div>
//         </section>
//       </div>
//       {/* logout */}
//       <LogoutButton />
//     </div>
//   );
// }
// -------------------

"use client";

import React from "react";
import LogoutButton from "@/app/Components/Logout";
import AdminNavbar from "../AdminComponent/AdminNavbar";
// import AdminHerosection from "../AdminComponent/Projects";
import Projects from "../AdminComponent/Projects";

export default function AdminDashboard() {
  // Dummy data for demonstration
  const totalEmployees = 50;
  const pendingProjects = 12;
  const totalSales = 120000;

  return (
    <div className="min-h-screen bg-background text-text">
      {/* Navbar */}
      <AdminNavbar />
      {/* <AdminHerosection/> */}
      <Projects/>

      {/* Main Content */}
      <div className="p-8">
        {/* Stats Section */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-subheading">
              Total Employees
            </h2>
            <p className="text-3xl font-bold text-heading">{totalEmployees}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-subheading">
              Pending Projects
            </h2>
            <p className="text-3xl font-bold text-heading">{pendingProjects}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-subheading">
              Total Sales
            </h2>
            <p className="text-3xl font-bold text-heading">
              ${totalSales.toLocaleString()}
            </p>
          </div>
        </div> */}

       
        {/* Project Management Section */}
        {/* <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-heading">Project Management</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 text-subheading">Project Name</th>
                  <th className="p-2 text-subheading">Status</th>
                  <th className="p-2 text-subheading">Deadline</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2 text-text">Project Alpha</td>
                  <td className="p-2 text-yellow-600">In Progress</td>
                  <td className="p-2 text-text">2023-12-31</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 text-text">Project Beta</td>
                  <td className="p-2 text-green-600">Completed</td>
                  <td className="p-2 text-text">2023-11-15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section> */}
      </div>

      {/* Logout Button */}
      <div className="fixed bottom-4 right-4">
        <LogoutButton />
      </div>
    </div>
  );
}