import React from "react";
import logo2 from "../assets/logos/adidas.png";
import logo3 from "../assets/logos/images (1).jfif";
import logo4 from "../assets/logos/images (2).jfif";
import logo5 from "../assets/logos/images (3).jfif";
import logo6 from "../assets/logos/images (4).jfif";
import logo7 from "../assets/logos/images (4).png";
import logo8 from "../assets/logos/images (5).png";
import logo9 from "../assets/logos/images (6).png";

const LogoCarousel = () => {
  return (
    <div className="pt-24 overflow-hidden">
      <div className="flex space-x-12 justify-between items-center animate-marquee">
        <img src={logo2} alt="" className="h-20" />
        <img src={logo3} alt="" className="h-20" />
        <img src={logo4} alt="" className="h-20" />
        <img src={logo5} alt="" className="h-20" />
        <img src={logo6} alt="" className="h-20" />
        <img src={logo7} alt="" className="h-20" />
        <img src={logo8} alt="" className="h-20" />
        <img src={logo9} alt="" className="h-20" />
      </div>
    </div>
  );
};

export default LogoCarousel;
