import { Phone, Mail, Linkedin, Github, Code, Braces, SquareTerminal } from 'lucide-react';

const Last = () => {
  return (
    <>
      <div className="text-white-500 flex flex-col md:grid md:grid-cols-12 w-full text-[12.5px] sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl py-4 gap-y-2 md:px-5 md:py-10 md:gap-x-0 md:gap-y-5">
        
        <div className=" hover:text-neutral-500 flex justify-center items-center col-span-4 gap-x-3  cursor-pointer" onClick={() => (window.location.href = "tel:+919758466589")}>
          <Phone className="w-3 h-3 md:w-5 md:h-5 text-red-500" />
          <span>Phone</span>
        </div>

        <div className="hover:text-neutral-500 flex justify-center items-center col-span-4 gap-x-3  cursor-pointer" onClick={() => (window.location.href = "mailto:youremail@example.com")}>
          <Mail className="w-3 h-3 md:w-5 md:h-5 text-red-500" />
          <span>Email</span>
        </div>

        <div className="hover:text-neutral-500 flex justify-center items-center col-span-4 gap-x-3  cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/aditya-sharma999/", "_blank")}>
          <Linkedin className="w-3 h-3 md:w-5 md:h-5 text-red-500" />
          <span>LinkedIn</span>
        </div>

        <div className="hover:text-neutral-500 flex justify-center items-center col-span-3 gap-x-3  cursor-pointer" onClick={() => window.open("https://github.com/adi-sharma999", "_blank")}>
          <Github className="w-3 h-3 md:w-5 md:h-5 text-red-500" />
          <span>GitHub</span>
        </div>

        <div className="hover:text-neutral-500 flex justify-center items-center col-span-3 gap-x-3  cursor-pointer" onClick={() => window.open("https://leetcode.com/u/adi_sharma0/", "_blank")}>
          <Code className="w-3 h-3 md:w-5 md:h-5 text-red-500" />
          <span>LeetCode</span>
        </div>

        <div className="hover:text-neutral-500 flex justify-center items-center col-span-3 gap-x-3  cursor-pointer" onClick={() => window.open("https://www.codechef.com/users/adi_sharma999", "_blank")}>
          <Braces className="w-3 h-3 md:w-5 md:h-5 text-red-500" />
          <span>CodeChef</span>
        </div>

        <div className="hover:text-neutral-500 flex justify-center items-center col-span-3 gap-x-3  cursor-pointer" onClick={() => window.open("https://www.hackerrank.com/profile/addsickk", "_blank")}>
          <SquareTerminal className="w-3 h-3 md:w-5 md:h-5 text-red-500" />
          <span>HackerRank</span>
        </div>
      </div>
    </>
  );
};

export default Last;
