import React, { useState } from 'react';

import Button from './Button';

import { useRouter } from 'next/navigation'


const DeleteEvent = (props) => {
    const [events, setEvents] = useState([
        // Initial events go here
    ]);

    const deleteEventHandler = (id) => {
        setEvents(prevEvents => prevEvents.filter(event => event.id !== id));
    }

    return (
        <div>
            {events.map(event => (
                <div key={event.id}>
                    <h2>{event.title}</h2>
                    <Button onClick={() => deleteEventHandler(event.id)}>Delete Event</Button>
                </div>
            ))}
        </div>
    );
};


export default DeleteEvent;