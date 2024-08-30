import React from "react";
import graphic from "../assets/services/graphic.avif";
import variants from "../utils/variants";
import {motion} from "framer-motion"
const Contact = () => {
  return (
    <section className="pt-24 pb-12 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{amount: 1}}
          variants={variants("bottom",0.2)}
          className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-shrink-0 bg-primary text-black py-2 px-16 rounded-md">
            <h2 className="text-2xl font-bold">Contact Us</h2>
          </div>
          <div className="md:w-2/3 ">
            <p className="text-secondary md:w-2/3">
              Connect with us : <br />
              Let's Discuss Your Digital Marketing Needs
            </p>
          </div>
        </motion.div>
        {/* contact-form */}
        <div className="flex flex-col md:flex-row justify-between bg-tartiary rounded-lg md:p-8 p-4">
          <div className="w-full md:w-1/2 p-4">
            <form className="space-y-4">
              {/* radio inputs */}
              <div className="flex flex-col md:flex-row md:space-x-4  items-start justify-start">
                <lable className="flex items-center">
                  <input
                    type="radio"
                    name="contact-type"
                    className="mr-2"
                    value="general"
                  />{" "}
                  Say Hii
                </lable>
                <label className="flex items-center mt-2 md:mt-0">
                  <input
                    type="radio"
                    name="contact-type"
                    className="mr-2"
                    value="quote"
                  />{" "}
                  Get A Quote
                </label>
              </div>
              {/* name input field */}
              <div>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Mr.X"
                  className="mt-2 py-2.5 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary"
                />
              </div>
              {/* email input */}
              <div>
                <label>Email*</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="mt-2 py-2.5 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary"
                />
              </div>
              {/* text area */}
              <div>
                <label>Message</label>
                <textarea
                  rows="6"
                  name="message"
                  id="message"
                  placeholder="Enter your Message"
                  className="mt-2 py-2.5 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary"
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-primary hover:text-black transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* image */}

          <div className="relative md:flex justify-end items-center md:w-1/2 md:-m-8 overflow-hidden">
            <img src={graphic} alt="graphic" className="md:absolute md:block hidden top-0 bottom-0 -right-8 h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
