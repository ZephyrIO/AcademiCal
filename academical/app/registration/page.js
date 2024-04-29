'use client'
import { useState } from 'react';
import Header from '@/components/Header';
import Register from '@/components/Register';

export default function RegistrationView() {
    return (
        <div>
            <Header />
            <Register />
        </div>
    );
}