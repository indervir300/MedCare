"use client"

import '../app/globals.css';
import React, { useState } from 'react';
import { FaUser, FaLock, FaGoogle, FaFacebook } from 'react-icons/fa';
import Head from 'next/head';

import { motion } from 'framer-motion';
import { FaHeartPulse } from 'react-icons/fa6';
import Link from 'next/link';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate login logic
        setTimeout(() => setLoading(false), 2000);
    };

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
            <Head>
                <title>Login</title>
            </Head>


            {/* Top Right Geometric Shapes */}
            <div className="absolute top-0 right-0  md:w-1/2 h-1/2">
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 500 300"
                    className="md:opacity-100"
                >
                    <circle
                        cx="400"
                        cy="50"
                        r="100"
                        fill="rgba(99, 102, 241, 0.05)"
                        className="transform md:scale-100 origin-top-right"
                    />

                </svg>
            </div>


            {/* Bottom Left Geometric Shapes */}
            <div className="absolute bottom-0 left-0  md:w-2/4 h-2/4">
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 500 300"
                    preserveAspectRatio="xMidYMid meet"
                    className="transform origin-bottom-left"
                >
                    <circle
                        cx="100"
                        cy="250"  // Adjusted for bottom placement
                        r="80"
                        fill="rgba(99, 102, 241, 0.05)"
                        className="animate-pulse"
                    />
                    <rect
                        x="100"
                        y="180"  // Adjusted for bottom placement
                        width="120"
                        height="120"
                        fill="rgba(99, 102, 241, 0.03)"
                        transform="rotate(-15 160 240)"  // Adjusted rotation origin
                    />
                </svg>
            </div>


            <div className="w-full max-w-md mx-auto bg-transparent shadow-md rounded-xl overflow-hidden relative z-10">
                <div className="p-8">

                    {/* Heading */}
                    <div
                        className="flex items-center justify-center space-x-4 select-none mb-10"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Interactive Pulsing Heart Icon */}
                        <motion.div
                            animate={{
                                scale: isHovered ? [1, 1.3, 1] : [1, 1.2, 1],
                                rotate: isHovered ? [0, 20, -20, 0] : 0,
                            }}
                            transition={{
                                duration: isHovered ? 0.5 : 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            whileHover={{
                                scale: 1.2,
                                transition: { duration: 0.2 }
                            }}
                            className="cursor-pointer"
                        >
                            <FaHeartPulse
                                className={`text-4xl ${isHovered
                                    ? 'text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]'
                                    : 'text-indigo-500'
                                    } transition-all duration-300`}
                            />
                        </motion.div>

                        {/* Animated Text with Gradient */}
                        <motion.h2
                            className="text-4xl font-bold text-center flex bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            MedCare
                        </motion.h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email Input */}
                        <div className="relative">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                                placeholder="Email address"
                                required
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaUser className="text-gray-400" />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                                placeholder="Password"
                                required
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaLock className="text-gray-400" />
                            </div>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>
                            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
                                Forgot password?
                            </a>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className={`w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={loading}
                        >
                            {loading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>

                    {/* Social Login */}
                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        {/* Social Login Section */}
                        <div className="mt-4 space-y-2">
                            <div className="flex items-center justify-center space-x-3">
                                {/* Google Login Button */}
                                <button className="group relative inline-flex items-center justify-center 
            px-4 py-2 overflow-hidden font-medium transition duration-300 
            ease-out rounded-full shadow-sm hover:shadow-md
            bg-white border border-red-500 
            hover:bg-red-500 hover:text-white transform hover:scale-105">
                                    <span className="absolute right-1 flex items-center justify-center 
                w-8 h-8 rounded-full bg-red-500 
                group-hover:w-full group-hover:rounded-none 
                duration-300 ease-in-out">
                                        <FaGoogle className="text-white text-sm" />
                                    </span>
                                    <span className="relative mr-6 text-sm text-red-500 group-hover:opacity-0 transition-opacity">
                                        Google
                                    </span>
                                </button>

                                {/* Facebook Login Button */}
                                <button className="group relative inline-flex items-center justify-center 
            px-4 py-2 overflow-hidden font-medium transition duration-300 
            ease-out rounded-full shadow-sm hover:shadow-md
            bg-white border border-blue-600 
            hover:bg-blue-600 hover:text-white transform hover:scale-105">
                                    <span className="absolute right-1 flex items-center justify-center 
                w-8 h-8 rounded-full bg-blue-600 
                group-hover:w-full group-hover:rounded-none 
                duration-300 ease-in-out">
                                        <FaFacebook className="text-white text-sm" />
                                    </span>
                                    <span className="relative mr-6 text-sm text-blue-600 group-hover:opacity-0 transition-opacity">
                                        Facebook
                                    </span>
                                </button>
                            </div>
                            <br />
                        </div>


                    </div>

                    {/* Sign Up Link */}
                    <p className="mt-6 text-center text-sm text-gray-600">
                        Do not have an account?{' '}
                        <Link
                            href="/signup"
                            className="font-medium text-indigo-600 transition duration-300 ease-in-out 
                   hover:text-indigo-800 hover:underline 
                   bg-indigo-100 hover:bg-indigo-200 
                   rounded-md px-2 py-1 shadow-sm">
                            Sign up
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    );
}