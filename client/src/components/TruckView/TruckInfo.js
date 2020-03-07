import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const TruckInfo = () => {
    const [truck, SetTruck] = useState({
        id: '',
        username: '',
        email: '',
        menuItems: ''
    })

    useEffect(() => {
        axiosWithAuth()
        .get(`/truck/${id}`)
        .then(res => {
            console.log(res);
            SetTruck(res.data);
        })
        .catch(err => console.log(err));
    }, [id]);

    return (
        <div>
            
        </div>
    )
}

export default TruckInfo
