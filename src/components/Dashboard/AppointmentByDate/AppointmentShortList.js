import React from "react";

const AppointmentShortList = ({ appointment }) => {
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Date</th>
          <th scope="col">Schedule</th>
        </tr>
      </thead>
      {appointment.map((appointment) => (
        <tbody key={appointment._id}>
          <tr>
            <td>{appointment.name}</td>
            <td>{appointment.date}</td>
            <td>{appointment.visitingHour}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default AppointmentShortList;
