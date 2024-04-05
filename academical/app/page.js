'use client';
import AddEvent from "@/components/AddEvent";
import Button from "@/components/Button";
import EventList from "@/components/EventList";
import Header from "@/components/Header";
import {useState} from 'react';
import Link from 'next/link';


export default function Home() {
    const testEvent = [
        {
            id: '1',
            title: 'test',
            description: 'test',
            image: 'https://randomuser.me/api/portraits/men/75.jpg'
        }
    ];
    const  [events, setEvents] = useState(testEvent);
    const addEventHandler = (event) => {
        setEvents([...events, event]);
    };
        
    return (
        <div>  
            <Header />
            <EventList events={testEvent} />
            <Link href="/add-event"> <Button>Add Event</Button> </Link>
            <Link href="/delete-event"> <Button>Delete Event</Button> </Link>
        </div>
    );   
}