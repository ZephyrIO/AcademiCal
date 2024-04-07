import React from "react";
import Card from "./Card";
import Event from "./Event";
import "./EventList.css";
const EventList = (props) => {
    return (
        <>
            {props.events.map((event) => (
                <Card key={event.id} className="event">
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