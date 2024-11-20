"use client"

import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaClipboardList, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { FaCalendarCheck } from 'react-icons/fa6';

// Define the shape of the form data
interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    serviceType: string;
    appointmentDate: string;
    appointmentTime: string;
    additionalNotes: string;
}

// Define the shape of the error messages
interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    serviceType?: string;
    appointmentDate?: string;
    appointmentTime?: string;
    additionalNotes?: string;
}

export default function BookAppointment() {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        serviceType: '',
        appointmentDate: '',
        appointmentTime: '',
        additionalNotes: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const serviceOptions = [
        'Medical Consultation',
        'Dental Check-up',
        'Physical Therapy',
        'Counseling',
        'Diagnostic Test',
        'Vaccination',
        'Specialist Consultation'
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors: FormErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        const phoneRegex = /^[0-9]{10}$/;
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Invalid phone number';
        }

        if (!formData.serviceType) {
            newErrors.serviceType = 'Please select a service';
        }

        if (!formData.appointmentDate) {
            newErrors.appointmentDate = 'Appointment date is required';
        } else {
            const today = new Date().toISOString().split('T')[0];
            if (formData.appointmentDate < today) {
                newErrors.appointmentDate = 'Appointment date must be in the future';
            }
        }

        if (!formData.appointmentTime) {
            newErrors.appointmentTime = 'Appointment time is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Appointment Data:', formData);
            alert('Appointment booked successfully!');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                serviceType: '',
                appointmentDate: '',
                appointmentTime: '',
                additionalNotes: ''
            });
        }
    };


    return (
        <div className="min-h-screen dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-24">
            <div className="w-full max-w-4xl bg-white dark:bg-transparent shadow-2xl rounded-3xl overflow-hidden">
                {/* Header */}
                <div className="dark:text-white text-gray-800 p-10 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="p-4 bg-white rounded-full shadow-lg">
                            <FaCalendarCheck className="text-5xl text-blue-600" />
                        </div>
                    </div>

                    <p className="text-md text-gray-800 dark:text-blue-100 mt-5">
                        Please fill out the form below to secure your appointment.
                    </p>
                </div>

                {/* Appointment Form */}
                <div className="p-10 space-y-6">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Patient Name */}
                        <div className="col-span-full">
                            <div className="relative">
                                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold">
                                    Full Name
                                </label>
                                <div className="flex items-center">
                                    <span className="absolute left-4 text-gray-400 dark:text-gray-500">
                                        <FaUser />
                                    </span>
                                    <input
                                        type="text"
                                        name="patientName"
                                        placeholder="Enter your full name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className={`w-full pl-10 p-3.5 border-2 rounded-xl focus:outline-none focus:ring-2 focus:border-blue-500
                          ${errors.firstName
                                                ? 'border-red-500 focus:ring-red-500'
                                                : 'border-gray-300 dark:border-gray-600'
                                            }
                          dark:bg-gray-700 dark:text-gray-200`}
                                    />
                                </div>
                                {errors.firstName && (
                                    <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                                )}
                            </div>
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold">
                                Email Address
                            </label>
                            <div className="flex items-center">
                                <span className="absolute left-4 text-gray-400 dark:text-gray-500">
                                    <FaEnvelope />
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full pl-10 p-3.5 border-2 rounded-xl focus:outline-none focus:ring-2 focus:border-blue-500
                        ${errors.email
                                            ? 'border-red-500 focus:ring-red-500'
                                            : 'border-gray-300 dark:border-gray-600'
                                        }
                        dark:bg-gray-700 dark:text-gray-200`}
                                />
                            </div>
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        {/* Phone */}
                        <div className="relative">
                            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold">
                                Phone Number
                            </label>
                            <div className="flex items-center">
                                <span className="absolute left-4 text-gray-400 dark:text-gray-500">
                                    <FaPhone />
                                </span>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="(123) 456-7890"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`w-full pl-10 p-3.5 border-2 rounded-xl focus:outline-none focus:ring-2 focus:border-blue-500
                        ${errors.phone
                                            ? 'border-red-500 focus:ring-red-500'
                                            : 'border-gray-300 dark:border-gray-600'
                                        }
                        dark:bg-gray-700 dark:text-gray-200`}
                                />
                            </div>
                            {errors.phone && (
                                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                            )}
                        </div>

                        {/* Service Type */}
                        <div className="relative">
                            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold">
                                Service Type
                            </label>
                            <div className="flex items-center">
                                <span className="absolute left-4 text-gray-400 dark:text-gray-500">
                                    <FaClipboardList />
                                </span>
                                <select
                                    name="serviceType"
                                    value={formData.serviceType}
                                    onChange={handleChange}
                                    className={`w-full pl-10 p-3.5 border-2 rounded-xl focus:outline-none focus:ring-2 focus:border-blue-500
                        ${errors.serviceType
                                            ? 'border-red-500 focus:ring-red-500'
                                            : 'border-gray-300 dark:border-gray-600'
                                        }
                        dark:bg-gray-700 dark:text-gray-200`}
                                >
                                    <option value="">Select Service</option>
                                    {serviceOptions.map((service, index) => (
                                        <option key={index} value={service}>
                                            {service}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {errors.serviceType && (
                                <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>
                            )}
                        </div>

                        {/* Appointment Date */}
                        <div className="relative">
                            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold">
                                Appointment Date
                            </label>
                            <div className="flex items-center">
                                <span className="absolute left-4 text-gray-400 dark:text-gray-500">
                                    <FaCalendarAlt />
                                </span>
                                <input
                                    type="date"
                                    name="appointmentDate"
                                    value={formData.appointmentDate}
                                    onChange={handleChange}
                                    className={`w-full pl-10 p-3.5 border-2 rounded-xl focus:outline-none focus:ring-2 focus:border-blue-500
                        ${errors.appointmentDate
                                            ? 'border-red-500 focus:ring-red-500'
                                            : 'border-gray-300 dark:border-gray-600'
                                        }
                        dark:bg-gray-700 dark:text-gray-200`}
                                />
                            </div>
                            {errors.appointmentDate && (
                                <p className="text-red-500 text-sm mt-1">{errors.appointmentDate}</p>
                            )}
                        </div>

                        {/* Appointment Time */}
                        <div className="relative col-span-full">
                            <label className="block text-gray-700  dark:text-gray-300 mb-2 font-semibold">
                                Preferred Time
                            </label>
                            <div className="flex items-center">
                                <span className="absolute left-4 text-gray-400 dark:text-gray-500">
                                    <FaClock />
                                </span>
                                <input
                                    type="time"
                                    name="appointmentTime"
                                    value={formData.appointmentTime}
                                    onChange={handleChange}
                                    className={`w-full pl-10 p-3.5 border-2 rounded-xl focus:outline-none focus:ring-2 focus:border-blue-500
                        ${errors.appointmentTime
                                            ? 'border-red-500 focus:ring-red-500'
                                            : 'border-gray-300 dark:border-gray-600'
                                        }
                        dark:bg-gray-700 dark:text-gray-200`}
                                />
                            </div>
                            {errors.appointmentTime && (
                                <p className="text-red-500 text-sm mt-1">{errors.appointmentTime}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="col-span-full">
                            <button
                                type="submit"
                                className="w-full py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                            >
                                Book Appointment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );


}