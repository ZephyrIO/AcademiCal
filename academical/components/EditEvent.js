import { useState, useEffect } from 'react';
import Button from './Button';
import './EditEvent.css';
import axios from 'axios';
import { useRouter } from 'next/navigation'

const EditEvent = () => {
  const [currentEvents, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);

  const router = useRouter();

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

  const editEventHandler = (id) => {
    const eventToEdit = currentEvents.find(event => event._id === id);
    setEditingEvent(eventToEdit);
  }

  const saveEventHandler = (id, updatedEvent) => {
    axios.put(`http://localhost:8085/calendar/events/${id}`, updatedEvent)
      .then(response => {
        console.log('Event updated successfully:', response.data);
        setEvents(prevEvents => prevEvents.map(event => {
          if (event._id === id) {
            return updatedEvent;
          }
          return event;
        }));
        setEditingEvent(null);
      })
      .catch((error) => {
        console.error('Failed to update event:', error);
      });
      router.push('/');
  }

  return (
    <div>
      {currentEvents && currentEvents.map(event => (
        <div key={event._id}>
          {editingEvent && editingEvent._id === event._id ? (
            <div>
              <label>Title:</label>
              <input
                type="text"
                value={editingEvent.title}
                onChange={(e) => setEditingEvent({ ...editingEvent, title: e.target.value })}
              />
              <label>Date:</label>
              <input
                type="date"
                value={editingEvent.date}
                onChange={(e) => setEditingEvent({ ...editingEvent, date: e.target.value })}
              />
              <label>Description:</label>
              <textarea
                value={editingEvent.description}
                onChange={(e) => setEditingEvent({ ...editingEvent, description: e.target.value })}
              />
              <label>Image URL:</label>
              <input
                type="text"
                value={editingEvent.image}
                onChange={(e) => setEditingEvent({ ...editingEvent, image: e.target.value })}
              />
              <Button onClick={() => saveEventHandler(event._id, editingEvent)}>Save</Button>
            </div>
          ) : (
            <div>
              <h2>{event.title}</h2>
              <div className="edit-button">
                <Button onClick={() => editEventHandler(event._id)}>Edit Event</Button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EditEvent;
