
import Head from "next/head";
import ProjectChart from "./ProjectGraph";
import LOGO from "@/images/LOGO.jpeg";
import Image from "next/image";
import Signin from "./signin";
import ServicesPage from "./Services";
import Banner from "@/images/Banner.png";
import RoleBasedNavigation from "./RoleBaseNavigation";

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
      <div className=" w-full h-[200px] md:h-[500px]">
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
{/* role base navigation */}
<RoleBasedNavigation/>
        {/* Sign-in Form */}
        <div className="w-full md:w-1/2">
          <Signin />
        </div>
      </div>

      {/* recent activities */}
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
      <div className="container mx-auto">
        <ServicesPage />
      </div>
    </div>
  );
}
