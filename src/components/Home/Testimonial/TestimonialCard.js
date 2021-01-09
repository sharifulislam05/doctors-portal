import React from "react";

const TestimonialCard = ({ testimonial }) => {
  const { quote, name, from, img } = testimonial;

  return (
    <div className="col-md-4 border-0 pl-4 pr-0">
      <div className="mb-4">
        <p className="text-secondary text-justify pr-5">{quote}</p>
      </div>
      <div className="d-flex shadow-sm">
        <div className="mr-2 testimonial__img">
          <img src={img} className="img-fluid w-75" alt="..." />
        </div>
        <div>
          <h6 className="aqua-text">{name}</h6>
          <p className="text-secondary">{from}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
