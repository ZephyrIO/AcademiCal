import { useState } from 'react';
import Button from './Button';
import './EditEvent.css';


const EditEvent = () => {
  const initialEvents = [
    { id: 1, title: 'Event 1' },
    { id: 2, title: 'Event 2' },
    // add more events here...
  ];

  const [currentEvents, setEvents] = useState(initialEvents);
  const [editingEvent, setEditingEvent] = useState(null);

  const editEventHandler = (id) => {
    const eventToEdit = currentEvents.find(event => event.id === id);
    setEditingEvent(eventToEdit);
  }

  const saveEventHandler = (id, updatedTitle) => {
    setEvents(prevEvents => prevEvents.map(event => {
      if (event.id === id) {
        return { ...event, title: updatedTitle };
      }
      return event;
    }));
    setEditingEvent(null);
  }

  return (
    <div>
      {currentEvents && currentEvents.map(event => (
        <div key={event.id}>
          {editingEvent && editingEvent.id === event.id ? (
            <div>
              <input
                type="text"
                value={editingEvent.title}
                onChange={(e) => setEditingEvent({ ...editingEvent, title: e.target.value })}
              />
              <Button onClick={() => saveEventHandler(event.id, editingEvent.title)}>Save</Button>
            </div>
          ) : (
            <div>
              <h2>{event.title}</h2>
              <div className="edit-button">
                <Button onClick={() => editEventHandler(event.id)}>Edit Event</Button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EditEvent;