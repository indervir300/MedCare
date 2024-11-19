"use client"
import React, { useState } from 'react';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    console.log('Subscribing with email:', email);
    // Reset form or show confirmation
    setEmail('');
  };

  return (
    <section className="bg-blue-50 py-16 px-4 dark:bg-gray-900 relative overflow-hidden">
      {/* Graphic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent bg-grid-slate-100/[0.03] [mask-image:linear-gradient(0deg,transparent,black)]"></div>
        
        {/* Floating Lines */}
        <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-blue-200/30 to-transparent transform -rotate-6"></div>
        <div className="absolute bottom-1/4 right-0 w-full h-0.5 bg-gradient-to-l from-purple-200/30 to-transparent transform rotate-6"></div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side: Descriptive Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-blue-900 dark:text-blue-100 flex items-center">
            <span className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-4">
              <FaPaperPlane className="text-blue-600 dark:text-blue-300 animate-bounce" />
            </span>
            Stay Informed, Stay Healthy
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Join our newsletter to receive cutting-edge health insights,
            expert medical advice, and exclusive wellness strategies
            curated by our professional medical team.
          </p>
          
          {/* Feature Highlights */}
          <div className="space-y-3 pl-4 border-l-4 border-blue-500">
            <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
              <span className="mr-2 text-blue-500">✓</span>
              Personalized Health Recommendations
            </div>
            <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
              <span className="mr-2 text-blue-500">✓</span>
              Expert-Curated Content
            </div>
          </div>
        </div>

        {/* Right Side: Subscription Form */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            aria-label="Newsletter Subscription"
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400 dark:text-gray-500" />
              </div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg 
                bg-white dark:bg-gray-700 
                focus:outline-none focus:ring-2 focus:ring-blue-500 
                dark:text-white transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg 
              font-semibold hover:bg-blue-700 transition-colors 
              duration-300 ease-in-out shadow-md 
              focus:outline-none focus:ring-2 focus:ring-blue-500 
              flex items-center justify-center group"
            >
              <FaPaperPlane className="mr-2 group-hover:animate-send" />
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

