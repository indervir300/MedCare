"use client";
import { useState } from 'react';

const LogoLetters = [
    {
        letter: 'S',
        id: 's-svg',
        gradientStops: [
            { offset: '0%', color: '#4F46E5' },
            { offset: '100%', color: '#9333EA' }
        ],
        buttonClass: 'bg-indigo-500 hover:bg-indigo-600',
        stroke: 'white', // Change stroke color to white
        strokeWidth: 4 // Increased stroke width for better visibility at larger size
    },
    {
        letter: 'R',
        id: 'r-svg',
        gradientStops: [
            { offset: '0%', color: '#4F46E5' },
            { offset: '100%', color: '#9333EA' }
        ],
        buttonClass: 'bg-purple-500 hover:bg-purple-600'
    }
];

export default function SrLogo() {
    const downloadSVG = (type: string) => {
        const svgElement = document.querySelector(`#${type}-svg`);
        const svgString = new XMLSerializer().serializeToString(svgElement);
        const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${type}_logo.svg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="flex items-center justify-center min-h-screen relative">
            <div className="absolute">
                {LogoLetters.map((logo) => (
                    <div
                        key={logo.id}
                        className="flex flex-col items-center"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: logo.letter === 'S' ? 2 : 1, // Set higher zIndex for "S"
                        }}
                    >
                        <svg
                            id={logo.id}
                            width="300"  // Increased width for larger size
                            height="300" // Increased height for larger size
                            viewBox="0 0 300 300" // Adjust viewBox accordingly
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <text
                                x="150" // Center text horizontally in the larger SVG
                                y="150" // Center text vertically in the larger SVG
                                fontSize="150" // Increase font size for larger text
                                fontWeight="300"
                                fill={`url(#gradient-${logo.letter.toLowerCase()})`}
                                stroke={logo.letter === 'S' ? logo.stroke : 'none'} // Apply stroke color conditionally
                                strokeWidth={logo.letter === 'S' ? logo.strokeWidth : 0} // Apply stroke width conditionally
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontFamily="'Poppins', sans-serif"
                            >
                                {logo.letter}
                            </text>

                            <defs>
                                <linearGradient
                                    id={`gradient-${logo.letter.toLowerCase()}`}
                                    x1="0%" y1="0%" x2="100%" y2="100%"
                                >
                                    {logo.gradientStops.map((stop, index) => (
                                        <stop
                                            key={index}
                                            offset={stop.offset}
                                            style={{ stopColor: stop.color, stopOpacity: 1 }}
                                        />
                                    ))}
                                </linearGradient>
                            </defs>
                        </svg>

                        <button
                            onClick={() => downloadSVG(logo.letter.toLowerCase())}
                            className={`px-4 py-2 text-white rounded transition mt-4 ${logo.buttonClass}`}
                        >
                            Download {logo.letter}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
