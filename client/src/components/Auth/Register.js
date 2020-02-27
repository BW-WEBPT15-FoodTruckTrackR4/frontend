import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Label } from 'reactstrap';
import axios from 'axios';

function Register(props) {

    /* state for handling user input */
    const [user, setUser] = useState({
        username: '',
        password: '',
        email: '',
        role: ''
    });

    /* input change handler */
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    /* handle submit */
    const register = (user) => {
        /* temp filler request */
        axios.post('/api/auth/register', user)
            .then(res => {
                console.log(res);
                /* dispatch */
            })
            .catch(err => {
                console.log(err);
                /* dispatch */
            })
    }

    return (
        <div className="register">
            <Form onSubmit={(e) => {
                e.preventDefault();
                register(user);
            }}>
                <Input name="username" placeholder="Username" value={user.username} autoComplete="off" />
                <Input name="email" placeholder="Email" value={user.email} autoComplete="off" />
                <Input name="password" placeholder="Password" value={user.password} autoComplete="off" />
                <Label htmlFor="role">Role:</Label>
                <Input type="select" name="role" id="role">
                    <option value={user.role}>Operator</option>
                    <option value={user.role}>Diner</option>
                </Input>
                <Button type="submit" className="register-btn">Register</Button>
            </Form>
        </div>
    )
}

export default Register;