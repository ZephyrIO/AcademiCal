import React, { useState } from 'react';

import Card from './Card';
import Button from './Button';
import './AddEvent.css';
import { useRouter } from 'next/navigation'

const AddEvent = (props) => {
    const [enteredTitle, setTitle] = useState('');
    const [enteredDate, setDate] = useState('');
    const [enteredDescription, setDescription] = useState('');
    const [enteredImage, setImage] = useState('');
    const router = useRouter();

    const setTitleHandler = (event) => {
        setTitle(event.target.value);
    };
    const setDateHandler = (event) => {
        setDate(event.target.value);
    }
    const setDescriptionHandler = (event) => {
        setDescription(event.target.value);
    };
    const setImageHandler = (event) => {
        setImage(event.target.value);
    };
    const addEventHandler = (event) => {
        event.preventDefault();
        if(title === ''){
            return;
        }
        const eventData = {
            id: Math.random().toString(),
            title: enteredTitle,
            date: new Date(enteredDate),
            description: enteredDescription,
            img: enteredImage
        }

        console.log(eventData);
        setTitle('');
        setDate('');
        setDescription('');
        setImage('');
        router.push('/');
    }
    
    return (
        <div className="add-event">

            <Card>

                <form onSubmit={addEventHandler}>

                    <label>Title</label>
                    <input
                    id="title"
                    type="text"
                    value={enteredTitle}
                    onChange={setTitleHandler}
                    />

                    <label>Date</label>
                    <input
                    id="date"
                    type="date"
                    value={enteredDate}
                    onChange={setDateHandler}
                    />

                    <label>Description</label>
                    <input
                    id="description"
                    type="text"
                    value={enteredDescription}
                    onChange={setDescriptionHandler}
                    />

                    <label>Link to image</label>
                    <input
                    id="img"
                    type="text"
                    value={enteredImage}
                    onChange={setImageHandler}
                    />

                    <Button type="submit">Add Event</Button>

                </form>
        </Card>
            
        </div>
    );
};
export default AddEvent;