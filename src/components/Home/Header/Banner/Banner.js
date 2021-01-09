import React from "react";
import bannerImage from "../../../../assets/images/Mask Group 1.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <main className="mt-5">
      <div className="row m-0 p-0">
        <div className="col-12 col-md-4 offset-md-1">
          <h1>
            Your New Smile <br /> Starts Here
          </h1>
          <p className="text-muted text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the
          </p>
          <Link to="/appointment">
            <button className="primary-btn mb-3">Get Appointment</button>
          </Link>
        </div>
        <div className="col-12 col-md-6 pr-5 offset-md-1">
          <img src={bannerImage} alt="" className="img-fluid" />
        </div>
      </div>
    </main>
  );
};

export default Banner;
