import React from "react";
import Card from "./Card";
import Event from "./Event";
const EventList = (props) => {
    return (
        <>
            {props.events.map((event) => (
                    <Card className="event">
                    <Event 
                        key={event.id}
                        title = {event.title}
                        date = {event.date}
                        description = {event.description}
                        image = {event.image}
                    />
                    </Card>
                ))}
            </>
    );
};

export default EventList;