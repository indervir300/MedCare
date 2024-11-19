import React from 'react';
import {
    FaStethoscope,
    FaHandsHelping,
    FaNotesMedical,
    FaPlusCircle,
    FaHeartbeat
} from 'react-icons/fa';
import MedicalProfessionalCard from './cards/card';

const DoctorInfo = () => {
    return (
        <div className="relative bg-gradient-to-br from-blue-50 to-white py-16 md:py-24 overflow-hidden dark:bg-gray-900">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 pointer-events-none dark:bg-gray-900">
                <div className="absolute top-2 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-950 rounded-full blur-3xl dark:opacity-50"></div>
                <div className="absolute bottom-5 left-0 w-80 h-80 bg-blue-100 dark:bg-blue-950 rounded-full blur-3xl dark:opacity-50"></div>

                {/* Abstract Geometric Shapes */}
                <div className="absolute top-1/4 left-10 w-32 h-32 bg-blue-100/30 
        transform rotate-45 rounded-lg blur-sm"></div>
                <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-blue-200/30 
        transform -rotate-45 rounded-lg blur-sm"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">


                    {/* Professional Medical Image Presentation */}
                    <MedicalProfessionalCard
                        imageUrl="/images/female_doctor4.jpeg"
                    />



                    {/* Content Section with Advanced Layout */}
                    <div className="space-y-8 m-0">
                        {/* Animated Title */}
                        <div className="relative">
                            <h2 className="text-4xl font-extrabold text-blue-900 
              leading-tight mb-4">
                                Advanced
                                <span className="block text-blue-600 
                animate-gradient-text bg-gradient-to-r 
                from-blue-600 via-purple-500 to-pink-500 
                bg-clip-text text-transparent">
                                    Healthcare Solutions
                                </span>
                            </h2>
                            <div className="w-24 h-1.5 bg-blue-500 rounded-full"></div>
                        </div>

                        {/* Detailed Description */}
                        <p className="text-gray-500 text-lg mb-6 
            relative pl-6 before:absolute before:left-0 
            before:top-2 before:w-4 before:h-4 
            before:bg-blue-500 before:rounded-full">
                            Our holistic medical approach integrates cutting-edge technology
                            with personalized care, delivering comprehensive health solutions
                            tailored to individual patient needs.
                        </p>

                        {/* Advanced Feature Grid */}
                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                {
                                    icon: <FaStethoscope className="text-blue-600 text-2xl" />,
                                    title: "Precision Diagnosis",
                                    description: "Advanced diagnostic techniques"
                                },
                                {
                                    icon: <FaHandsHelping className="text-purple-600 text-2xl" />,
                                    title: "Empathetic Care",
                                    description: "Compassionate patient support"
                                },
                                {
                                    icon: <FaHeartbeat className="text-pink-600 text-2xl" />,
                                    title: "Holistic Treatment",
                                    description: "Comprehensive health approach"
                                }
                            ].map((feature, index) => (
                                <div key={index} className="group relative p-4 
                bg-white rounded-lg shadow-md 
                transform transition-all duration-300 
                hover:-translate-y-2 hover:shadow-xl 
                border border-transparent hover:border-blue-200 dark:bg-gray-900 dark:border-blue-950">
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 
                  bg-white p-2 rounded-full shadow-md
                  group-hover:rotate-180 transition-transform dark:bg-gray-800">
                                        {feature.icon}
                                    </div>
                                    <div className="text-center pt-4">
                                        <h3 className="font-bold text-blue-900 mb-2 
                    group-hover:text-blue-600 transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-xs text-gray-500">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Call to Action with Advanced Styling */}
                        <div className="mt-8 flex items-center space-x-4">
                            <button className="flex items-center gap-2 
              bg-blue-600 text-white px-6 py-3 rounded-full 
              hover:bg-blue-700 transition-colors duration-300 
              shadow-lg hover:shadow-xl 
              transform hover:-translate-y-1 active:scale-95">
                                <FaPlusCircle />
                                Book Consultation
                            </button>
                            <a href="#" className="text-blue-600 hover:underline 
              flex items-center gap-2 group">
                                Learn More
                                <span className="transform group-hover:translate-x-1 
                transition-transform">&rarr;</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorInfo;