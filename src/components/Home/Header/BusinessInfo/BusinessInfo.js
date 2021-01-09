import React from "react";
import clock from "../../../../assets/images/clock-outline.png";
import location from "../../../../assets/images/ic_location_on_48px@2x.png";
import phone from "../../../../assets/images/phone-call@2x.png";
import InfoCard from "./InfoCard";

const BusinessInfo = () => {
  const info = [
    {
      title: "Opening Hours",
      img: clock,
      details: "8:00am - 12:00pm",
    },
    {
      title: "Visit our location",
      img: location,
      details: "Brooklyn, NY 10036, United ",
    },
    { title: "Contact us now", img: phone, details: "+000 123 456789" },
  ];

  return (
    <section className="d-flex justify-content-center">
      <div className="container d-flex" style={{ marginTop: "50px" }}>
        {info.map((info, index) => (
          <InfoCard info={info} key={index} />
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
