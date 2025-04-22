
'use client'

import EmployeeNavbar from "@/app/Components/EmployeNavebar";
import { useParams } from "next/navigation";
// import {useState } from "react";
// import axios from "axios";
// import AppRouts from "@/Constant/Constant";
import { useContext } from "react";
import { AuthContext } from "@/Context/context";
import UserInfoCard from "@/app/Components/UserInfoCard";

const ViewUserProfile = () => {
    const { user } = useContext(AuthContext)
    // console.log("user details :", user);

    // const { editProfile: objID } = useParams();

    return (
        <div className=" bg-gradient-to-r from-gray-900 to-blue-900">
            {/* navebar */}
            <nav className=" z-10">
                <EmployeeNavbar />
            </nav>

            <div className=" min-h-screen flex flex-col justify-evenly ">

                {/* Page Header */}
                <div className=" pb-4 px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
                        3ACE Technology
                    </h1>
                    <p className="text-lg md:text-xl text-blue-200 mt-2 font-medium">
                        User Profile
                    </p>
                </div>

                {/* User Info Card */}
                <div className="bg-white mx-auto bg-opacity-10 backdrop-blur-md rounded-xl p-8 w-full md:w-2/3  shadow-lg">
                    <h2 className="text-2xl font-bold text-white mb-6">User Info</h2>

                    <div className="W-full flex gap-x-4 ">
                        <div className=" w-1/2 flex flex-col gap-y-4  ">
                            <UserInfoCard label="Name" value={user?.name || "N/A"} />
                            <UserInfoCard label="Role" value={user?.role || "N/A"} />
                            <UserInfoCard label="Email" value={user?.email || "N/A"} />
                        </div>

                        <div className=" w-1/2 flex flex-col gap-y-4  ">
                            <UserInfoCard label="Contact No" value={user?.phoneNumber || "N/A"} />

                            {/* <UserInfoCard label="Address" value={user?.address || "N/A"} /> */}
                            <UserInfoCard
                                label="Joining Date"
                                value={
                                    user?.joiningDate
                                        ? new Date(user.joiningDate).toISOString().split("T")[0]
                                        : "N/A"
                                }
                            />

                            <UserInfoCard label="CNIC" value={user?.cnic || "N/A"} />
                            {/* <UserInfoCard label="User ID" value={user?.userId || "N/A"} /> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default ViewUserProfile;
