// import Head from "next/head";
// import ProjectChart from "./ProjectGraph";

// export default function MainScreen() {
//   const recentActivity = [
//     {
//       ueryFrom: "Ali",
//       employeeId: "#3ACE-TECH-E10",
//       activity: "New sales lead added",
//     },
//     {
//       ueryFrom: "Abid",
//       employeeId: "#3ACE-TECH-E11",
//       activity: "New sales lead added",
//     },
//     {
//       ueryFrom: "Asgher",
//       employeeId: "#3ACE-TECH-E16",
//       activity: "New sales lead added",
//     },
//     {
//       ueryFrom: "Ali",
//       employeeId: "#3ACE-TECH-E10",
//       activity: "New sales lead added",
//     },
//     {
//       ueryFrom: "Abid",
//       employeeId: "#3ACE-TECH-E11",
//       activity: "New sales lead added",
//     },
//     {
//       ueryFrom: "Asgher",
//       employeeId: "#3ACE-TECH-E16",
//       activity: "New sales lead added",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Head>
//         <title>ACE CRM - Streamline Your Business Operations</title>
//         <meta
//           name="description"
//           content="ACE CRM is a robust and scalable Customer Relationship Management system designed to streamline business operations, enhance employee management, and optimize sales, finance, and project workflows."
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Hero Section */}
//       <header className="bg-gradient-to-r from-blue-600 to-gray-800 py-20">
//         <div className="container mx-auto px-6 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Streamline Your Business with ACE CRM
//           </h1>
//           <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
//             Empower your team, optimize workflows, and grow your business with
//             our all-in-one CRM solution.
//           </p>
//           <div className="space-x-4">
//             <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
//               Get Started
//             </button>
//             <button className="bg-transparent border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
//               Request a Demo
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Features Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
//             Why Choose ACE CRM?
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
//               <div className="flex justify-center mb-6">
//                 <span className="text-4xl text-blue-600">📊</span>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                 Real-Time Analytics
//               </h3>
//               <p className="text-gray-600">
//                 Make data-driven decisions with real-time insights and reports.
//               </p>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
//               <div className="flex justify-center mb-6">
//                 <span className="text-4xl text-green-600">🤝</span>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                 Seamless Collaboration
//               </h3>
//               <p className="text-gray-600">
//                 Empower your team with tools for seamless communication and
//                 collaboration.
//               </p>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
//               <div className="flex justify-center mb-6">
//                 <span className="text-4xl text-purple-600">⚙️</span>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                 Customizable Workflows
//               </h3>
//               <p className="text-gray-600">
//                 Tailor the CRM to fit your unique business processes.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Business States Section */}
//       <ProjectChart />

//       {/* Recent Activity Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
//             Recent Activity
//           </h2>
//           <div className="bg-white p-8 rounded-lg shadow-lg">
//             <ul className="space-y-4">
//               {recentActivity.map((data, index) => (
//                 <li
//                   key={index}
//                   className="text-gray-700 flex flex-col md:flex-row justify-between gap-5 border rounded-lg p-5 bg-gray-50 "
//                 >
//                   <span className="font-semibold">{data.activity}</span>
//                   <div>
//                     <span className="text-blue-600">{data.ueryFrom}</span>{" "}
//                     <p className="text-gray-500">({data.employeeId})</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
// --------------

import Head from "next/head";
import ProjectChart from "./ProjectGraph";

export default function MainScreen() {
  const recentActivity = [
    {
      ueryFrom: "Ali",
      employeeId: "ID : 3ACE-TECH-E10",
      activity: "New sales lead added",
    },
    {
      ueryFrom: "Abid",
      employeeId: "ID : 3ACE-TECH-E11",
      activity: "New sales lead added",
    },
    {
      ueryFrom: "Asgher",
      employeeId: "ID : 3ACE-TECH-E16",
      activity: "New sales lead added",
    },
    {
      ueryFrom: "Ali",
      employeeId: "ID : 3ACE-TECH-E10",
      activity: "New sales lead added",
    },
    {
      ueryFrom: "Abid",
      employeeId: "ID : 3ACE-TECH-E11",
      activity: "New sales lead added",
    },
    {
      ueryFrom: "Asgher",
      employeeId: "ID : 3ACE-TECH-E16",
      activity: "New sales lead added",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>ACE CRM - Streamline Your Business Operations</title>
        <meta
          name="description"
          content="ACE CRM is a robust and scalable Customer Relationship Management system designed to streamline business operations, enhance employee management, and optimize sales, finance, and project workflows."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      {/* <header className="bg-gradient-to-r from-navbar to-footer py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-white font-serif mb-6">Streamline Your Business with ACE CRM</h1>
          <p className="text-subheading mb-8 max-w-2xl mx-auto">
            Empower your team, optimize workflows, and grow your business with
            our all-in-one CRM solution.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-navbar px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Get Started
            </button>
            <button className="bg-transparent border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-navbar transition duration-300">
              Request a Demo
            </button>
          </div>
        </div>
      </header> */}

      <header className="bg-gradient-to-r from-blue-600 to-gray-800 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Streamline Your Business with ACE CRM
          </h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Empower your team, optimize workflows, and grow your business with
            our all-in-one CRM solution.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              SignIn
            </button>
          </div>
        </div>
      </header>

      {/* Business States Section */}
      <ProjectChart />

      {/* Features Section */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-heading font-serif text-center mb-12">
            Why Choose ACE CRM?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
              <div className="flex justify-center mb-6">
                <span className="text-4xl text-blue-600">📊</span>
              </div>
              <h3 className="text-subheading font-semibold mb-4">
                Real-Time Analytics
              </h3>
              <p className="text-text">
                Make data-driven decisions with real-time insights and reports.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
              <div className="flex justify-center mb-6">
                <span className="text-4xl text-green-600">🤝</span>
              </div>
              <h3 className="text-subheading font-semibold mb-4">
                Seamless Collaboration
              </h3>
              <p className="text-text">
                Empower your team with tools for seamless communication and
                collaboration.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
              <div className="flex justify-center mb-6">
                <span className="text-4xl text-purple-600">⚙️</span>
              </div>
              <h3 className="text-subheading font-semibold mb-4">
                Customizable Workflows
              </h3>
              <p className="text-text">
                Tailor the CRM to fit your unique business processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Activity Section */}
      <div className="py-10 mx-auto px-6">
        <h2 className="text-heading text-center font-serif mb-12">Recent Activity</h2>
        <div className="p-8 rounded-lg shadow-lg max-h-80 overflow-y-auto scrollbar-none hover:scrollbar-block">
          <ul className="space-y-4">
            {recentActivity.slice(0, 5).map((data, index) => (
              <li
                key={index}
                className="border-b-2 rounded-lg p-5 bg-white text-text flex flex-col md:flex-row justify-between gap-5 "
              >
                <span className="font-semibold">{data.activity}</span>
                <div>
                  <span className="text-blue-600">{data.ueryFrom}</span>{" "}
                  <p className="text-gray-500">({data.employeeId})</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
