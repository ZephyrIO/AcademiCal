'use client';
import AddEvent from "@/components/AddEvent";
import Button from "@/components/Button";
import Header from "@/components/Header";
import {useState} from 'react';


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
            <Button>Add Event</Button>
            <Button>Delete Event</Button>
        </div>
    );   
}