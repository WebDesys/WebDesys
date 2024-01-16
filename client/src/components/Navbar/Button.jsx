import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link to='/contactus'>
      <div className="b animate-bounce mx-auto h-12 w-48 flex justify-center items-center" data-aos="zoom-in">
        <div className="i h-12 w-48 bg-gradient-to-br from-blue-400 to-blue-600 items-center rounded-xl shadow-2xl  cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
        </div>
        <div className="text-center text-white font-semibold z-10 pointer-events-none flex justify-content items-center"><span className=""><svg className="w-5 h-5 right-1.5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg></span>Contact Us</div>
      </div>
    </Link>
  );
};

export default Button;
