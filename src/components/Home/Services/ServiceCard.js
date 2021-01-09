import React from "react";

const ServiceCard = ({ service }) => {
  const { name, img } = service;
  return (
    <div className="col-md-4 mt-2 mt-md-5 text-center">
      <div className="card border-0">
        <div>
          <img src={img} className="card--top service-image" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-secondary">
            Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
            has been the
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
