import profilePic from "../img/profile.jpg";

const About = () => {
  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-10 w-full text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl px-1 py-4 gap-x-3 gap-y-7 md:px-10 md:py-20 md:gap-x-10 md:gap-y-15">
      <div className="text-center text-neutral-500 col-span-7">
        Proficient programmer with strong problem-solving skills, having solved{" "}
        <span className="text-white">850+ problems </span>
        across leading coding platforms. Recognized for consistency with the
        prestigious LeetCode annual badge (top 0.4% globally) after coding 320+
        days in 2023, and further achieving the{" "}
        <span className="text-white">500+ days badge</span> in 2025. Driven by
        dedication, persistence, and a commitment to delivering high-quality
        results in every project
        <span className="text-red-500 m-1">.</span>
      </div>
      <div className="flex items-center justify-center col-span-3">
        <img
          src={profilePic}
          alt="profile"
          className="w-25 h-25 sm:w-40 sm:h-40 lg:w-50 lg:h-50 rounded-full object-cover shadow-[0_0_20px_2px_rgb(239,68,68)] transition-all duration-500 hover:shadow-[0_0_40px_5px_rgb(239,68,68)]"
        />
      </div>
    </div>
  );
};

export default About;
