import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth.js';
import { Button, Form, Input } from 'reactstrap';

function Login() {

    /* not sure how you and the backend want to handle
        being able to login with either your username or password */
    const [user, setUser] = useState({
        usernameEmail: '',
        password: ''
    })

    /* handle input change */
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    /* login using axiosWithAuth */
    const login = (user) => {
        /* temp */
        axiosWithAuth().post('/api/auth/login', user)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div class="auth-form">
            <Form onSubmit={(e) => {
                e.preventDefault();
                login(user);
            }}>
                <Input name="usernameEmail" placeholder="Username or Email" value={user.usernameEmail} autoComplete="off" />
                <Input name="password" placeholder="Password" value={user.password} autoComplete="off" />
                <Button type="submit" className="login-btn">Login</Button>
            </Form>
        </div>
    )
}

export default Login;