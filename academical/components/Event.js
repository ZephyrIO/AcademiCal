import React from "react";
const event = (event) => {

    const EventDate = (event) => {new Date(event.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })};

    return (
        <li key={event.id} className="event-list-item">
            <img src={event.image} alt={event.title} className="event-list-image" />
            <div className="event-list-details">
                <h2 className="event-list-title">{event.title}</h2>
                <EventDate date={event.date} />
                <p className="event-list-description">{event.description}</p>
            </div>
        </li>
    )
}
export default event;