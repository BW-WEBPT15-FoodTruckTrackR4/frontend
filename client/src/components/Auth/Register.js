import React, { useState } from 'react';
import { Button, Form, Input, Label, Alert } from 'reactstrap';
// import axios from 'axios';

function Register(props) {

    /* state for handling user input */
    const [user, setUser] = useState({
        username: '',
        password: '',
        email: '',
        role: 'operator'
    });

    /* error and success state for validation */
    const [err, setErr] = useState('');
    const [success, setSuccess] = useState('');

    /* input change handler */
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    /* handle submit */
    const register = (user) => {

        /* validation */
        if (user.username === '' || user.password === '' || user.email === '') {
            setErr('You must fill out all of the fields to register.');
            return;
        }
        else if (user.username.length < 5 || user.username.length > 254) {
            setErr('Please make sure that your username is at least 5 characters long.');
            return;
        }
        else if (user.email.length < 5 || user.email.length > 254) {
            setErr('Please enter a valid email address.');
            return;
        }
        else if (user.password.length < 8 || user.password.length > 128) {
            setErr('Please enter a password that is at least 8 characters long.');
            return;
        }
        // else if (user.username.match(/[^a-z0-9]/gi, '')) {
        //     setErr('Please enter a valid username that containts only alphanumeric characters.');
        //     return;
        // }
        // else if (!user.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        //     setErr('Please enter a valid email address.');
        //     return;
        // }
        else {

            console.log(user);
            setSuccess('Registering...');

            /* temp filler request */
            // axios.post('/api/auth/register', user)
            //     .then(res => {
            //         console.log(res);
            //         /* dispatch */
            //     })
            //     .catch(err => {
            //         console.log(err);
            //         /* dispatch */
            //     })
        }
    }

    return (
        <div className="auth-form">
            <Form onSubmit={(e) => {
                e.preventDefault();
                register(user);
            }}>
                <Input
                    name="username"
                    placeholder="Username"
                    value={user.username}
                    autoComplete="off"
                    onChange={handleChange}
                />
                <Input
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    autoComplete="off"
                    onChange={handleChange}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    autoComplete="off"
                    onChange={handleChange}
                />
                <Label htmlFor="role">Role:</Label>
                <Input type="select" name="role" id="role" onChange={handleChange} value={user.role}>
                    <option value="operator" name="operator">Operator</option>
                    <option value="diner" name="diner">Diner</option>
                </Input>
                <Button type="submit" className="register-btn">Register</Button>
            </Form>
            {err &&
                <Alert style={{ marginTop: '10px' }} color="danger">
                    {err}
                </Alert>}
            {success &&
                <Alert style={{ marginTop: '10px' }} color="success">
                    {success}
                </Alert>}
        </div>
    )
}

export default Register;