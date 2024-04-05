'use client';
import Button from "@/components/Button";
import EventList from "@/components/EventList";
import Header from "@/components/Header";
import {useState} from 'react';
import Link from 'next/link';


export default function Home() {
    const testEvents = [
        {
            id: '1',
            title: 'Biology Exam',
            date: '2024-04-18',
            description: 'Biology Exam at 9:00 AM in room 101',
            image: 'https://www.bookshare.org/cover/eT/eT0ih1bpGMreuEOpnj99L3nSTVdbRHxTG4U3CSIaeOo-MEDIUM.jpg'
        },
        {
            id: '2',
            title: 'CSCI 13-1 Lab 6',
            date: '2024-05-13',
            description: 'CSCI 1301 Lab 6 Due',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnuE2yzByGjXJTdYalddnWAPlQCeVRe6HDvstAfWI2DA&s'
        },
        {
            id: '3',
            title: 'Math Exam',
            date: '2024-05-15',
            description: 'Math Exam at 3:00 PM in room 324',
            image: 'https://news.harvard.edu/wp-content/uploads/2022/11/iStock-mathproblems.jpg'
        }
    ];
    const  [events, setEvents] = useState(testEvents);
    const addEventHandler = (event) => {
        setEvents([...events, event]);
    };
        
    return (
        <div>  
            <Header />
            <EventList events={testEvents} />
            <Link href="/add-event"> <Button>Add Event</Button> </Link>
            <Link href="/delete-event"> <Button>Delete Event</Button> </Link>
        </div>
    );   
}