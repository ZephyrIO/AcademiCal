import React, { useState, useEffect } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import axios from 'axios';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import AddEvent from '@/components/AddEvent';
import EditEvent from '@/components/EditEvent';

const localizer = momentLocalizer(moment);

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [addEventDate, setAddEventDate] = useState(null);
  const [editEvent, setEditEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get('http://localhost:8085/calendar/events');
      const events = response.data.map((event) => ({
        title: event.title,
        start: new Date(event.date),
        end: new Date(event.date),
        allDay: true,
      }));
      setEvents(events);
    };
    fetchEvents();
  }, []);

  const openAddEventForm = (date) => {
    setAddEventDate(date);
  };

  const openEditEventForm = (event) => {
    setEditEvent(event);
  };

  const closeForm = () => {
    setAddEventDate(null);
    setEditEvent(null);
  };

  return (
    <div style={{ height: '500px' }}>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectSlot={(slotInfo) => openAddEventForm(slotInfo.start)}
        onSelectEvent={(event) => openEditEventForm(event)}
        
        toolbar={true}
      />
      
    </div>
  );
};

export default Calendar;