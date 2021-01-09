import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./_allAppointment.scss";

const AllAppointment = () => {
  const [appointment, setAppointment] = useState([]);
  //load all appointment for dashboard-allAppointment
  useEffect(() => {
    getAllAppointment();
  }, []);
  const getAllAppointment = async () => {
    try {
      const getData = await Axios.get("https://frozen-beyond-41259.herokuapp.com/allAppointment");
      setAppointment(getData.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <section>
      <h3 className="aqua-text text-center my-3 my-md-5">All Appointments</h3>
      <table className="table table-borderless table-responsive-sm">
        <thead>
          <tr>
            <th scope="col">Sr. No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Date</th>
            <th scope="col">Schedule</th>
            <th scope="col">Gender</th>
            <th scope="col">Weight</th>
          </tr>
        </thead>
        {appointment.map((appointment, index) => (
          <tbody key={appointment._id}>
            <tr>
              <td>{index + 1}</td>
              <td>{appointment.name}</td>
              <td>{appointment.email}</td>
              <td>{appointment.date}</td>
              <td>{appointment.visitingHour}</td>
              <td>{appointment.gender}</td>
              <td>{appointment.weight}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </section>
  );
};

export default AllAppointment;
