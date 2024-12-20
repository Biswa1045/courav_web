import React from "react";
import Best from "../../assets/best.png";
import Community from "../../assets/community.png";
import Reputation from "../../assets/reputation.png";
import CardItem from "./CardItem";

const Cards = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-16 grid md:grid-cols-4 gap-8 px-4">
        <CardItem
          styleName="card"
          icon={Best}
          title="Instant Pickup"
          price=""
          features={["Pickup within 30 minutes", "24/7 Availability", "Priority Service"]}
        />
        <CardItem
          styleName="card"
          icon={Best}
          title="Scheduled Pickup"
          price=""
          features={["Flexible Pickup Slots", "Daily Pickup Options", "Pre-scheduled Times"]}
        />
        <CardItem
          styleName="card"
          icon={Best}
          title="Out Station"
          price=""
          features={["Intra-city Pickup", "Custom Delivery Dates", "Logistics Support"]}
        />
        <CardItem
          styleName="card"
          icon={Best}
          title="Pan India"
          price=""
          features={["Nationwide Coverage", "Multiple Channels", "Fast Delivery Network"]}
        />
      </div>
    </section>
  );
};

export default Cards;
