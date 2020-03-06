import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

function OperatorProfile() {

    const [user, setUser] = useState({});

    const uid = localStorage.getItem('id');

    useEffect(() => {
        axiosWithAuth().get(`/operator/${uid}`)
            .then(res => {
                console.log(res);
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
