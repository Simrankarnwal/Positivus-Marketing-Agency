import React from "react";
import image from "../assets/services/cta market.png";
const CTA = () => {
  return (
    <section className=" py-12">
      <div
        className="max-w-7xl mx-auto bg-[#F3F3F3] rounded-md sm:pt-24 pt-8 pb-12 flex flex-col md:flex-row items-center
 justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* left side */}
        <div>
          {" "}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            {" "}
            <h1 className="text-3xl font-bold text-secondary mb-4">
              Let's make things happen
            </h1>
            <p className="text-gray-600 mb-6 md:w-2/3">
              Contact Us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            {/* right side */}
            <button className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-primary hover:text-black transition-all duration-300">
              Get your free Proposal
            </button>
          </div>
        </div>
        {/* right side */}
        <div className="md:w-1/2  flex justify-center items-center relative">
          <img
            src={image}
            alt="image"
            className="md:absolute md:-top-52 md:bottom-0"
            style={{ transform: "scale(1.20)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
