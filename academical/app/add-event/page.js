'use client'
import {useState} from 'react';
import AddEvent from "@/components/AddEvent";
import EventList from "@/components/EventList";
import Header from '@/components/Header';
import './page.css';

export default function AddEventView() {
    const [events, setEvents] = useState([]);

    const addEventHandler = (event) => {
        setEvents([...events, event]);
        
    };

    return (
        <div>
            <Header />
            <AddEvent onAdd={addEventHandler} />
            <EventList events={events} />
        </div>
    );

}