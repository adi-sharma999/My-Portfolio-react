const Projects = () => {
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center md:p-4 gap-4 md:gap-5">
                <div className="text-bold sm:text-2xl md:text-3xl hover:tracking-widest transition-all duration-300 origin-left cursor-pointer p-4 text-white">
                    Projects
                    <span className='text-red-500 m-1'>
                        .
                    </span>
                </div>
                <div className="space-y-10 md:space-y-0">
                    <div className="w-full flex flex-col text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl md:px-10 md:py-10 md:gap-x-10 md:gap-y-0">
                        <div className="grid md:grid-cols-6 justify-center items-center md:gap-2.5 w-full">
                            <div className="text-center md:text-right md:col-span-1">
                                Money Manager
                            </div>
                            <div className="text-center text-neutral-500 md:text-left p-2 md:p-5 md:col-span-5">
                                Developed a full-stack finance management web app using <span className="font-semibold text-neutral-400">React.js, Java, and MySQL</span> with features like user
                                authentication, income/expense tracking, and real-time data management to deliver secure and efficient personal
                                financial insights.
                            </div>
                        </div>
                        <div className="flex justify-center md:justify-end items-center">
                            <button onClick={() => window.open("https://money-manager-app999.netlify.app/login", "_blank")} className="text-red-500 text-[7.5px] px-1.5 py-0.5 md:text-xl border-1 rounded-full md:px-4 md:py-2 hover:text-white transition-all duration-300 origin-left cursor-pointer">
                                View Money-Manager
                            </button>
                        </div>
                    </div>
                    <div className="w-full flex flex-col text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl md:px-10 md:py-10 md:gap-x-10 md:gap-y-0">
                        <div className="grid md:grid-cols-6 justify-center items-center md:gap-2.5 w-full">
                            <div className="text-center md:text-right md:col-span-1">
                                Taste of India
                            </div>
                            <div className="text-center text-neutral-500 md:text-left p-2 md:p-5 md:col-span-5">
                                It is a responsive and user-friendly food delivery website that I made using <span className="font-semibold text-neutral-400">HTML, CSS, and JavaScript</span>. Additionally, it
                                incorporates cultural insights into dishes, adding a unique touch.
                            </div>
                        </div>
                        <div className="flex justify-center md:justify-end items-center">
                            <button onClick={() => window.open("https://adi-sharma999.github.io/Taste-of-India/", "_blank")} className="text-red-500 text-[7.5px] px-1.5 py-0.5 md:text-xl border-1 rounded-full md:px-4 md:py-2 hover:text-white transition-all duration-300 origin-left cursor-pointer">
                                View Taste-of-India
                            </button>
                        </div>
                    </div>
                    <div className="w-full flex flex-col text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl md:px-10 md:py-10 md:gap-x-10 md:gap-y-0">
                        <div className="grid md:grid-cols-6 justify-center items-center md:gap-2.5 w-full">
                            <div className="text-center md:text-right md:col-span-1">
                                My Portfolio
                            </div>
                            <div className="text-center text-neutral-500 md:text-left p-2 md:p-5 md:col-span-5">
                                A modern and responsive portfolio website built with <span className="font-semibold text-neutral-400">React.js and Tailwind CSS</span>, showcasing my projects, skills, and experience with a clean UI and smooth user interactions.
                            </div>
                        </div>
                        <div className="flex justify-center md:justify-end items-center">
                            <button onClick={() => window.open("https://adi-sharma999.github.io/Taste-of-India/", "_blank")} className="text-red-500 text-[7.5px] px-1.5 py-0.5 md:text-xl border-1 rounded-full md:px-4 md:py-2 hover:text-white transition-all duration-300 origin-left cursor-pointer">
                                View My-Portfolio
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Projects;