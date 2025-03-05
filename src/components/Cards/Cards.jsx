import React from "react";
import Best from "../../assets/truck.png";
import scheduled from "../../assets/scheduled.png";
import regional from "../../assets/pickup.png";
import Instant from "../../assets/instant.png";
import CardItem from "./CardItem";

const Cards = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <CardItem
            styleName="card"
            icon={Instant}
            title="Instant Pickup"
            price=""
            features={["Pickup within 30 minutes", "On demand Availability", "Priority Service"]}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
          />
          <CardItem
            styleName="card"
            icon={scheduled}
            title="Scheduled Pickup"
            price=""
            features={["Flexible Pickup Slots", "Daily Pickup Options", "Pre-scheduled Times"]}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
          />
          <CardItem
            styleName="card"
            icon={regional}
            title="Regional Transport"
            price=""
            features={["Intra-city Pickup", "Near City Deliveries", "Logistics Support"]}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
          />
        </div>
      </div>
    </section>
  );
};

export default Cards;