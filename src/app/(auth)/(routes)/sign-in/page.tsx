'use client'
import React, { useState } from 'react'
import { login } from "./action";



interface FormState {
    message: string;
    status: boolean;
    // Add other properties if needed
}
export default function Login() {

    const initState: FormState = {
        message: '',
        status: false,
    };
    const [loading, setLoading] = useState<boolean>(false);
    const [formState, setFormState] = useState<FormState>();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        try {
            setLoading(true);
            // formAction(formData);
            await login(formData).then((value: FormState) => {
                setFormState(value)
            })
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error(error);
            // Handle error, e.g., display an error message
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        name='username'
                        type="text"
                        placeholder="Enter your username"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        name='password'
                        placeholder="Enter your password"
                    />
                </div>
                <div className="mb-6">
                    {formState?.message}
                </div>
                <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
}
