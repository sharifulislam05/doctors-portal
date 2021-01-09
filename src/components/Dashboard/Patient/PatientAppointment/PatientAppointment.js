import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../App";
import Loader from "react-loader-spinner";

const PatientAppointment = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [appointment, setAppointment] = useState([]);
  const [loading, setLoading] = useState(true);
  //load all appointment for specific patient
  useEffect(() => {
    getAllAppointment();
  }, []);
  const getAllAppointment = async () => {
    try {
      const getData = await Axios.post(
        "https://frozen-beyond-41259.herokuapp.com/patientAppointment",
        { email: loggedInUser.email }
      );
      setAppointment(getData.data);
      setLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <section>
      <h3 className="aqua-text text-center my-3 my-md-5">All Appointments</h3>
      <table className="table  table-borderless table-responsive-sm">
        <thead>
          <tr>
            <th scope="col">Sr. No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Date</th>
            <th scope="col">Schedule</th>
            <th scope="col">Name of the disease</th>
          </tr>
        </thead>
        {loading && (
          <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
        )}
        {appointment.map((appointment, index) => (
          <tbody key={appointment._id}>
            <tr>
              <td>{index + 1}</td>
              <td>{appointment.name}</td>
              <td>{appointment.email}</td>
              <td>{appointment.date}</td>
              <td>{appointment.visitingHour}</td>
              <td>{appointment.subject}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </section>
  );
};

export default PatientAppointment;
