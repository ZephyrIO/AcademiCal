import React, { useState } from 'react';

import Card from './Card';
import Button from './Button';

const AddEvent = (props) => {
    const [enteredTitle, setTitle] = useState('');
    const [enteredDescription, setDescription] = useState('');
    const [enteredImage, setImage] = useState('');

    const setTitleHandler = (event) => {
        setTitle(event.target.value);
    };
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
            description: enteredDescription,
            img: enteredImage
        }
        props.onAdd(eventData);
        setTitle('');
        setDescription('');
        setImage('');
    }
    
    return (
        <Card>
            <form onSubmit={addEventHandler}>
        <label>Title</label>
        <input
          id="title"
          type="text"
          value={enteredTitle}
          onChange={setTitleHandler}
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
        <Button type="submit">Add User</Button>
      </form>
        </Card>
    );


};
export default AddEvent;