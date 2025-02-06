

"use client";

import React from "react";
import Image from "next/image";

const ServiceCard = ({ title, description, imgSrc }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
                <Image
                    src={imgSrc}
                    alt={title}
                    width={1000}
                    height={500}
                    className="object-cover w-full h-64"
                />
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-bold text-red-900 mb-4">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

const ServicesPage = () => {
    return (
        <div>

            {/* Services Description */}
            <div className="py-10 w-full mx-auto px-4 md:px-10">
                <h2 className="text-3xl font-bold text-center text-red-900 mb-8">
                    Our Expertise at Bemac Global Services
                </h2>
                <p className="text-center text-lg text-gray-700 mb-12">
                    At Bemac Global Services, we offer comprehensive solutions tailored to your needs.
                    Our team of experts provides exceptional services across multiple domains including recruitment, training, education, and more.
                </p>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServiceCard
                        title="Manpower Recruitment & Training"
                        description="We provide top-tier recruitment services, helping businesses find the best talent. Our recruitment solutions are designed to cater to a wide range of industries and job levels."
                        imgSrc="https://i.pinimg.com/1200x/ab/0d/af/ab0dafc18a9d5114434623141eff96ce.jpg"
                    />
                    <ServiceCard
                        title="Credential Evaluation"
                        description="We provide a comprehensive credential evaluation service to assess and verify academic and professional qualifications, ensuring global recognition."
                        imgSrc="https://lh7-rt.googleusercontent.com/docsz/AD_4nXfDg9bgoyDnM5useDBXAi6si_r3bakajC2E9AW7hdM7HGoHQijf88EWW_FFGgm66Kcrbs2aC_41QWKIch0gmaqbCmH9Fx6WBtRPm4DXkQe0hhhrAzMwXy2eN3pgvCv6k-jb8vlB-5Ghx4F5id0wODLlOKZP?key=rIivelhjQuTO-3ukXd3_mw"
                    />
                    <ServiceCard
                        title="International Education & Admissions"
                        description="We offer a wide range of educational services to help individuals and organizations stay ahead. Our educational programs are tailored to provide the best learning experience."
                        imgSrc="https://pathwaycentres.oxfordinternational.com/wp-content/uploads/2024/02/DSC00444-scaled.jpg"
                    />
                    <ServiceCard
                        title="Banking, Finance & Investment"
                        description="Our investment services help businesses make smart decisions in various sectors. We provide insights and strategies to maximize your returns and secure a stable future."
                        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLf_WLANhbUwj71yWj5JkwtgYPgutlmSdXg&s"
                    />
                    <ServiceCard
                        title="E-Commerce"
                        description="We specialize in helping businesses establish and grow their e-commerce presence. From website design to sales strategies, our team ensures your business thrives online."
                        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBQ3gBV8dXKfly11V5CNmZy9TNpIkRWD8zuQ&s"
                    />
                    <ServiceCard
                        title="Global Contracting"
                        description="We provide comprehensive global contracting solutions, ensuring seamless international agreements, compliance, and efficient project execution."
                        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGiChYOnk585WU7Gp6W361QTWwPA_8G0QNkg&s"
                    />

                    {/* <ServiceCard
                        title="International Volunteer Placement"
                        description="We connect passionate volunteers with meaningful opportunities worldwide, helping them make a positive impact in communities across the globe."
                        imgSrc="https://imageio.forbes.com/specials-images/imageserve/65ad49201b8a4682439df59f/Happy-group-of-volunteer-people-showing-importance-of-volunteering-/960x0.jpg?format=jpg&width=960"
                    />

                    <ServiceCard
                        title="Immigration Services"
                        description="We offer expert immigration services, assisting individuals and businesses with visa applications, work permits, residency, and citizenship processes."
                        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg65g84xtBuNjEa8v2qE0XrJZ0DvqKmYiESg&s"
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
