import React from "react";
import "./_event-card.scss";
const EventCard = ({ time, appointments }) => {
  console.log(time, appointments);
  return (
    <div className="event-card">
      {" "}
      <div className="eventCard-content">
        {" "}
        <h2>{`${time}`} </h2>
        {appointments.map((appointment) => {
          return <h3>{appointment.time}</h3>;
        })}
      </div>
    </div>
  );
};

export default EventCard;
