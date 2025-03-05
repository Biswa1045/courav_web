import React from "react";
import Button from "../Button/Button";

const CardItem = ({ styleName, icon, title, price, features }) => {
  return (
    <div className={styleName}>
      <img
        className="w-20 mx-auto mt-[-3rem] bg-white"
        src={icon}
        alt="Card Icon"
      />
      <h2 className="text-2xl font-bold text-center py-8">{title}</h2>
      <p className="text-center text-4xl font-bold">{price}</p>
      <div className="text-center font-medium">
        {features.map((feature, index) => (
          <p key={index} className="py-2 border-b mx-8">
            {feature}
          </p>
        ))}
      </div>
      {/* <Button classCss="btn-primary my-6 mx-auto px-12 py-3">
        <span className="z-10 relative">Get Details</span>
      </Button> */}
    </div>
  );
};

export default CardItem;
