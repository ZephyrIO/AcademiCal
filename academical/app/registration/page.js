'use client'
import { useState } from 'react';
import Header from '@/components/Header';
import Link from 'next/link';
import Button from '@/components/Button';

export default function Registration() {
    return (
        <div>
            <Header />
            <Link href={'/login'}><Button>Login</Button></Link>
        </div>
    );
}