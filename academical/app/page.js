'use client';
import Button from "@/components/Button";
import EventList from "@/components/EventList";
import Header from "@/components/Header";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import './globals.css';
import styles from './page.module.css';
import UserContext from '../context/UserContext';
import { useRouter } from 'next/navigation';


export default function Home() {
    const router = useRouter();
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
    const [events, setEvents] = useState(testEvents);
    const addEventHandler = (event) => {
        setEvents([...events, event]);
    };

    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = (status) => {
        setLoggedIn(status);
    };

    useEffect(() => {
        if (localStorage.getItem('auth-token')) {
            setLoggedIn(true);
        }
    });

    const logoutHandler = () => {
        setUserData({ token: null, user: null })
        localStorage.removeItem('auth-token');
        setLoggedIn(false);
        router.push('/');
    }

    const test = () => {
        // setUserData({token: undefined, user: undefined})
        // localStorage.removeItem('auth-token');
        // setLoggedIn(false);
        console.log(loggedIn)
        console.log(userData)
        if (loggedIn) {
            console.log(userData.token)
        }
    }


    const [userData, setUserData] = useState(null);

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            <div className="main">

                <Header userData={userData} logoutHandler={logoutHandler} isLoggedIn={loggedIn} handleLogin={handleLogin} />
                <div className={styles.buttonContainer}>
                    <Link href="/add-event"> <Button disabled={loggedIn}>Add Event</Button> </Link>
                    <Link href="/delete-event"> <Button disabled={loggedIn}>Delete Event</Button> </Link>

                    <Link href="/edit-event"> <Button disabled={loggedIn}>Edit Event</Button> </Link>

                </div>
                <EventList events={testEvents} />
            </div>
        </UserContext.Provider>
    );
}