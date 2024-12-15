import axios from 'axios';
import React, { useState } from 'react';

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8080/login', {
            username: username,
            password: password
        })
        .then(response => {
            if (response.status === 200) {
                window.location.href = "http://localhost:300/list"; // Redirect on successful login
            }
        })
        .catch(error => {
            console.error('There was an error logging in!', error);
        });
    }

    return (
        <div className='container-fluid'>
            <main className='d-flex justify-content-center mt-5'>
                <form className='border border-2 border-dark shadow p-5 rounded' onSubmit={handleSubmit}>
                    <div className='text-center'>
                        <h2 className='bi bi-person-fill p-4'><span className='ms-3'>User Login</span></h2>
                    </div>
                    <dl>
                        <div className='d-flex justify-content-between p-2'>
                            <dt>User Name :</dt>
                            <dd><input className='form-control ms-3' type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter your email...' /></dd>
                        </div>
                        <div className='d-flex justify-content-between p-2'>
                            <dt>Password :</dt>
                            <dd><input className='form-control ms-3' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your Password...' /></dd>
                        </div>
                    </dl>
                    <div className='d-flex justify-content-center p-1'>
                        <button className='btn btn-primary w-50' type="submit">Login</button>
                    </div>
                </form>
            </main>
        </div>
    );
}
