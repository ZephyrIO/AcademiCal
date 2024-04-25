import { useState, useEffect } from 'react';
import Button from './Button';
import Event from './Event';
import Card from './Card';
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
        // Call onClose to close the form
        props.onClose();
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
            <div className='editEvent'>
              <Card key={event._id} className="event">
                <label>Title:</label>
                <input
                  type="text"
                  value={editingEvent.title}
                  onChange={(e) => setEditingEvent({ ...editingEvent, title: e.target.value })}
                />
                <br />
                <label>Date:</label>
                <input
                  type="date"
                  value={editingEvent.date}
                  onChange={(e) => setEditingEvent({ ...editingEvent, date: e.target.value })}
                />
                <br />
                <label>Description:</label>
                <textarea
                  value={editingEvent.description}
                  onChange={(e) => setEditingEvent({ ...editingEvent, description: e.target.value })}
                />
                <br />
                <label>Image URL:</label>
                <input
                  type="text"
                  value={editingEvent.img}
                  onChange={(e) => setEditingEvent({ ...editingEvent, img: e.target.value })}
                />
                <br />
                <Button onClick={() => saveEventHandler(event._id, editingEvent)}>Save</Button>
              </Card>
            </div>
          ) : (
            <Card key={event._id} className="event">
              <Event
                key={event._id}
                title={event.title}
                date={event.date}
                description={event.description}
                image={event.img}
              />
              <div className="edit-button">
                <Button onClick={() => editEventHandler(event._id)}>Edit Event</Button>
              </div>
            </Card>
          )}
        </div>
      ))}
    </div>
  );
};

export default EditEvent;
