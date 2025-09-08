const Skills = ()=>{
    return(
        <>
        <div className="flex flex-col justify-center items-center text-white py-4">
                <div className="text-bold sm:text-2xl md:text-3xl hover:tracking-widest transition-all duration-300 origin-left cursor-pointer p-4">
                    Skills
                    <span className='text-red-500 m-1'>
                        .
                    </span>
                </div>
                <div className="text-neutral-500 grid grid-cols-6 w-full text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl px-1 py-4 gap-x-3 gap-y-7 md:px-10 md:py-20 md:gap-x-10 md:gap-y-15">
                    <div className="text-center col-span-2 md:col-span-2 hover:tracking-widest transition-all duration-300 origin-left cursor-pointer">
                        Java
                    </div>
                    <div className="text-center col-span-2 md:col-span-2 hover:tracking-widest transition-all duration-300 origin-left cursor-pointer">
                        HTML
                    </div>
                    <div className="text-center col-span-2 md:col-span-2 hover:tracking-widest transition-all duration-300 origin-left cursor-pointer">
                        CSS
                    </div>
                    <div className="text-center col-span-2 md:col-span-2 hover:tracking-widest transition-all duration-300 origin-left cursor-pointer">
                        JavaScript
                    </div>
                    <div className="text-center col-span-2 md:col-span-2 hover:tracking-widest transition-all duration-300 origin-left cursor-pointer">
                        React.js
                    </div>
                    <div className="text-center col-span-2 md:col-span-2 hover:tracking-widest transition-all duration-300 origin-left cursor-pointer">
                        MySQL
                    </div>
                    <div className="text-center col-span-2 md:col-span-2 hover:tracking-widest transition-all duration-300 origin-left cursor-pointer">
                        PostgreSQL
                    </div>
                    <div className="text-center col-span-2 md:col-span-2 hover:tracking-widest transition-all duration-300 origin-left cursor-pointer">
                        TailwindCSS
                    </div>
                    <div className="text-center col-span-2 md:col-span-2 hover:tracking-widest transition-all duration-300 origin-left cursor-pointer">
                        DSA
                    </div>
                </div>
        </div>
        </>
    )
}
export default Skills;  