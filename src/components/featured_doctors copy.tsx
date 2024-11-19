"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Doctor {
    name: string;
    specialty: string;
    image: string;
    bio: string;
}

const FeaturedDoctors: React.FC = () => {
    const [activeDoctor, setActiveDoctor] = useState(0);

    const doctors: Doctor[] = [
        {
            name: 'Dr. Emily Johnson',
            specialty: 'Cardiology',
            image: '/images/female_doctor.jpeg',
            bio: 'Leading expert in heart health with 15 years of experience'
        },
        {
            name: 'Dr. Sarah Williams',
            specialty: 'Pediatrics',
            image: '/images/male_doctor2.jpeg',
            bio: 'Compassionate child healthcare specialist'
        },
        {
            name: 'Dr. Michael Chen',
            specialty: 'Neurology',
            image: '/images/female_doctor5.jpeg',
            bio: 'Specialized in advanced neurological treatments'
        },
        {
            name: 'Dr. Auth',
            specialty: 'Pediatrics',
            image: '/images/male_doctor3.jpeg',
            bio: 'Compassionate child healthcare specialist'
        },
    ];

    return (
        <section className="pt-16 pb-16 bg-blue-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-blue-900 mb-16 tracking-tight">
                    Our Leading Specialists
                </h2>

                {/* Desktop Layout */}
                <div className={`
                    hidden md:grid ${doctors.length <= 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'} gap-8 place-items-center`}>
                    {doctors.map((doctor, index) => {
                        const shouldStagger = doctors.length > 3;
                        const staggerClass = shouldStagger
                            ? `${index % 4 === 0 || index % 4 === 3 ? 'md:mt-10' : 'md:-mt-10'}
                                ${doctors.length % 4 !== 0 && index >= doctors.length - (doctors.length % 4) ? 'md:mt-0' : ''}
                            ` : `${index % 3 === 0 ? 'md:mt-10' : 'md:-mt-10'}`;

                        return (
                            <div
                                key={index}
                                className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300
                                    w-full max-w-sm ${staggerClass} hover:scale-105 border-l-4 border-blue-500`}>
                                <div className="relative p-6 flex flex-col items-center">
                                    <div className="absolute top-4 right-4 bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
                                        <span className="text-sm font-bold">{doctor.specialty.charAt(0)}</span>
                                    </div>

                                    <div className="mb-6 relative">
                                        <Image
                                            src={doctor.image}
                                            alt={doctor.name}
                                            width={200}
                                            height={200}
                                            className="rounded-full border-4 border-blue-100 object-cover shadow-mdw-48 h-48" />
                                        <div className="
                                            absolute bottom-0 right-0 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs">
                                            ✓
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                                            {doctor.name}
                                        </h3>
                                        <p className="text-blue-600 font-medium mb-3">
                                            {doctor.specialty}
                                        </p>
                                        <p className="text-gray-600 text-center mb-6 line-clamp-3">
                                            {doctor.bio}
                                        </p>
                                    </div>

                                    <Link
                                        href={`/doctors/${doctor.name.toLowerCase().replace(' ', '-')}`}
                                        className="
                                            px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
                                        View Profile
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile Carousel Design */}
                <div className="block md:hidden">
                    <div className="relative w-full overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{
                                transform: `translateX(-${activeDoctor * 100}%)`
                            }}>
                            {doctors.map((doctor, index) => (
                                <div
                                    key={index}
                                    className="w-full flex-shrink-0 px-4">
                                    <div className="bg-blue-50 dark:bg-gray-800 rounded-xl mb-2 shadow-sm overflow-hidden transform transition-all hover:scale-105 duration-300 border-l-4 border-blue-500">
                                        <div className="relative p-6 flex flex-col items-center">
                                            <div className="absolute top-4 right-4 bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
                                                <span className="text-sm font-bold">{doctor.specialty.charAt(0)}</span>
                                            </div>

                                            <div className="mb-6 relative">
                                                <Image
                                                    src={doctor.image} alt={doctor.name} width={200} height={200}
                                                    className="rounded-full border-4 border-blue-100 object-cover shadow-md w-48 h-48" />
                                                <div className="absolute bottom-0 right-0 bg-green-500 text-white rounded-full w-8 
                                                    h-8 flex items-center justify-center text-xs">
                                                    ✓
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                                                    {doctor.name}
                                                </h3>
                                                <p className="text-blue-600 font-medium mb-3">
                                                    {doctor.specialty}
                                                </p>
                                                <p className="text-gray-600 text-center mb-6 line-clamp-3">
                                                    {doctor.bio}
                                                </p>
                                            </div>

                                            <Link
                                                href={`/doctors/${doctor.name.toLowerCase().replace(' ', '-')}`}
                                                className="px-6 py-2 bg-blue-500 text-white rounded-full 
                                                    hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 
                                                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
                                                View Profile
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Navigation Dots */}
                    <div className="flex justify-center mt-4 space-x-2">
                        {doctors.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveDoctor(index)}
                                className={`w-3 h-3 rounded-full ${activeDoctor === index ? 'bg-blue-600' : 'bg-blue-200'}
                                `}
                            />
                        ))}
                    </div>

                    {/* Mobile Navigation Buttons */}
                    <div className="flex justify-between mt-4 px-4">
                        <button
                            onClick={() => setActiveDoctor(prev => prev > 0 ? prev - 1 : doctors.length - 1)}
                            className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => setActiveDoctor(prev => prev < doctors.length - 1 ? prev + 1 : 0)}
                            className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full">

                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 rotate-180"  // Adds 180-degree rotation
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>

                        </button>
                    </div>
                </div>

                {/* Existing "View All Specialists" button */}
                {doctors.length > 4 && (
                    <div className="text-center mt-12">
                        <Link
                            href="/doctors"
                            className="
                                px-8 py- 3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 text-lg">
                            View All Specialists
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FeaturedDoctors;