import React from "react";
import { FaCity } from "react-icons/fa";

const ServiceLocations = () => {
  const cities = ["Bhubaneswar", "Cuttack"];

  return (
    <section className="py-16 bg-white px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Service Locations
        </h2>
        
        <div className="flex overflow-x-auto pb-6 md:overflow-x-visible md:justify-center gap-8">
          {cities.map((city, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-40 text-center hover:transform hover:scale-105 transition-all"
            >
              <div className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg">
                <FaCity className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">{city}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceLocations;