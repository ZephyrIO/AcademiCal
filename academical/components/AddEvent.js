import React, { useState } from 'react';

import Card from './Card';
import Button from './Button';
import './AddEvent.css';
import { useRouter } from 'next/navigation'

const axios = require('axios');

const AddEvent = (props) => {
    const [enteredTitle, setTitle] = useState('');
    const [enteredDescription, setDescription] = useState('');
    const [enteredDate, setDate] = useState('');
    const [enteredImage, setImage] = useState('');
    const router = useRouter();

    const setTitleHandler = (event) => {
        setTitle(event.target.value);
    };
    const setDescriptionHandler = (event) => {
        setDescription(event.target.value);
    };
    const setDateHandler = (event) => {
        setDate(event.target.value);
    };
    const setImageHandler = (event) => {
        setImage(event.target.value);
    };
    const addEventHandler = (event) => {
        event.preventDefault();
        if (title === '') {
          return;
        }
        const eventData = {
          id: Math.random().toString(),
          title: enteredTitle,
          description: enteredDescription,
          date: new Date(enteredDate),
          img: enteredImage
        }
        console.log(eventData);
        setTitle('');
        setDate('');
        setDescription('');
        setImage('');
        axios.post('http://localhost:8085/calendar/events/', eventData)
          .then(response => {
            console.log('Event added successfully:', response.data);
            // Call onClose to close the form
            props.onClose();
            router.push('/');
          })
          .catch((error) => {
            alert(error.response.data.msg);
            console.error('Error adding event:', error);
          });
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