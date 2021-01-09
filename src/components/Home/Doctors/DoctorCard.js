import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const DoctorCard = ({ doctorInfo }) => {
  const { name, email, img } = doctorInfo;

  return (
    <div className="col-6 col-md-4 text-center">
      <img src={`data:image/png;base64,${img.img}`} alt="" className="img-fluid" style={{height: "200px"}} />
      <div className="text-center">
        <p>{name}</p>
        <p><FontAwesomeIcon className="aqua-text mr-2" icon={faPhoneAlt}/>{email}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
