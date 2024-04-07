import React, {useState} from 'react';
import Button from "./Button";
import './Header.css';
import Link from 'next/link';

export default function Header(props) {

    return (
        <div className="header">
            <Link href="/calendar-view"> <Button>Calendar</Button> </Link>
            <h1 className="title">AcademiCal</h1>
            {props.loggedIn ? 
            <Link href="/"><Button onClick={props.loginHandler}>Logout</Button></Link> : 
            <Button onClick={props.loginHandler}>Login</Button>}
        </div>
    );
}