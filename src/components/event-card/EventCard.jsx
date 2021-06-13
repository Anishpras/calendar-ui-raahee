import React, { useEffect, useState } from "react";
import db from "../../firebase.utils";
import "./_event-card.scss";
const EventCard = ({ id, date, time }) => {
  const [clientName, setClientName] = useState('');
  useEffect(() => {
    db.collection('users').doc(id).get().then((doc) => {
      setClientName(doc.data().userName);
    })
  }, [])
  return (
    <div className="event-card">
      {" "}
      <div className="eventCard-content">
        {" "}
        <h2>{clientName}: {date}: {time}</h2>
      </div>
    </div>
  );
};

export default EventCard;
