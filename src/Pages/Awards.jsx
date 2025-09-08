const Awards = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center text-white py-7.5">
                <div className="text-center text-bold sm:text-2xl md:text-3xl hover:tracking-widest transition-all duration-300 origin-left cursor-pointer p-4">
                    Achievements
                    <span className='text-red-500 m-1'>
                        .
                    </span>
                </div>
                <div className="grid grid-cols-10 w-full text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl px-1 py-4 gap-x-3 gap-y-7 md:px-10 md:py-20 md:gap-x-10 md:gap-y-15">
                    <div className="col-span-3 cursor-pointer">
                        <img src="/src/img/leetcode.png" alt="Leetcode" onClick={() => window.open("https://leetcode.com/u/adi_sharma0/")} />
                    </div>
                    <div className="flex flex-col col-span-7">
                        <div className="text-center">
                            Solved 700+ DSA problems on Leetcode
                            <span className='text-red-500 m-1'>
                                .
                            </span>
                        </div>
                        <div className="text-center text-neutral-500">
                            My commitment to problem-solving is evident in my achievement of solving more than 700 LeetCode questions, showcasing my strong coding skills in Java.
                        </div>
                    </div>
                    <div className="col-span-3 cursor-pointer">
                        <img src="/src/img/codechef.png" alt="Codechef" onClick={() => window.open("https://www.codechef.com/users/adi_sharma999")} />
                    </div>
                    <div className="flex flex-col col-span-7">
                        <div className="text-center">
                            Solved 130+ coding challanges on Codechef
                            <span className='text-red-500 m-1'>
                                .
                            </span>
                        </div>
                        <div className="text-center text-neutral-500">
                            With a knack for algorithmic problem-solving and a love for challenges, I continue to push the boundaries of my coding skills.
                        </div>
                    </div>
                    <div className="col-span-3 cursor-pointer">
                        <img src="/src/img/hackkerank.png" alt="Hackkerank" onClick={() => window.open("https://www.hackerrank.com/profile/addsickk")} />
                    </div>
                    <div className="flex flex-col col-span-7">
                        <div className="text-center">
                            5 Star rating on HackerRank
                            <span className='text-red-500 m-1'>
                                .
                            </span>
                        </div>
                        <div className="text-center text-neutral-500">
                            I excel in algorithms and data structures on HackerRank.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Awards;