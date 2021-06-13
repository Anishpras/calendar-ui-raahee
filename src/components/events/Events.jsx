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
          setEvents([
            {
              date: event.id,
              appointments: event.data().appointments,
            },
          ]);
        });
      });
  }, [currentUser.uid]);

  return (
    <div className="event">
      <div className="eventContainer">
        <div className="eventHeading">
          <h1>Your Appointments</h1>
        </div>

        {events.map(({ date, appointments }, index) => {
          return (
            <EventCard key={index} date={date} appointments={appointments} />
          );
        })}
      </div>
    </div>
  );
};

export default Events;
