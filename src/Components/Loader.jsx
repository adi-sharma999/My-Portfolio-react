import React from "react";
import loader from "../img/loader.gif"; // ✅ import image

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80">
      <div>
        <img src={loader} alt="Loading..."/>
      </div>
    </div>
  );
};

export default Loader;
