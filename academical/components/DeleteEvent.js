import React, { useState, useEffect } from 'react';
import Button from './Button';
import './DeleteEvent.css';
import axios from 'axios';
const DeleteEvent = () => {
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
          })
          .catch((error) => {
            console.error('Failed to delete event:', error);
          });
      };
    
      return (
        <div>
          {currentEvents && currentEvents.map(event => (
            <div key={event._id}>
              <h2>{event.title}</h2>
              <div className="delete-button">
                <Button onClick={() => deleteEventHandler(event._id)}>Delete Event</Button>
              </div>
            </div>
          ))}
        </div>
      );
    };
    
    export default DeleteEvent;