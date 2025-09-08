const Experience = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center text-white py-4">
                <div className="text-bold sm:text-2xl md:text-3xl hover:tracking-widest transition-all duration-300 origin-left cursor-pointer p-4">
                    Experience
                    <span className='text-red-500 m-1'>
                        .
                    </span>
                </div>
                
                <div className="space-y-5 md:space-y-10 grid grid-cols-6 w-full text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl px-1 py-4 gap-x-3 gap-y-7 md:px-10 md:py-20 md:gap-x-10 md:gap-y-15">
                    <div className="flex sm:items-center justify-center md:p-5">
                        <img src="/src/assets/capg.png" alt="Capgemini Logo" className="col-span-1 w-7 h-7 lg:p-4 md:w-auto md:h-auto" />
                    </div>
                    <div className="text-center col-span-5">
                        Capgemini (Sept 2024 - Present)
                        <div className="text-red-500 text-center">
                            Software Engineer
                        </div>
                        <div className="text-neutral-500 text-center">
                            Enterprise software development, frontend, backend & database management, large-scale application support, collaborating with cross-functional teams.
                        </div>
                    </div>
                    <div className="flex sm:items-center justify-center md:p-5">
                        <img src="/src/assets/suven.png" alt="Suven Logo" className="col-span-1 w-7 h-7 lg:p-4 md:w-auto md:h-auto" />
                    </div><div className="text-center col-span-5">
                        Suven Consultants Pvt. Ltd. (Oct 2022)
                        <div className="text-red-500 text-center">
                            JavaScript Intern
                        </div>
                        <div className="text-neutral-500 text-center">
                           Enhanced website interactivity with JavaScript and gained teamwork experience.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Experience;