'use client'
import {useState} from 'react';
import AddEvent from "@/components/AddEvent";
import EventList from "@/components/EventList";

export default function AddEventView() {

    const addEventHandler = (event) => {
        setEvents([...events, event]);
        
    }
    const [events, setEvents] = useState([]);
    return (
        <div>
            <AddEvent onAdd={addEventHandler} />
        <EventList events={events} />
        </div>
        
    );

}