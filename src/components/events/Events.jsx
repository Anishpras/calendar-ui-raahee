import React from "react";
import EventCard from "../event-card/EventCard";
import "./_events.scss";
const Events = () => {
  return (
    <div className="event">
      <div className="eventContainer">
        <div className="eventHeading">
          <h1>Your Appointments</h1>
        </div>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default Events;
