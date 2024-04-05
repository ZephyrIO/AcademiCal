import React from "react";
import EventDate from "./EventDate";

const event = (event) => {
    return (
        <li key={event.id} className="event-list-item">
            <img src={event.image} alt={event.title} className="event-list-image" />
            <div className="event-list-details">
                <h2 className="event-list-title">{event.title}</h2>
                <EventDate date={event.date}/>
                <p className="event-list-description">{event.description}</p>
            </div>
        </li>
    )
}
export default event;