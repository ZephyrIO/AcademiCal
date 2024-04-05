import React, {useState} from 'react';
import Button from "./Button";
import './Header.css';
import Link from 'next/link';

export default function Header(props) {

    const [loggedIn, setLoggedIn] = useState(false);

    const loginHandler = () => {
        setLoggedIn(!loggedIn);
    };

    return (
        <div className="header">
            <Link href="/calendar-view"> <Button>Calendar</Button> </Link>
            <h1 className="title">AcademiCal</h1>
            {loggedIn ? <Button onClick={loginHandler}>Logout</Button> : <Button onClick={loginHandler}>Login</Button>}
        </div>
    );
}