import React from "react";
import wilson from "../../../assets/images/Ellipse 1.png";
import ema from "../../../assets/images/Ellipse 2.png";
import aliza from "../../../assets/images/Ellipse 3.png";
import "./_testimonial.scss";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const testimonialData = [
    {
      quote:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu tousing ‘Content here, content ",
      name: "Wilson Harry",
      from: "California",
      img: wilson,
    },
    {
      quote:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu tousing ‘Content here, content ",
      name: "Ema Gomez",
      from: "California",
      img: ema,
    },
    {
      quote:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu tousing ‘Content here, content ",
      name: "Aliza Farari",
      from: "California",
      img: aliza,
    },
  ];
  return (
    <section>
      <div className="testimonial__header offset-md-1 pl-2 p-md-0">
        <h6 className="aqua-text font-weight-bold">TESTIMONIAL</h6>
        <h2>
          What’s Our Patients <br /> Says
        </h2>
      </div>
      <div className="container">
        <div className="row">
          {testimonialData.map((testimonial) => (
            <TestimonialCard testimonial={testimonial} key={testimonial.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
