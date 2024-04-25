import React, {useContext} from 'react';
import Button from "./Button";
import './Header.css';
import Link from 'next/link';
import UserContext from '../context/UserContext';
import {useState, useEffect} from 'react';

export default function Header({ userData, logoutHandler}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (userData && userData.token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [userData]);

    return (
        <div className="header">
            <Link href="/calendar-view"> <Button>Calendar</Button> </Link>
            <h1 className="title">AcademiCal</h1>
            {isLoggedIn ?
            <Link href="/"><Button onClick={logoutHandler}>Logout</Button></Link> : 
            <Link href="/login"><Button>Login</Button></Link>}
        </div>
    );
}