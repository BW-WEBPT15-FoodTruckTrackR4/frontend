import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

function OperatorProfile() {

    const [user, setUser] = useState({});

    const id = localStorage.getItem('id');

    useEffect(() => {
        axiosWithAuth().get(`/truck/${id}`)
            .then(res => {
                console.log(res);
                setUser(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div>
            <h3>Welcome back, {localStorage.getItem('user')}</h3>
        </div>
    )
}

export default OperatorProfile
