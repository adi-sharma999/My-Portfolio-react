import gif from "../assets/giphy.gif";

const Home = () => {
  return (
    <div className="relative w-full flex flex-col md:flex-row justify-center p-5 gap-5">
      <img
        src={gif}
        alt="profile"
        className="relative w-full h-full opacity-12 md:w-100 md:h-100 md:opacity-100 md:p-10"
      />
      <div className="absolute md:static flex flex-col justify-center items-center p-2">
        <span className="text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-bold hover:tracking-widest transition-all duration-300 origin-left cursor-pointer">
          Hello!
        </span>
        <p className="text-neutral-500 text-center sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-2">
          I'm Aditya Sharma, a passionate
          <span className="text-red-500 mx-2 ">software developer</span>
          with a knack for creating innovative solutions. Welcome to my portfolio
          <span className="text-red-500 mx-1">.</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
