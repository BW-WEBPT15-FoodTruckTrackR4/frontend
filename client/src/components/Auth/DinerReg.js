import React, { useState } from 'react';
import { Button, Form, Input, Alert } from 'reactstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function DinerReg(props) {

    const history = useHistory();

    /* state for handling user input */
    const [user, setUser] = useState({
        username: '',
        password: '',
        currentLocation: '',
        favoriteTrucks: []
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
        // else if (user.email.length < 5 || user.email.length > 254) {
        //     setErr('Please enter a valid email address.');
        //     return;
        // }
        else if (user.password.length < 8 || user.password.length > 128) {
            setErr('Please enter a password that is at least 8 characters long.');
            return;
        }
        else if (user.currentLocation === '') {
            setErr('Please enter your current location.');
            return;
        }
        else if (user.username.match(/[^a-z0-9]/gi, '')) {
            setErr('Please enter a valid username that containts only alphanumeric characters.');
            return;
        }
        // else if (!user.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        //     setErr('Please enter a valid email address.');
        //     return;
        // }
        else {

            console.log(user);
            setSuccess('Registering...');

            /* temp filler request */
            axios.post('https://foodtrucktrackr4.herokuapp.com/api/diner/register', user)
                .then(res => {
                    console.log(res);
                    history.push('/diner/login');
                })
                .catch(err => {
                    console.log(err);
                    history.push('/diner/login');
                })
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
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    autoComplete="off"
                    onChange={handleChange}
                />
                <Input
                    name="currentLocation"
                    placeholder="Home Address"
                    value={user.currentLocation}
                    autoComplete="off"
                    onChange={handleChange}
                />
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

export default DinerReg;