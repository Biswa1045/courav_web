import React from "react";
import Navbar from "../components/Nav/Navbar";
import Button from "../components/Button/Button";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaShippingFast, FaWhatsapp, FaMailBulk, FaVoicemail } from "react-icons/fa";
import Footer from "../components/Footer";
import ServiceLocations from "../components/ServiceLocation";

const Contact = () => {


  const keyFeatures = [
    {
      icon: <FaShippingFast className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Guaranteed same-day delivery within city limits"
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      title: "On demand Support",
      description: "Round-the-clock service for all your needs"
    },
    {
      icon: <FaMapMarkerAlt className="w-8 h-8" />,
      title: "Wide Network",
      description: "Covering major cities across Odisha"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Contact Hero Section */}
      <section className=" py-10 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-primary" />
              <span className="text-white">+91 ---</span>
            </div>
            <div className="flex items-center gap-2">
              <FaWhatsapp className="text-primary" />
              <span className="text-white">+91 ---</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMailBulk className="text-primary" />
              <span className="text-white">gamiktechnologies@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary" />
              <span className="text-white">Bhubaneswar, India</span>
            </div>
          </div>
        </div>
      </section>


      {/* Key Features */}
      <section className="py-16 bg-blue-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="text-primary mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
            <ServiceLocations/>
    <Footer/>
    </div>
  );
};

export default Contact;