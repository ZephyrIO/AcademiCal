'use client'
import { useState } from 'react';
import DeleteEvent from "@/components/DeleteEvent";
import EventList from "@/components/EventList";
import Header from '@/components/Header';

export default function DeleteEventView() {
  return (
    <div>
      <Header />
      <DeleteEvent />
    </div>
  );
}