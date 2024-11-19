export default function Heading() {
    return (
        <>
            <div className="text-center mb-12 space-y-4 pt-16 pr-1 pl-1" >
                <h1 className="text-5xl md:text-6xl font-light tracking-tight 
                        text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600
                        relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-3/4 after:h-[3px] after:bg-gradient-to-r after:from-blue-500 
                        after:to-indigo-600 after:opacity-70 hover:tracking-normal transition-all duration-300 shadow-sm hover:drop-shadow-md">
                    <span className="text-gray-600 dark:text-gray-500">MedCare</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Hospital</span>
                </h1>
                <br />
                <div className="relative inline-block">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-300 rounded-xl opacity-30 blur-lg dark:from-blue-700 dark:to-purple-700 dark:opacity-20"></div>
                    <p className="relative text-xl md:text-2xl font-thin text-gray-700 dark:text-gray-300
                     max-w-3xl mx-auto leading-relaxed tracking-wide px-4 py-2 rounded-xl">
                        Delivering <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">compassionate care</span> with cutting-edge medical technology
                    </p>
                </div>
            </div >
        </>
    );
}