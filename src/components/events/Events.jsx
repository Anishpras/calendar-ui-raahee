import React, { useEffect, useState } from "react";
import EventCard from "../event-card/EventCard";
import "./_events.scss";
import db from "../../firebase.utils";
import { useAuth } from "../../contexts/AuthContext";

const Events = () => {
  const { currentUser } = useAuth();
  const [events, setEvents] = useState([]);
  const [time, setTime] = useState([]);
  useEffect(() => {
    db.collection("mhp")
      .doc(currentUser.uid)
      .collection("appoints")
      .get()
      .then((mhp_appoints) => {
        mhp_appoints.forEach((event) => {
          // console.log(event.data());
          setTime(event.id);
          setEvents(event.data().appointments);
        });
      });
  }, []);
  console.log(time);
  console.log(events);

  return (
    <div className="event">
      <div className="eventContainer">
        <div className="eventHeading">
          <h1>Your Appointments</h1>
        </div>

        {/* {events.map((event) => {
          event.appointments.appointments.map((single_event) => {
            console.log(single_event, event.id);
            alert("hello");
          });
        })} */}

        {events.map((event) => {
          event.appointments.appointments.map((single_event) => {
            return <EventCard />;
          });
        })} 
      </div>
    </div>
  );
};

export default Events;
