'use client';
import { useState, useContext, useEffect} from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import { useRouter } from 'next/navigation';
import './Login.css';

import Link from 'next/link';
import Button from '@/components/Button';

const Login = () => {
    const { userData, setUserData } = useContext(UserContext);
    const router = useRouter();
    let isLoggedIn = false;

    useEffect(() => {
        if (typeof window !== 'undefined' && isLoggedIn) {
            router.push('/');
        }
    }, [userData.token, router]);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8085/auth/users/login', formData);
            console.log(response.data)
            setUserData({
                token: response.data.token,
                user: response.data.user,
            });
            localStorage.setItem('auth-token', response.data.token);
            isLoggedIn = true;
            router.push('/');
        } catch (err) {
            console.error('Login failed: ', err);
            alert(err.response.data.msg);
        }
    };

    useEffect(() => {
        console.log(userData);
    }, [userData]);

    return (
        <div className="login">
            <h2 className="login-title">Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
               <div className="button-group">
                <button type="submit" className="login">Login</button>
                <button type="button" className="register" onClick={() => router.push('/registration')}>Register</button>
            </div>
                
            </form>
            
            {error && <p>{error}</p>}
            
        </div>
    );
};

export default Login;