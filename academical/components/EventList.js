import React, { useState, useEffect } from "react";
import Card from "./Card";
import Event from "./Event";
import "./EventList.css";
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8085/calendar/events')
      .then(response => {
        console.log('Events fetched successfully:', response.data);
        setEvents(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch events:', error);
      });
  }, []);

  return (
    <>
      {events.map((event) => (
        <Card key={event._id} className="event">
          <Event
            key={event._id}
            title={event.title}
            date={event.date}
            description={event.description}
            image={event.img}
          />
        </Card>
      ))}
    </>
  );
};

export default EventList;