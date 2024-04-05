import React from "react";

const EventList = ({events}) => {
    return (
        <Card className="event-list">
            {events && events.map(event => (
                <Event 
                    id={events.id}
                    title = {events.title}
                    description = {events.description}
                    img = {events.img}
                />
            ))}
        </Card>
    );
};