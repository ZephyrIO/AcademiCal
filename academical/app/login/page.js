'use client'
import { useState } from 'react';
import Header from '@/components/Header';
import Login from '@/components/Login';

export default function LoginView() {
    return (
        <div>
            <Header />
            <Login />
        </div>
    );
}