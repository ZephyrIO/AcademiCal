'use client'
import React from 'react';
import AddEvent from "@/components/AddEvent";

export default function AddEventView() {

    const addEventHandler = (event) => {
        console.log(event);
    }

    return (
        <AddEvent onAdd={addEventHandler} />
    )

}