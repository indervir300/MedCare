"use client"

import React from 'react';
import Image from 'next/image';

interface MedicalProfessionalCardProps {
    imageUrl: string;
}

const MedicalProfessionalCard: React.FC<MedicalProfessionalCardProps> = ({
    imageUrl
}) => {
    return (
        <div className="relative w-full max-w-[300px] mx-auto">
            <div className="relative w-full aspect-square">


                {/* Background Graphics */}
                <div className="absolute inset-0">
                    {/* Pulsing Accent Rings */}
                    <div className="absolute -inset-4 border-8 border-blue-500/20 rounded-full animate-pulse"></div>
                    <div className="absolute -inset-8 border-8 border-blue-500/10 rounded-full"></div>

                    {/* Rotating Circle */}
                    <div
                        className="absolute w-full h-full rounded-full border-8 border-blue-500/20 
    border-t-blue-500/70 border-r-blue-500/50  border-b-blue-500/30 border-l-blue-500/10
    animate-spin" style={{
                            animationDuration: '10s'  // Much slower rotation
                        }}
                    />


                    {/* Medical Icons */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-8 h-8 text-blue-500"
                            fill="currentColor"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zm0 20l-8-4.5V9.5l8 4.5 8-4.5V17.5L12 22zm0-11l10-5.5V7l-10 5.5L2 7V5.5L12 11z" />
                        </svg>
                    </div>

                    {/* Circular Image Container */}
                    <div className="absolute inset-0 z-10">
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-100">
                            <Image
                                src={imageUrl}
                                alt="Medical Professional"
                                fill
                                className="object-cover object-center"
                                priority
                            />
                        </div>
                    </div>

                    {/* Medical Cross Accent */}
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-8 h-8 text-blue-500"
                            fill="currentColor"
                        >
                            <path d="M13 9h5v2h-5v5h-2v-5H6V9h5V4h2v5zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                        </svg>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicalProfessionalCard;