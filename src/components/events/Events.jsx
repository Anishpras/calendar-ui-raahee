import React, { useEffect, useState } from "react";
import EventCard from "../event-card/EventCard";
import "./_events.scss";
import db from "../../firebase.utils";
import { useAuth } from "../../contexts/AuthContext";

const Events = () => {
  const { currentUser } = useAuth();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    db.collection("mhp")
      .doc(currentUser.uid)
      .collection("appoints")
      .get()
      .then((mhp_appoints) => {
        mhp_appoints.forEach((event) => {
          event.data().appointments.forEach((appointment) => [
            setEvents(prevevents => [...prevevents, {
              date: event.id,
              clientId: appointment.client,
              time: appointment.time
            }])
          ]);
        });
      });
  }, []);

  console.log(events);

  return (
    <div className="event">
      <div className="eventContainer">
        <div className="eventHeading">
          <h1>Your Appointments</h1>
        </div>
        {events.map((event) => {
          return <EventCard id={event.clientId} date={event.date} time={event.time} />
        })}
      </div>
    </div>
  );
};

export default Events;
