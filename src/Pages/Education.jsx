const Education = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center text-white py-4">
                <div className="text-bold sm:text-2xl md:text-3xl hover:tracking-widest transition-all duration-300 origin-left cursor-pointer p-4">
                    Education 
                    <span className='text-red-500 m-1'>
                        .
                    </span>
                </div>
                <div className="grid grid-cols-6 w-full text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl px-1 py-4 gap-x-3 gap-y-7 md:px-10 md:py-20 md:gap-x-10 md:gap-y-15">
                    <div className="text-left col-span-3">
                        Noida Institute of Engineering and Technology, Greater Noida, Uttar Pradesh, India
                    </div>
                    <div className="text-right text-neutral-500 col-span-2">    
                        Bachelor of Technology in Computer Science and Engineering (2020 - 2024)
                    </div>
                    <div className="text-left text-neutral-500 col-span-1">    
                        8.02 GPA
                    </div>
                    <div className="text-left col-span-3">
                        Growell School, Baraut, Uttar Pradesh, India
                    </div>
                    <div className="text-right text-neutral-500 col-span-2">    
                        Senior Secondary Education (Class 12th)
                    </div>
                    <div className="text-left text-neutral-500 col-span-1">    
                        79.8%
                    </div>
                    <div className="text-left col-span-3">
                        M.J.M. Public School, Baghpat, Uttar Pradesh, India
                    </div>
                    <div className="text-right text-neutral-500 col-span-2">    
                        High School (Class 10th)
                    </div>
                    <div className="text-left text-neutral-500 col-span-1">    
                        10 CGPA
                    </div>
                </div>
            </div>
        </>
    );
}
export default Education;