'use client'
import { useState } from 'react';
import Header from '@/components/Header';
import Link from 'next/link';
import Button from '@/components/Button';

export default function Login() {
    return (
        <div>
            <Header />
            {/* Insert Login Form Here */}
            <Link href={'/registration'}><Button>Register</Button></Link>
        </div>
    );
}