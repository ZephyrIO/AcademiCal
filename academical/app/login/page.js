'use client'
import { useState } from 'react';
import Header from '@/components/Header';
import Link from 'next/link';
import Button from '@/components/Button';
import Login from '@/components/Login';

export default function LoginView() {
    return (
        <div>
            <Header />
            <Login />
            <Link href={'/registration'}><Button>Register</Button></Link>
        </div>
    );
}