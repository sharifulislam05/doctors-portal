import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
import Axios from "axios";
import Loader from "react-loader-spinner";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  //get all doctors from database
  useEffect(() => {
    Axios.get("https://frozen-beyond-41259.herokuapp.com/doctor").then((data) => {
      setDoctors(data.data);
      setLoading(false);
    });
  }, []);
  return (
    <div className="container">
      <div className="text-center mb-5">
        <h3 className="aqua-text">Our Doctors</h3>
      </div>
      {loading && (
        <Loader
          type="ThreeDots"
          color="#1cc7c1"
          height={100}
          width={100}
          className="text-center"
        />
      )}
      <div className="row">
        {doctors.map((doctorInfo, index) => (
          <DoctorCard doctorInfo={doctorInfo} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
