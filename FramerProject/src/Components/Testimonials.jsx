import React, { useEffect,useState } from "react";
import TestimonialsData from "../utils/TestimonialsData";
import { BsChatQuote } from "react-icons/bs";
import { IoArrowBack } from "react-icons/io5";
import { IoMdArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import variants from "../utils/variants";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow,setItemToShow] = useState(1);
  useEffect(()=>{
    const interval = setInterval(()=>{
      handleNext()
    },2000);
    return() => clearInterval(interval)
  },[currentIndex])
  useEffect(()=>{
    const handleResize = () =>{
      if(window.innerWidth >= 768){
        setItemToShow(3)
      }else{
        setItemToShow(1)
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize)
    return() => window.removeEventListener('resize',handleResize)
  })
  const handleNext = () => {
setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % TestimonialsData.length)
  }

  const handlePrevious = () =>{
    setCurrentIndex((prevIndex) => (prevIndex - itemsToShow + TestimonialsData.length) % TestimonialsData.length)
  }

  const handleDotClick = (index) => {
setCurrentIndex(index)
  }
  return (
    <section className="bg-white pt-24 pb-8 " id="testimonials">
      <div className="max-7xl mx-auto px-4 lg:px-8 sm:px-6 relative">
        {/* headline and description  */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{amount: 1}}
          variants={variants("bottom",0.2)}
        className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-shrink-0 bg-primary text-black py-2 px-16 rounded-md">
            <h2 className="text-2xl font-bold">Testimonials</h2>
          </div>
          <div className="md:w-2/3 ">
            <p className="text-secondary md:w-2/3">
              Hear from Our Satisfied Clients: Read Our Testimonials to learn
              More About Our Digital Marketing Services
            </p>
          </div>
        </motion.div>
        {/* testimonials slider */}
        <div className="relative mb-12">
          <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-3 overflow-hidden">
            {TestimonialsData.slice(currentIndex, currentIndex + itemsToShow).map((testimonials, i) => (
              <motion.div
               initial={{opacity:0,x:50}}
              animate={{opacity:1, x:0}}
              exit={{opacity:0 ,x:-50}}
              transition ={{duration: 0.5}}
              >
                
              <div key={i} className="w-full relative py-5 md:max-w-md px-2">
                <div className="absolute top-0 left-0 z-30">
                  <BsChatQuote className="size-8" />
                </div>
                <div className=" h-42 bg-white hover:bg-primary rounded-lg border hover:border-primary shadow-lg p-6 cursor-pointer transition-all duration-300">
                  <p className=" text-base font-medium mb-4">
                    {testimonials.text}
                  </p>
                  <p className="text-sm font-semibold text-gray-700">
                    {testimonials.author}
                  </p>
                </div>
              </div>
              </motion.div>
            ))}
          </div>
          {/* dot navigation */}
          <div className="absolute mt-5 left-1/2 transform -translate-x-1/2 flex items-center space-x-5 z-10">
            <button className="text-black" onClick={handlePrevious}>
              <IoArrowBack />
            </button>
            {/* dots */}
            <div className="flex space-x-2 ">
              {
                TestimonialsData.map((_, index)=>(
                  <button onClick={()=> handleDotClick(index)}key={index} className={`w-3 h-3 rounded-full ${index >= currentIndex && index <currentIndex + itemsToShow ? "bg-primary" : "bg-gray-400"}`}/>

               
                ))
              }
            </div>
            {/* next button */}
            <button className="text-black" onClick={handleNext}><IoMdArrowForward /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


