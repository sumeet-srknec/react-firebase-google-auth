import React, { useState } from 'react'
import { signUp } from '../functions/auth';

export default function Home() {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const userData = {
        firstname,
        lastname,
        email,
        password
    }

    const handleCreateUser = () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
        } else if (!email) {
            alert("Email is required");
        } else if (!password) {
            alert("Password is required");
        } else {
            signUp(email, password, userData);
        }
    }

    return (
        <>
            <h1 className='text-3xl text-center font-bold mb-2'>Register</h1>
            <div className='grid grid-cols-3 gap-4 max-w-5xl mx-auto'>
                <input type="text" placeholder='firstname' required onChange={(e) => {setFirstname(e.target.value)}}/>
                <input type="text" placeholder="lastname"  required onChange={(e) => {setLastname(e.target.value)}}/>
                <input type="email" placeholder="email"  required onChange={(e) => {setEmail(e.target.value)}}/>
                <input type="password" placeholder="password"  required onChange={(e) => {setPassword(e.target.value)}}/>
                <input type="password" placeholder="confirm"  required onChange={(e) => {setConfirmPassword(e.target.value)}}/>
                <button className='rounded-lg text-white bg-black font-bold' onClick={handleCreateUser}>Register</button>
            </div>
        </>
    )
}
