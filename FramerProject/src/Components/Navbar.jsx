import React, { useState,useEffect } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleMenuClick = (name) => {
    setActiveItem(name);
    setIsOpen(false);
  };
  const menuItems = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Use Cases", href: "#use-cases" },
    { name: "Team", href: "#team" },
    { name: "Testimonials", href: "#testimonials" },
  ];
  useEffect(()=>{
    const sections = menuItems.map((item)=> document.querySelector(item.href))
    const handleScroll = () => {
      const scrollPosition = window.screenY + window.innerHeight / 2;
      let currentSection = "";
      sections.forEach ((section)=>{
if(section && section.offsetTop < scrollPosition && section.offsetTop + section.offsetheight > scrollPosition){
  currentSection = section.getAttribute("id")
}
      })
      setActiveItem(menuItems.find(item => item.href === `#${currentSection}`)?.name || "")
      
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return() =>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[menuItems])
  
  return (
    <nav className="block fixed top-0 w-full left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between h-16 items-center">
          {/* logo */}
          <div>
            <a href="/">
              <img src="/Images/images.jfif" alt="" className="h-14" />
            </a>
          </div>
          {/* nav items for larger screen */}
          <div className="space-x-8 hidden md:flex items-center">
            {menuItems.map((item, index) => (
              <a
                onClick={() => handleMenuClick(item.name)}
                className={`text-black px-2 hover:bg-primary rounded-sm hover:underline 
            underline-offset-4 transition-all duration-300
               ${activeItem === activeItem.name ? "text-black bg-primary underline underline-offset-4" : "" }`}
                key={index}
                href={item.href}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="border px-4 py-2 border-black hover:bg-primary hover:border-black rounded-md transition-all duration-300"
            >
              Request a quote
            </a>
          </div>
          {/* mobile screen */}
          <div className="md:hidden flex  items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? (
                <HiOutlineX className="size-6" />
              ) : (
                <HiOutlineMenuAlt3 className="size-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu  */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-3 space-y-2 sm:px-3">
            {menuItems.map((item, index) => (
              <a
                onClick={() => handleMenuClick(item.name)}
                className={`block text-black px-2 hover:bg-primary rounded-sm hover:underline 
                underline-offset-4 transition-all duration-300 
                ${activeItem === activeItem.name ? "text-primary" : "" }`}
                key={index}
                href={item.href}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className=" block border px-4 py-2 border-black hover:bg-primary hover:border-black rounded-md transition-all duration-300"
            >
              Request a quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
