import React from "react";
import "./_businessInfo.scss";

const InfoCard = ({ info }) => {
  const { title, details, img } = info;
  return (
    <div className="info-card d-flex align-items-center mr-2 p-4">
      <div className="row ">
        <div className="col-md-4 text-center text-md-right">
          <img src={img} alt="" className="img-fluid w-50 mb-2" />
        </div>
        <div className="col-md-8 info-card__description">
          <p>{title}</p>
          <small>{details}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
