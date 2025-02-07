// import LogoutButton from "@/app/Components/Logout";

// const AdminDashBoard = () => {
//   return (
//     <div>
//       <h1>This is ADMIN DASHBOARD</h1>
//       <LogoutButton/>
//     </div>
//   );
// };

// export default AdminDashBoard;
// ----------------------------------------------

import React from "react";
import LogoutButton from "@/app/Components/Logout";

export default function AdminDashboard() {
  // Dummy data for demonstration
  const totalEmployees = 50;
  const pendingProjects = 12;
  const totalSales = 120000;

  return (
    <div className="min-h-screen bg-background text-text">
      {/* Navbar */}
      <nav className="bg-navbar p-4 text-white">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </nav>

      {/* Main Content */}
      <div className="p-8">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-subheading text-lg font-semibold">
              Total Employees
            </h2>
            <p className="text-heading text-3xl font-bold">{totalEmployees}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-subheading text-lg font-semibold">
              Pending Projects
            </h2>
            <p className="text-heading text-3xl font-bold">{pendingProjects}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-subheading text-lg font-semibold">
              Total Sales
            </h2>
            <p className="text-heading text-3xl font-bold">
              ${totalSales.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Employee Information Section */}
        <section className="mb-8">
          <h2 className="text-heading text-2xl font-bold mb-4">
            Employee Information
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>Employee details will be displayed here.</p>
          </div>
        </section>

        {/* Project Management Section */}
        <section className="mb-8">
          <h2 className="text-heading text-2xl font-bold mb-4">
            Project Management
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>Project details will be displayed here.</p>
          </div>
        </section>

        {/* Sales Section */}
        <section>
          <h2 className="text-heading text-2xl font-bold mb-4">Sales</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>Sales details will be displayed here.</p>
          </div>
        </section>
      </div>
      {/* logout */}
      <LogoutButton />
    </div>
  );
}
