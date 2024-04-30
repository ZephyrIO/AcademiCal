import React, { useContext } from 'react';
import Button from "./Button";
import './Header.css';
import Link from 'next/link';
import UserContext from '../context/UserContext';
import { useState, useEffect } from 'react';

export default function Header({logoutHandler}) {
    const { userData, setUserData } = useContext(UserContext);
    const [isToken, setIsToken] = useState(false);


    useEffect(() => {
        console.log('isToken', isToken);
    }, [isToken]);

    useEffect(() => {
        const storedUserDataString = localStorage.getItem('userData');
        if (storedUserDataString && storedUserDataString !== "undefined") {
            try {
                const storedUserData = JSON.parse(storedUserDataString);
                if (storedUserData && storedUserData.token) {
                    setUserData(storedUserData);
                    setIsToken(true);
                }
            } catch (error) {
                console.error("Error parsing stored user data", error);
            }
        }
    }, []);

    useEffect(() => {
        setIsToken(!!(userData && userData.token));
        localStorage.setItem('userData', JSON.stringify(userData));
    }, [userData]);

    return (
        <div className="header">
            <Link href="/calendar-view"> <Button>Calendar</Button> </Link>
            <h1 className="title"><Link href="/">AcademiCal</Link></h1>
            {isToken ? (
                <Link href="/"><Button onClick={logoutHandler}>Logout</Button></Link>) : (
                <Link href="/login"><Button>Login</Button></Link>)}
        </div>
    );
}