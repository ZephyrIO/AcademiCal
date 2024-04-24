'use client';
import React from 'react';
import Calendar from '@/components/Calendar';
import HeaderCalendar from '@/components/HeaderCalendar';

const CalendarView = () => {
  return (
    <div>
      <HeaderCalendar />
      <h1>Calendar</h1>
      <Calendar />
    </div>
  );
};

export default CalendarView;