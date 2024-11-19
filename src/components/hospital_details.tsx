import React from 'react';

interface HospitalInfoProps {
    patients: {
        total: number;
        trustedBy: string;
        yearOfService: number;
    };
    facilities: {
        name: string;
        description: string;
        icon: React.ReactNode;
        location: string;
        hours: string;
        contact: string;
        specialties: string[];
        additionalInfo?: string;
    }[];
}

const HospitalInformationPage: React.FC = () => {
    const hospitalInfo: HospitalInfoProps = {
        patients: {
            total: 5000,
            trustedBy: "Metropolitan Area",
            yearOfService: 25
        },
        facilities: [
            {
                name: "Emergency Room",
                description: "24/7 Critical Care",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                ),
                location: "Ground Floor, Main Building",
                hours: "Open 24/7",
                contact: "(555) 123-4567",
                specialties: ["Trauma Care", "Acute Medical Conditions", "Rapid Response"],
                additionalInfo: "Equipped with state-of-the-art life-saving equipment and staffed by board-certified emergency physicians."
            },
            {
                name: "Intensive Care",
                description: "Advanced Medical Support",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 01-4.355-4.355l-.477-2.387a2 2 0 00-.547-1.022L9.97 4.64a2 2 0 00-1.912-.713L4.268 5.2a1.462 1.462 0 00-1.233 1.62c.11.835.337 1.647.687 2.409l1.34 2.68a13.652 13.652 0 006.385 6.385l2.68 1.34a1.462 1.462 0 001.62-1.233l.35-2.789a2 2 0 00-.713-1.912z" />
                    </svg>
                ),
                location: "Second Floor, West Wing",
                hours: "24/7 Monitoring",
                contact: "(555) 987-6543",
                specialties: ["Critical Patient Care", "Life Support", "Multi-Organ Monitoring"],
                additionalInfo: "Highest level of medical care with advanced technological support and specialized medical teams."
            },
            {
                name: "Surgery Center",
                description: "State-of-the-Art Procedures",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                ),
                location: "Third Floor, Surgical Block",
                hours: "Scheduled Surgeries: 7 AM - 7 PM",
                contact: "(555) 246-8135",
                specialties: ["Minimally Invasive Surgery", "Orthopedic Procedures", "Cardiovascular Surgery"],
                additionalInfo: "Cutting-edge surgical suites with advanced robotic surgical systems and experienced surgical teams."
            },
            {
                name: "Diagnostic Center",
                description: "Comprehensive Testing",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0  =3.138-3.138z" />
                    </svg>
                ),
                location: "First Floor, Diagnostic Wing",
                hours: "8 AM - 6 PM, Mon-Sat",
                contact: "(555) 369-2580",
                specialties: ["MRI", "CT Scan", "Ultrasound", "Blood Work"],
                additionalInfo: "Comprehensive diagnostic services with latest imaging technologies and rapid reporting."
            },
        ],
    };


    return (
        <div className="flex items-center justify-center px-4 py-12 dark:bg-gray-900">
            <div className="w-full max-w-6xl mx-auto">

                {/* Content Container */}
                <div className="grid md:grid-cols-1 gap-8">

                    {/* Facilities Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-4 py-8">
                        {hospitalInfo.facilities.map((facility, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-xl
                            shadow-lg transform transition-all duration-200 hover:shadow-xl hover:scale-[1.01] p-6 dark:shadow-xl">
                                {/* Decorative Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 dark:opacity-95 opacity-30 -z-10"></div>

                                {/* Gradient Top Accent */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500 dark:from-blue-900 dark:to-indigo-800"></div>

                                {/* Facility Header */}
                                <div className="flex items-center mb-4">
                                    <div className="w-14 h-14 rounded-full bg-blue-100/70 border border-blue-200 flex items-center justify-center mr-4 shadow-md dark:bg-gray-800 dark:border-blue-400">
                                        {facility.icon}
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                                            {facility.name}
                                        </h3>
                                    </div>
                                </div>



                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-400  
                                     text-sm leading-relaxed opacity-90 relative pl-4 before:absolute before:left-0 before:top-1 before:w-2 before:h-2 before:bg-blue-400 before:rounded-full">
                                    {facility.description}
                                </p>

                                {/* Additional Details */}
                                <div className="mt-4 bg-blue-50/50 rounded-lg p-3 border border-blue-100 shadow-sm dark:border-blue-300 dark:bg-gray-800">
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Location</span>
                                        </div>
                                        <p className="text-xs text-gray-700 dark:text-gray-500">{facility.location}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2 mt-2">
                                        <div className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Hours</span>
                                        </div>
                                        <p className="text-xs text-gray-700 dark:text-gray-500">{facility.hours}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2 mt-2">
                                        <div className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Contact</span>
                                        </div>
                                        <p className="text-xs text-gray-700 dark:text-gray-500">{facility.contact}</p>
                                    </div>

                                    <div className="mt-2">
                                        <div className="flex items-center space-x-2 mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438z" />
                                            </svg>
                                            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Specialties</span>
                                        </div>
                                        <div className="flex flex-wrap gap-1">
                                            {facility.specialties.map((specialty, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-blue-100 text-blue-800 text-[10px] px-2 py-0.5 rounded-full dark:bg-gray-600 dark:text-gray-300"
                                                >
                                                    {specialty}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                </div>


                                {/* Footer Section */}
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-xs text-gray-500 uppercase tracking-wider font-medium dark:text-gray-400">
                                        Services
                                    </span>
                                    <div className="text-blue-500 bg-blue-50 rounded-full p-2 transition-colors hover:bg-blue-100 dark:bg-gray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Subtle Decorative Element */}
                                <div className="absolute bottom-0 right-0 
                                    w-16 h-16 
                                    bg-blue-100/30 
                                    rounded-tl-full 
                                    -z-10 dark:bg-gray-800"
                                ></div>
                            </div>
                        ))}
                    </div>



                </div>
            </div>
        </div>
    );
};

export default HospitalInformationPage;