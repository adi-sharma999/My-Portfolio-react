import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const sections = [
    { id: "home" },
    { id: "about" },
    { id: "skills" },
    { id: "experience" },
    { id: "projects" },
    { id: "certificates" },
    { id: "education" },
    { id: "awards" },
    { id: "last" }
  ];

  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.5, // section must be at least 50% visible
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-black flex flex-row justify-between items-center py-2 md:px-4 md:py-4 text-white shadow-md">

      <div
        onClick={(e) => {
          e.preventDefault(); // prevent default page reload
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="sm:text-2xl md:text-3xl hover:tracking-widest transition-all duration-300 cursor-pointer">
        Aditya Sharma<span className="text-red-500"> .</span>
      </div>

      <nav className="hidden md:flex md:gap-3 md:gap-5">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition cursor-pointer ${activeId === section.id ? "bg-red-500" : "bg-neutral-500"
              }`}
            onClick={() =>
              document
                .getElementById(section.id)
                ?.scrollIntoView({ behavior: "smooth" })
            }
          ></div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
