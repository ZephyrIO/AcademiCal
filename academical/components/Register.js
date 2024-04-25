import {useState, useContext} from 'react';
import axios from 'axios';
import UserContext from '@/context/UserContext';
import {useRouter} from 'next/navigation';

const Register = () => {
    const { setUserData } = useContext(UserContext);
    const router = useRouter();

    const [form, setForm] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        username: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:8085/auth/users/register', form);
            const data = await axios.post('http://localhost:8085/auth/users/login', {
                email: form.email,
                password: form.password
            });
            setUserData({
                token: data.token,
                user: data.user
            });
            localStorage.setItem('auth-token', data.token);
            router.push('/')
        } catch (err) {
            console.error(err);
            // console.log(err.response.data.message)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} />
            <input type="text" name="username" placeholder="username" value={form.username} onChange={handleChange} />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;