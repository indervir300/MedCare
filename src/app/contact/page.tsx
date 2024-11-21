"use client";

import React, { useState, FormEvent, ChangeEvent, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaPhone, FaEnvelope, FaHeartbeat, FaHandHoldingMedical } from 'react-icons/fa';

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitted(true);
            // Reset form after 3 seconds
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            }, 3000);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br bg-blue-50 pr-1 pl-1 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center pt-24 pb-20 relative overflow-hidden">
            {/* Flex Grid Layout: Left Section and Right Section */}
            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2">

{/* Left Section: Professional Section */}
<div className="relative overflow-hidden p-12 px-2 sm:px-12 flex flex-col justify-center rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-indigo-950 scale-95">
    {/* Animated Gradient Background */}
    <div 
        className="absolute inset-0 animate-gradient-x opacity-50"
        style={{
            backgroundImage: 'linear-gradient(45deg, #6366f1, #8b5cf6, #3b82f6, #10b981)',
            backgroundSize: '400% 400%',
            filter: 'blur(100px)',
            animation: 'gradient-animation 15s ease infinite'
        }}
    />

    {/* Floating Decorative Elements */}
    <div className="absolute top-0 right-0 opacity-30 dark:opacity-20">
        <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path 
                fill="#6366f1" 
                d="M50.2,-68.9C64.4,-62.4,75.3,-48.5,81.9,-33.1C88.5,-17.7,90.8,-0.9,87.4,14.1C84,29.1,74.9,42.4,63.5,52.3C52.1,62.2,38.4,68.7,23.5,75.1C8.6,81.5,-7.5,87.8,-22.8,84.5C-38.1,81.2,-52.6,68.3,-62.5,54.1C-72.4,39.9,-77.6,24.4,-79.1,8.4C-80.6,-7.6,-78.3,-23.2,-70.6,-35.4C-62.9,-47.6,-50,-56.3,-37.1,-64.1C-24.2,-71.9,-12.1,-78.8,2.4,-82.7C16.9,-86.6,33.8,-87.5,50.2,-68.9Z" 
                transform="translate(100 100)" 
            />
        </svg>
    </div>

    {/* Content Layer */}
    <div className="relative z-10 text-gray-700 dark:text-[#f5f5f5] space-y-6">
        {/* Animated Title */}
        <h2 className="text-4xl font-extrabold mb-4 flex items-center gap-4 animate-pulse-soft">
            <FaHeartbeat className="text-cyan-500 animate-bounce-slow" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                MedCare
            </span>
        </h2>

        {/* Animated Description */}
        <p className="text-gray-600 dark:text-indigo-100 mb-6 text-lg leading-relaxed tracking-wide">
            Your health journey matters to us. Whether you have medical questions, need support,
            or want to schedule a consultation, our compassionate team is here to listen and provide personalized guidance.
        </p>

        {/* Enhanced Contact Methods */}
        <div className="space-y-4">
            {[{
                icon: <FaPhone />,
                text: '+1 (555) 123-4567',
                colorClass: 'text-indigo-600',
                hoverEffect: 'hover:bg-indigo-100 dark:hover:bg-indigo-900'
            }, {
                icon: <FaEnvelope />,
                text: 'contact@medcare.com',
                colorClass: 'text-purple-600',
                hoverEffect: 'hover:bg-purple-100 dark:hover:bg-purple-900'
            }].map((contact, index) => (
                <div
                    key={index}
                    className={`flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-all duration-300 group ${contact.hoverEffect}`}
                >
                    <div className={`p-3 rounded-full ${contact.colorClass} bg-opacity-10 group-hover:rotate-6 transition-transform`}>
                        <span className={`text-xl ${contact.colorClass}`}>
                            {contact.icon}
                        </span>
                    </div>
                    <span className="text-gray-700 dark:text-indigo-100 group-hover:text-opacity-80 transition-all">
                        {contact.text}
                    </span>
                </div>
            ))}
        </div>

        {/* Call to Action Button */}
        <div className="mt-8">
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-3">
                <FaHandHoldingMedical />
                Schedule Consultation
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    </div>
</div>




                {/* Right Section: Contact Form */}
                <div className="p-12 px-2 sm:px-12 relative rounded-2xl">
    {/* Contact Form Section */}
    {!isSubmitted ? (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
        >
            <div className="text-center mb-8">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                    Get in Touch
                </h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    We'd love to hear from you. Fill out the form below.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {[{
                    name: 'name',
                    label: 'Full Name',
                    type: 'text',
                    placeholder: '******',
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                    )
                }, {
                    name: 'email',
                    label: 'Email Address',
                    type: 'email',
                    placeholder: 'you@example.com',
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                    )
                }, {
                    name: 'phone',
                    label: 'Phone Number',
                    type: 'tel',
                    placeholder: '1234567890',
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                    )
                }].map((field) => (
                    <div key={field.name} className="relative">
                        <label
                            htmlFor={field.name}
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                            {field.label}
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                {field.icon}
                            </div>
                            <input
                                type={field.type}
                                name={field.name}
                                id={field.name}
                                placeholder={field.placeholder}
                                required={field.name !== 'phone'}
                                value={formData[field.name as keyof FormData]}
                                onChange={handleChange}
                                className="w-full pl-10 px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                    Your Message
                </label>
                <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 resize-none"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center space-x-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
                <span>Send Message</span>
            </button>
        </form>
    ) : (
        <div className="text-center">
            <div className="flex justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            </div>
            <h3 className="text-3xl font-bold text-indigo-600">Thank You!</h3>
            <p className="mt-4 text-gray-700 dark:text-gray-300">Your message has been sent successfully. We'll get back to you soon!</p>
        </div>
    )}
</div>




            </div>
        </div>
    );
};

export default Contact;
