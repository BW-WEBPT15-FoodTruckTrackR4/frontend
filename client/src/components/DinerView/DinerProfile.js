import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

function DinerProfile(props) {

    const [user, setUser] = useState({});

    const uid = localStorage.getItem('id');
    console.log(uid);

    useEffect(() => {
        axiosWithAuth().get(`/diner/${uid}`)
            .then(res => {
                // console.log(res);
                setUser(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [uid]);

    return (
        <div className="dashboard-container">
            <h3>Welcome back, {localStorage.getItem('user')}</h3>
            {console.log(user)}
        </div>
    )
}

export default DinerProfile
