

import { Link } from "react-router-dom"
import { useState } from "react";
import axios from "axios"


export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function RegisterUser(ev) {
        ev.preventDefault();
        try {
            await axios.post('/register', {
                name,
                email,
                password,
            });
            alert('Registration successful. Now you can log in')
        }
        catch (e) {
            alert('Registration failed. Please try again later');
        }
    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-md mx-auto px-2" onSubmit={RegisterUser}>
                    <input type="text" placeholder='Vuong'
                        value={name} className="w-full p-2 border border-gray-700 rounded-md mb-4"
                        onChange={ev => setName(ev.target.value)}
                    />
                    <input type="email" placeholder='your@email.com'
                        value={email} className="w-full p-2 border border-gray-700 rounded-md mb-4"
                        onChange={ev => setEmail(ev.target.value)}
                    />
                    <input type="password" placeholder="password"
                        value={password} className="w-full p-2 border border-gray-700 rounded-md mb-4"
                        onChange={ev => setPassword(ev.target.value)}
                    />
                    <button className="primary">Register</button>
                    <div className="text-center py-2  text-black">
                        <span className="mr-1">Already a member</span>
                        <Link className="underline text-bn" to={'/login'}>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}