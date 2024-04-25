'use client'
import { useState } from 'react';
import Header from '@/components/Header';
import Link from 'next/link';
import Button from '@/components/Button';

export default function Registration() {
    return (
        <div>
            <Header />
            {/* Insert Registration Form Here */}
            <Link href={'/login'}><Button>Login</Button></Link>
        </div>
    );
}