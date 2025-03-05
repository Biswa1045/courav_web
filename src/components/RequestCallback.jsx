import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button/Button";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const RequestCallback = ({ phoneNumber = "+91 XXXXXXXX", contactLink = "/contact" }) => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">
        {/* Left Side Animation */}
        <div className="md:w-1/2 w-full">
          <div className="rounded-xl h-96 flex items-center justify-center overflow-hidden">
            <DotLottieReact
              src="https://lottie.host/60170169-3034-4c38-8148-a13e790d328e/p5CTyZ8GC2.lottie"
              loop
              autoplay
              className="w-full h-full scale-125"
            />
          </div>
        </div>

        {/* Right Side Content */}
        <div className="md:w-1/2 w-full space-y-8">
          <article className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Need Logistics Solutions?
            </h2>
            <p className=" text-gray-600 leading-relaxed">
              Reach out to us at <span className="text-blue-600 font-semibold">{phoneNumber}</span> today 
              to discover how our managed services can benefit your business. Our expert team 
              will analyze your specific requirements and recommend customized logistics 
              solutions designed to optimize your operations and reduce costs.
            </p>
          </article>

         
          <Button classCss="btn btn-secondary text-primary w-[200px]  my-6 mx-auto md:mx-0 py-3">
            <Link to={contactLink}>
            <span className="z-10 relative">Request Callback</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RequestCallback;