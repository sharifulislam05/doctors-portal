import React from "react";
import dentalCare from "../../../assets/images/Mask Group 3.png";

const FeatureService = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-12 col-md-4">
          <img src={dentalCare} alt="" className="img-fluid" />
        </div>
        <div className="col-12 col-md-6 mt-5">
          <h1 className="">
            Exceptional Dental <br /> Care, on Your Terms
          </h1>
          <p className="text-secondary text-justify">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using ‘Content here, content
            here’, making it look like readable English. Many desktop publishing
            packages and web page{" "}
          </p>
          <button className="primary-btn">Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default FeatureService;
