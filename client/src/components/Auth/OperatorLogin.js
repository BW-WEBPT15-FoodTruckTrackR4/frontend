import React, { useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth.js';
import { Button, Form, Input, Alert } from 'reactstrap';
import { useHistory, Link } from 'react-router-dom';

function OperatorLogin() {

    let history = useHistory();

    /* not sure how you and the backend want to handle
        being able to login with either your username or password */
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    /* state for errors and success when validating */
    const [err, setErr] = useState('');
    const [success, setSuccess] = useState('');

    /* handle input change */
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    /* login using axiosWithAuth */
    const login = (user) => {

        /* validation */
        /* I tried figuring out the availity validation with Reacstrap, and it wans't clicking
            for me, so I just fell back to vanilla JavaScript validation for the forms. */

        if (user.username === '' && user.password === '') {
            setErr('Both fields must be filled out.');
        }
        else if (user.username === '') {
            setErr('You must enter in a valid username or email address.');
        }
        else if (user.password === '') {
            setErr('You must enter in your password.');
        }
        else if (user.username.length > 254 || user.username.length < 5) {
            setErr('Please enter a valid username or email address that is at least 5 characters long.');
        }
        else if (user.password.length > 128 || user.password.length < 8) {
            setErr('Please enter a valid password that is AT LEAST 8 characters long.');
        }
        else if (user.username.match(/[^a-z0-9@.]/gi, '')) {
            setErr('Please enter a valid, alphanumeric username or email address.');
        }
        else {
            axiosWithAuth().post('/operator/login', user)
                .then(res => {
                    console.log(res);
                    localStorage.setItem('token', res.data.token);
                    setSuccess('Login successful...');
                    history.push('/Dashboard');
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    return (
        <div className="auth-form">
            <Form onSubmit={(e) => {
                e.preventDefault();
                login(user);
                setUser({
                    usernameEmail: '',
                    password: ''
                });
            }}>
                <Input
                    name="username"
                    placeholder="Username"
                    value={user.username}
                    autoComplete="off"
                    onChange={handleChange} />
                <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={user.password}
                    autoComplete="off"
                    onChange={handleChange} />
                <Button type="submit" className="login-btn">Login</Button>
            </Form>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
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

export default OperatorLogin;