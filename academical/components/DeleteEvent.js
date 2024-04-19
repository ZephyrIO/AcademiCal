import { useState } from 'react';
import Button from './Button';

const DeleteEvent = () => {
  const initialEvents = [
    { id: 1, title: 'Event 1' },
    { id: 2, title: 'Event 2' },
    // add more events here...
  ];

  const [currentEvents, setEvents] = useState(initialEvents);

  const deleteEventHandler = (id) => {
    setEvents(prevEvents => prevEvents.filter(event => event.id !== id));
  }

  return (
    <div>
      {currentEvents && currentEvents.map(event => (
        <div key={event.id}>
          <h2>{event.title}</h2>
          <Button onClick={() => deleteEventHandler(event.id)}>Delete Event</Button>
        </div>
      ))}
    </div>
  );
};

export default DeleteEvent;