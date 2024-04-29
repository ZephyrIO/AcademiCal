import React, { useState, useEffect } from 'react';
import Button from './Button';
import Card from './Card';
import Event from './Event';
import './DeleteEvent.css';
import axios from 'axios';
import { useRouter } from 'next/navigation'

const DeleteEvent = () => {
  const router = useRouter();
  const [currentEvents, setEvents] = useState([]);

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



  const deleteEventHandler = (id) => {
    axios.delete(`http://localhost:8085/calendar/events/${id}`)
      .then(response => {
        console.log('Event deleted successfully:', response.data);
        setEvents(prevEvents => prevEvents.filter(event => event._id !== id));
        router.push('/');
      })
      .catch((error) => {
        alert(error.response.data.msg);
        console.error('Failed to delete event:', error);
      });

  };

  return (
    <div>
      {currentEvents && currentEvents.map(event => (
        <div key={event._id}>
          <Card key={event._id} className="event">
            <Event
              key={event._id}
              title={event.title}
              date={event.date}
              description={event.description}
              image={event.img}
            />
            <div className="delete-button">
              <Button onClick={() => deleteEventHandler(event._id)}>Delete Event</Button>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default DeleteEvent;