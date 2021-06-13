import React, { useEffect } from "react";
import "./_event-card.scss";
import db from "../../firebase.utils";
const EventCard = ({ date, appointments }) => {
  useEffect(() => {
    db.collection("users").doc(appointments.client);
  });

  return (
    <div className="event-card">
      {" "}
      <div className="eventCard-content">
        {" "}
        <h2>{`${date}`} </h2>
        {appointments.map((appointment, index) => {
          return <h3 key={index}>{appointment.time}</h3>;
        })}
      </div>
    </div>
  );
};

export default EventCard;
