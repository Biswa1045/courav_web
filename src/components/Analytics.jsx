import React from "react";
import Laptop from "../assets/analytics.jpg";
import Button from "./Button/Button";

const Analytics = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-16 px-4 grid md:grid-cols-2">
        <img
          src={Laptop}
          className="w-[400px] mx-auto my-4"
          alt="data analytics"
        />
        <div className="flex flex-col justify-center">
          <p className="text-primary font-bold ">LOGISTICS ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Every Parcel Centrally
          </h1>
          <p>
A centralized parcel management system enables logistics businesses to track shipments in one place, offering real-time updates, automated notifications, and detailed reporting. This improves efficiency, reduces errors, and enhances customer satisfaction, ensuring reliable and timely deliveries.
          </p>
          <Button classCss="btn btn-secondary text-primary w-[200px]  my-6 mx-auto md:mx-0 py-3">
            <span className="z-10 relative">Explore</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
