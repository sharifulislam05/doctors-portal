import React from "react";
import "./_services.scss";
import treatment from "../../../assets/images/001-dental.png";
import cavity from "../../../assets/images/tooth (1).png";
import tooth from "../../../assets/images/tooth.png";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const serviceData = [
    {
      name: "Fluoride Treatment",
      img: treatment,
    },
    {
      name: "Cavity Filling",
      img: cavity,
    },
    {
      name: "Teeth Whitening",
      img: tooth,
    },
  ];
  return (
    <section className="container services">
      <div className="services__header text-center">
        <h3>OUR SERVICES</h3>
        <p>Services We Provide</p>
      </div>
      <div className="row">
        {serviceData.map((service) => (
          <ServiceCard service={service} key={service.name} />
        ))}
      </div>
    </section>
  );
};

export default Services;
