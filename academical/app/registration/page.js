'use client'
import { useState } from 'react';
import Header from '@/components/Header';
import Link from 'next/link';
import Button from '@/components/Button';
import Register from '@/components/Register';

export default function Registration() {
    return (
        <div>
            <Header />
            <Register />
            <Link href={'/login'}><Button>Login</Button></Link>
        </div>
    );
}