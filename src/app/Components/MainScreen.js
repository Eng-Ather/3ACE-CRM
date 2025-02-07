// import Head from "next/head";
// import ProjectChart from "./ProjectGraph";
// import LOGO from "@/images/LOGO.jpeg";
// import Image from "next/image";
// import Signin from "./signin";

// export default function MainScreen() {
//   const recentActivity = [
//     {
//       ueryFrom: "Ali",
//       employeeId: "ID : 3ACE-TECH-E10",
//       activity: "New sales lead added",
//     },
//     {
//       ueryFrom: "Abid",
//       employeeId: "ID : 3ACE-TECH-E11",
//       activity: "New sales lead added",
//     },
//     {
//       ueryFrom: "Asgher",
//       employeeId: "ID : 3ACE-TECH-E16",
//       activity: "New sales lead added",
//     },
//     {
//       ueryFrom: "Ali",
//       employeeId: "ID : 3ACE-TECH-E10",
//       activity: "New sales lead added",
//     },
//     {
//       ueryFrom: "Abid",
//       employeeId: "ID : 3ACE-TECH-E11",
//       activity: "New sales lead added",
//     },
//     {
//       ueryFrom: "Asgher",
//       employeeId: "ID : 3ACE-TECH-E16",
//       activity: "New sales lead added",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       <Head>
//         <title>ACE CRM - Streamline Your Business Operations</title>
//         <meta
//           name="description"
//           content="ACE CRM is a robust and scalable Customer Relationship Management system designed to streamline business operations, enhance employee management, and optimize sales, finance, and project workflows."
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Hero Section */}
//       <header className=" bg-gradient-to-r from-gray-800 to-blue-800 py-20">
//         <div className="container mx-auto px-6 text-center">

//           <h1 className=" w-full md:w-2/3 lg:w-full text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
//             Streamline Your Business with 3ACE TECHNOLOGIES
//           </h1>
//           {/* </div> */}
//           <p className="text-sm md:text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
//             Empower your team, optimize workflows, and grow your business with
//             our all-in-one CRM solution.
//           </p>
//           {/* <div className="space-x-4">
//             <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
//               SignIn
//             </button>
//           </div> */}

//         </div>
//       </header>

//       {/* Business States Section */}
//       <ProjectChart />

//       {/* Features Section */}
//       <section className="py-10">
//         <div className="container mx-auto px-6">
//           <h2 className="text-heading  text-xl md:text-4xl font-serif text-center mb-12">
//             Why Choose ACE CRM?
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
//               <div className="flex justify-center mb-6">
//                 <span className="text-4xl text-blue-600">📊</span>
//               </div>
//               <h3 className="text-subheading text-xl font-semibold mb-4">
//                 Real-Time Analytics
//               </h3>
//               <p className="text-text">
//                 Make data-driven decisions with real-time insights and reports.
//               </p>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
//               <div className="flex justify-center mb-6">
//                 <span className="text-4xl text-green-600">🤝</span>
//               </div>
//               <h3 className="text-subheading text-xl font-semibold mb-4">
//                 Seamless Collaboration
//               </h3>
//               <p className="text-text">
//                 Empower your team with tools for seamless communication and
//                 collaboration.
//               </p>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
//               <div className="flex justify-center mb-6">
//                 <span className="text-4xl text-purple-600">⚙️</span>
//               </div>
//               <h3 className="text-subheading text-xl font-semibold mb-4">
//                 Customizable Workflows
//               </h3>
//               <p className="text-text">
//                 Tailor the CRM to fit your unique business processes.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Sign-in Form */}
//       <Signin/>

//       {/* Recent Activity Section */}
//       <div className="py-10 mx-auto px-6">
//         <h2 className="text-heading text-xl md:text-4xl text-center font-serif mb-12">
//           Recent Activity
//         </h2>
//         <div className="py-8 container mx-auto px-6 rounded-lg shadow-lg max-h-80 overflow-y-auto scrollbar-none hover:scrollbar-block">
//           <ul className="space-y-4">
//             {recentActivity.slice(0, 5).map((data, index) => (
//               <li
//                 key={index}
//                 className="border-b-2 rounded-lg p-5 bg-white text-text flex flex-col md:flex-row justify-between gap-5 "
//               >
//                 <span className="font-semibold">{data.activity}</span>
//                 <div>
//                   <span className="text-blue-600">{data.ueryFrom}</span>{" "}
//                   <p className="text-gray-500">({data.employeeId})</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
// xxxxxxxxxxxxxxxxxxxxxx
// "use client";
// import Head from "next/head";
// import ProjectChart from "./ProjectGraph";
// import Image from "next/image";

// export default function MainScreen() {
//   const recentActivity = [
//     { ueryFrom: "Ali", employeeId: "ID: 3ACE-TECH-E10", activity: "New sales lead added" },
//     { ueryFrom: "Abid", employeeId: "ID: 3ACE-TECH-E11", activity: "New sales lead added" },
//     { ueryFrom: "Asgher", employeeId: "ID: 3ACE-TECH-E16", activity: "New sales lead added" },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Head>
//         <title>ACE CRM - Streamline Your Business Operations</title>
//         <meta
//           name="description"
//           content="ACE CRM is a robust and scalable Customer Relationship Management system designed to streamline business operations, enhance employee management, and optimize sales, finance, and project workflows."
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <header className="bg-gradient-to-r from-gray-800 to-blue-800 py-16 text-center">
//         <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//           Streamline Your Business with 3ACE TECHNOLOGIES
//         </h1>
//         <p className="text-lg text-gray-200 max-w-2xl mx-auto">
//           Empower your team, optimize workflows, and grow your business with our all-in-one CRM solution.
//         </p>
//       </header>

//       <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Sign-in Form */}
//         <div className="bg-white p-8 rounded-lg shadow-lg">
//           <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign In</h2>
//           <form className="space-y-4">
//             <div>
//               <label className="block text-gray-700">Email</label>
//               <input
//                 type="email"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//                 placeholder="Enter your email"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Password</label>
//               <input
//                 type="password"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//                 placeholder="Enter your password"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
//             >
//               Sign In
//             </button>
//           </form>
//         </div>

//         {/* Recent Activity */}
//         <div className="bg-white p-8 rounded-lg shadow-lg">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Recent Activity</h2>
//           <ul className="space-y-4">
//             {recentActivity.map((data, index) => (
//               <li
//                 key={index}
//                 className="border-b-2 rounded-lg p-4 bg-gray-50 text-gray-700 flex flex-col md:flex-row justify-between items-center"
//               >
//                 <span className="font-semibold">{data.activity}</span>
//                 <div className="text-sm text-gray-500 text-right">
//                   <span className="text-blue-600 font-medium">{data.ueryFrom}</span>
//                   <p>{data.employeeId}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <div className="text-center mt-6">
//             <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
//               View All
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Project Chart Section */}
//       <div className="container mx-auto px-6 py-5">
//         <ProjectChart />
//       </div>
//     </div>
//   );
// }

// xxxxxxxxxxxxxxxxxxxx
// import Head from "next/head";
// import ProjectChart from "./ProjectGraph";
// import LOGO from "@/images/LOGO.jpeg";
// import Image from "next/image";

// export default function MainScreen() {
//   const recentActivity = [
//     { ueryFrom: "Ali", employeeId: "ID : 3ACE-TECH-E10", activity: "New sales lead added" },
//     { ueryFrom: "Abid", employeeId: "ID : 3ACE-TECH-E11", activity: "New sales lead added" },
//     { ueryFrom: "Asgher", employeeId: "ID : 3ACE-TECH-E16", activity: "New sales lead added" },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Head>
//         <title>ACE CRM - Enhance Your Business</title>
//         <meta name="description" content="Optimize your workflow with ACE CRM, your all-in-one business solution." />
//       </Head>

//       {/* Hero Section */}
//       <header className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white text-center">
//         <div className="container mx-auto px-6">
//           <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Optimize Your Business with 3ACE CRM</h1>
//           <p className="text-lg opacity-90 mb-6">Manage sales, employees, and finances effortlessly.</p>
//           <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">Get Started</button>
//         </div>
//       </header>

//       {/* Business Stats Section */}
//       <div className="container mx-auto px-6 py-10">
//         <ProjectChart />
//       </div>

//       {/* Features Section */}
//       <section className="py-10 bg-white">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8">Why Choose ACE CRM?</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { icon: "📊", title: "Real-Time Analytics", desc: "Make informed decisions with powerful insights." },
//               { icon: "🤝", title: "Seamless Collaboration", desc: "Work together efficiently with smart tools." },
//               { icon: "⚙️", title: "Custom Workflows", desc: "Tailor the CRM to fit your unique needs." },
//             ].map((feature, index) => (
//               <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
//                 <span className="text-4xl mb-4 block">{feature.icon}</span>
//                 <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Recent Activity Section */}
//       <section className="py-10">
//         <div className="container mx-auto px-6">
//           <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-8">Recent Activity</h2>
//           <div className="bg-white p-6 rounded-lg shadow-lg max-h-80 overflow-y-auto">
//             <ul>
//               {recentActivity.map((data, index) => (
//                 <li key={index} className="flex justify-between border-b py-4 text-gray-700">
//                   <span>{data.activity}</span>
//                   <div className="text-right">
//                     <span className="text-blue-600 font-medium">{data.ueryFrom}</span>
//                     <p className="text-gray-500">{data.employeeId}</p>
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
// ----------------------------------------

// import Head from "next/head";
// import ProjectChart from "./ProjectGraph";
// import LOGO from "@/images/LOGO.jpeg";
// import Image from "next/image";

// export default function MainScreen() {
//   const recentActivity = [
//     {
//       ueryFrom: "Ali",
//       employeeId: "ID : 3ACE-TECH-E10",
//       activity: "New sales lead added",
//     },
//     {
//       ueryFrom: "Abid",
//       employeeId: "ID : 3ACE-TECH-E11",
//       activity: "New sales lead added",
//     },
//     {
//       ueryFrom: "Asgher",
//       employeeId: "ID : 3ACE-TECH-E16",
//       activity: "New sales lead added",
//     },
//     {
//       ueryFrom: "Ali",
//       employeeId: "ID : 3ACE-TECH-E10",
//       activity: "New sales lead added",
//     },
//     {
//       ueryFrom: "Abid",
//       employeeId: "ID : 3ACE-TECH-E11",
//       activity: "New sales lead added",
//     },
//     {
//       ueryFrom: "Asgher",
//       employeeId: "ID : 3ACE-TECH-E16",
//       activity: "New sales lead added",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       <Head>
//         <title>ACE CRM - Streamline Your Business Operations</title>
//         <meta
//           name="description"
//           content="ACE CRM is a robust and scalable Customer Relationship Management system designed to streamline business operations, enhance employee management, and optimize sales, finance, and project workflows."
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Hero Section */}
//       <header className="bg-gradient-to-r from-gray-800 to-blue-800 py-20 text-center">
//         <div className="container mx-auto px-6">
//           <h1 className="w-full md:w-2/3 lg:w-full text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
//             Streamline Your Business with 3ACE TECHNOLOGIES
//           </h1>
//           <p className="text-sm md:text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
//             Empower your team, optimize workflows, and grow your business with our all-in-one CRM solution.
//           </p>
//           <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
//             SignIn
//           </button>
//         </div>
//       </header>

//       {/* Main Content Layout */}
//       <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Left Column: Project Graph & Why ACE CRM */}
//         <div className="space-y-8">
//           <ProjectChart />
//           <section>
//             <h2 className="text-heading text-xl md:text-4xl font-serif text-center mb-6">
//               Why Choose ACE CRM?
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
//                 <div className="flex justify-center mb-6">
//                   <span className="text-4xl text-blue-600">📊</span>
//                 </div>
//                 <h3 className="text-subheading text-xl font-semibold mb-4">
//                   Real-Time Analytics
//                 </h3>
//                 <p className="text-text">
//                   Make data-driven decisions with real-time insights and reports.
//                 </p>
//               </div>
//               <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
//                 <div className="flex justify-center mb-6">
//                   <span className="text-4xl text-green-600">🤝</span>
//                 </div>
//                 <h3 className="text-subheading text-xl font-semibold mb-4">
//                   Seamless Collaboration
//                 </h3>
//                 <p className="text-text">
//                   Empower your team with tools for seamless communication and collaboration.
//                 </p>
//               </div>
//               <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
//                 <div className="flex justify-center mb-6">
//                   <span className="text-4xl text-purple-600">⚙️</span>
//                 </div>
//                 <h3 className="text-subheading text-xl font-semibold mb-4">
//                   Customizable Workflows
//                 </h3>
//                 <p className="text-text">
//                   Tailor the CRM to fit your unique business processes.
//                 </p>
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* Right Column: Recent Activity */}
//         <div className="bg-white p-6 rounded-lg shadow-lg max-h-80 overflow-y-auto">
//           <h2 className="text-heading text-xl md:text-4xl text-center font-serif mb-6">
//             Recent Activity
//           </h2>
//           <ul className="space-y-4">
//             {recentActivity.slice(0, 5).map((data, index) => (
//               <li
//                 key={index}
//                 className="border-b-2 rounded-lg p-5 bg-gray-50 text-text flex flex-col md:flex-row justify-between gap-5 "
//               >
//                 <span className="font-semibold">{data.activity}</span>
//                 <div>
//                   <span className="text-blue-600">{data.ueryFrom}</span>
//                   <p className="text-gray-500">({data.employeeId})</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

import Head from "next/head";
import ProjectChart from "./ProjectGraph";
import LOGO from "@/images/LOGO.jpeg";
import Image from "next/image";
import Signin from "./signin";
import ServicesPage from "./Services";
import Banner from "@/images/Banner.png";

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
    {/* <div className="min-h-screen bg-blue-50"> */}

      <Head>
        <title>ACE CRM - Streamline Your Business Operations</title>
        <meta
          name="description"
          content="ACE CRM is a robust and scalable Customer Relationship Management system designed to streamline business operations, enhance employee management, and optimize sales, finance, and project workflows."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}

      {/* Banner */}
      <div className=" w-full h-[200px] md:h-[500px] lg:h-[800px]">
        <Image
          src={Banner}
          alt={"banner"}
          // width={1000}
          // height={500}
          className="w-full h-full"
        />
      </div>

      <div className=" flex flex-col md:flex-row gap-2">
       
        {/* Recent Activity Section */}
        <div className=" w-full md:w-1/2 py-5 mx-auto ">
          <ProjectChart />
        </div>

         {/* Sign-in Form */}
         <div className="w-full md:w-1/2">
          <Signin />
        </div>

      </div>

      <div className=" container mx-auto">
        <h2 className="text-heading text-center md:text-start text-xl md:text-4xl font-serif p-8 ">
          Recent Activity
        </h2>
        <div className="py-8 container mx-auto px-6 ">
          <ul className="space-y-4">
            {recentActivity.slice(0, 4).map((data, index) => (
              <li
                key={index}
                className="border-b-2 rounded-lg p-4 bg-white text-text flex flex-col md:flex-row justify-between gap-5 "
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
        {/* <ServicesPage /> */}

        {/* Features Section */}
        <section className="py-10">
          <div className="container mx-auto ">
            <h2 className="text-heading text-center md:text-left text-xl md:text-4xl font-serif px-8 mb-12">
              Why Choose ACE CRM?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
                <div className="flex justify-center mb-6">
                  <span className="text-4xl text-blue-600">📊</span>
                </div>
                <h3 className="text-subheading text-xl font-semibold mb-4">
                  Real-Time Analytics
                </h3>
                <p className="text-text">
                  Make data-driven decisions with real-time insights and
                  reports.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
                <div className="flex justify-center mb-6">
                  <span className="text-4xl text-green-600">🤝</span>
                </div>
                <h3 className="text-subheading text-xl font-semibold mb-4">
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
                <h3 className="text-subheading text-xl font-semibold mb-4">
                  Customizable Workflows
                </h3>
                <p className="text-text">
                  Tailor the CRM to fit your unique business processes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
