const LogoLetters = [
    {
        letter: 'S',
        id: 's-svg',
        gradientStops: [
            { offset: '0%', color: '#4F46E5' },
            { offset: '100%', color: '#9333EA' }
        ],
        buttonClass: 'bg-indigo-500 hover:bg-indigo-600',
        stroke: 'white',
        strokeWidth: 4
    },
    {
        letter: 'R',
        id: 'r-svg',
        gradientStops: [
            { offset: '0%', color: '#4F46E5' },
            { offset: '100%', color: '#9333EA' }
        ],
        buttonClass: 'bg-purple-500 hover:bg-purple-600',
        stroke: 'white',
        strokeWidth: 0
    }
];

export default function SrLogo() {

    const downloadSVG = () => {
        const sSvgElement = document.getElementById('s-svg');
        const rSvgElement = document.getElementById('r-svg');

        if (!sSvgElement || !rSvgElement) {
            console.error('SVG elements not found');
            return; // Exit the function if either SVG element is not found
        }

        // Create a new SVG document to wrap both SVG elements
        const combinedSvg = `
            <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 300 300">
            ${rSvgElement.outerHTML}
                ${sSvgElement.outerHTML}
            </svg>
        `;

        const blob = new Blob([combinedSvg], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'logo.svg';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
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
                            zIndex: logo.letter === 'S' ? 2 : 1,
                        }}
                    >

                        
                        <svg
                            id={logo.id}
                            width="400"
                            height="400"
                            viewBox="0 0 300 300"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <text
                                x="150"
                                y="150"
                                fontSize="150"
                                fontWeight="300"
                                fill={`url(#gradient-${logo.letter.toLowerCase()})`}
                                stroke={logo.stroke}
                                strokeWidth={logo.strokeWidth}
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

                        
                    </div>
                ))}
            </div>
            <button onClick={downloadSVG} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                Download SVG
            </button>
        </div>
    );
}
