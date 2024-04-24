'use client';
import { useState } from 'react';
import EditEvent from "@/components/EditEvent";
import EventList from "@/components/EventList";
import Header from '@/components/Header';

export default function EditEventView() {
  return (
    <div>
      <Header />
      <EditEvent />
    </div>
  );
}