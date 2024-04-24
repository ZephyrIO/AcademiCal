'use client';
import React from 'react';
import Calendar from '@/components/Calendar';
import Header from '@/components/Header';

const CalendarView = () => {
  return (
    <div>
      <Header />
      <h1>Calendar</h1>
      <Calendar />
    </div>
  );
};

export default CalendarView;