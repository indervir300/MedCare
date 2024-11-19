"use client"

import Link from 'next/link';
import React from 'react';

const CareInformationSection: React.FC = () => {
    const handleConsultation = () => {
        console.log('Navigating to consultation booking page');
    };

    return (
        <div className="relative py-12 bg-blue-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                    {/* Content Section */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                            Compassionate Care,
                            <span className="block text-blue-600">
                                Personalized Approach
                            </span>
                        </h2>

                        <p className="text-gray-600 text-base md:text-lg dark:text-gray-400">
                            At MedCare Hospital, we believe in treating not just the condition,
                            but the whole person. Our commitment goes beyond medical treatment
                            to providing holistic, empathetic care that heals both body and spirit.
                        </p>

                        {/* Care Highlights */}
                        <div className="space-y-4">
                            {[
                                {
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    ),
                                    text: "Personalized Patient Care"
                                },
                                {
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                        </svg>
                                    ),
                                    text: "Advanced Medical Technology"
                                },
                                {
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        </svg>
                                    ),
                                    text: "Comprehensive Healthcare Solutions"
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <div className="bg-blue-100 p-2 rounded-full text-blue-600 dark:bg-gray-800">
                                        {item.icon}
                                    </div>
                                    <span className="text-gray-700 text-sm md:text-base dark:text-gray-400">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons Section */}
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <button
                                onClick={handleConsultation}
                                className="w-full sm:w-1/2 px-4 py-3 rounded-xl 
                                bg-blue-700 text-white font-semibold 
                                hover:bg-blue-700 transition-colors duration-300 
                                flex items-center justify-center space-x-2 
                                shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                                </svg>
                                Book Consultation
                            </button>

                            <Link
                                href="/learn-more"
                                className="w-full sm:w-1/2 px-4 py-3 rounded-xl text-gray-600 font-semibold 
                                border border-gray-300 hover:bg-gray-200 transition-colors duration-300 
                                flex items-center justify-center space-x-2 
                                hover:shadow-md transform hover:-translate-y-1 dark:text-gray-400 dark:hover:bg-gray-700"
                            >
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareInformationSection;