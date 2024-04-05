import React from "react";

const EventList = ({event}) => {
    return (
        <Card className="event-list">
            {event && event.map(event => (
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