import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
 
} from "react-icons/fa";
import FooterContact from "./FooterContact";
const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
      <div className="bg-secondary rounded-t-2xl">
        {/* first section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 px-4 sm:px-6 lg:px-8 py-10">
            {/* logo */}
          <div className="">
            <img src="/Images/images.jfif" alt="image" className="h-12" />
          </div>

          {/* menu-items */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
            <a href="#about" className="text-white hover:text-gray-400">
              Home
            </a>
            <a href="#services" className="text-white hover:text-gray-400">
              Services{" "}
            </a>
            <a href="#use-cases" className="text-white hover:text-gray-400">
              Use Cases
            </a>
            <a href="#contact" className="text-white hover:text-gray-400">
              Contact
            </a>
          </div>
          {/* social icons */}
          <div className="flex md:justify-end space-x-4">
            <a href="#" className="p-1.5 text-black rounded-full bg-white">
              <FaFacebook className="text-black hover:text-gray-400" />      
            </a>
            <a href="#" className="p-1.5 text-black rounded-full bg-white"> 
                <FaTwitter className="text-black hover:text-gray-400" />
              </a>
              <a href="#" className="p-1.5 text-black rounded-full bg-white"> 
                <FaLinkedin className="text-black hover:text-gray-400" />
              </a>
          </div>
        </div>
        {/* contact and newsletter */}
      
        <FooterContact />
        <hr  className="my-4 border-white mx-4 sm:px-6 lg:px-8"/> 
        <div className="flex flex-wrap md:gap-8 text-white px-4 sm:px-6 lg:px-8 py-5">
          <p>© 2024 PositivUs. All Rights Reserved</p>
          <p className="underline underline-offset-4"><a href="#">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
