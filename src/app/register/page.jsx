"use client"

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { type } from './../../../.next/types/routes.d';
import Link from 'next/link';

function RegisterPage() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confrimPassword, setConfrimPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password != confrimPassword) {
            setError("Password do not match!");
            return;
        }

        if (!name || !email || !password || !confrimPassword) {
            setError("Please complate all input!")
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/register", {
                method: "POST",
                header: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, password })
            });

            if (res.ok) {
                const form = e.target;
                setError("");
                form.reset();
            } else {
                console.log("User registration failed.");
            }

        } catch (error) {
            console.log("Error during registration: ", error);
        }
    }

    
    return (
        <div>
            <Navbar />
            <div className='container mx-auto py-5'>
                <h3>Register Page</h3>
                <hr className='my-3' />
                <form onSubmit={handleSubmit}>

                    {error && (
                        <div className='bg-red-500 text-sm text-while py-1 px-3 rounded-md mt-2'>
                            {error}
                        </div>
                    )}
                    
                    <input onChange={(e) => setName(e.target.value)} className='block bg-gray-300 p-2 my-2 rounded-md' type="text" placeholder='Enter your name' />
                    <input onChange={(e) => setEmail(e.target.value)} className='block bg-gray-300 p-2 my-2 rounded-md' type="email" placeholder='Enter your email' />
                    <input onChange={(e) => setPassword(e.target.value)} className='block bg-gray-300 p-2 my-2 rounded-md' type="password" placeholder='Enter your password' />
                    <input onChange={(e) => setConfrimPassword(e.target.value)} className='block bg-gray-300 p-2 my-2 rounded-md' type="password" placeholder='Comfirm your password' />
                    <button type='submit' className='bg-green-500 p-2 rounded-md text-while'>Sign up</button>
                </form>
                <hr className='my-3' />
                <p>Do not have an account? go to <Link className='text-blue-500 hover:underline' href="/login">Login</Link> Page</p>
            </div>
        </div>
    )
}

export default RegisterPage  