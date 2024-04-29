import React, { useContext } from 'react';
import Button from "./Button";
import './Header.css';
import Link from 'next/link';
import UserContext from '../context/UserContext';
import { useState, useEffect } from 'react';

export default function Header({ userData, logoutHandler, isLoggedIn, handleLogin }) {
    const userContext = useContext(UserContext);
    useEffect(() => {
        if (userData && userData.token) {
            isLoggedIn = true;
        } else {
            isLoggedIn = false;
        }
    }, [userData, handleLogin]);

    return (
        <div className="header">
            <Link href="/calendar-view"> <Button>Calendar</Button> </Link>
            <h1 className="title"><Link href="/">AcademiCal</Link></h1>
            {isLoggedIn ? (
                <Link href="/"><Button onClick={logoutHandler}>Logout</Button></Link>) : (
                <Link href="/login"><Button>Login</Button></Link>)}
        </div>
    );
}