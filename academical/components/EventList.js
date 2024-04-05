import React from "react";
import Card from "./Card";

const EventList = (props) => {
    return (
        <Card className="event-list">
            {props.events.map(event => (
                <Event 
                    id={event.id}
                    title = {event.title}
                    description = {event.description}
                    image = {event.image}
                />
            ))}
        </Card>
    );
};

export default EventList;