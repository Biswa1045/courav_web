import React from "react";
import Button from "./Button/Button";
import BlurText from "./BlurText";

const Hero = () => {
  return (
    <section className="text-white h-[80vh]">
      <div className="shape-slider hidden md:block">
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      </div>
      <div className="max-w-[800px] container mx-auto text-center flex flex-col justify-center">
        <p className="text-primary font-bold p-2">
         just send it...
        </p>
      
        <div className="w-full flex justify-center">
  <BlurText
    text="Coming Soon!"
    delay={150}
    animateBy="words"
    direction="top"
    className="hero-text-shadow text-4xl font-bold text-center md:py-6 md:text-7xl sm:text-6xl md:hero-text-shadow-md"
  />
</div>

        <p className="text-4xl font-bold py-4 outline">
          Fast reliable affordable
        </p>
        <div className="h-10"></div>
        <p className="text-xl px-2 font-bold text-gray-500 rise md:text-2xl md:px-0">
        A range of flexible and fast parcel services, including quick, scheduled and intra-city delivery options.
        </p>
        <Button classCss="btn-primary my-6 mx-auto px-12 py-3">
          <span className="z-10 relative">Explore</span>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
