import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import AddItem from './AddItem'
import UpdateItem from './UpdateItem'

import UserAvatar from '../../assets/UserAvatar.svg';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

function OperatorProfile(props) {

    const [user, setUser] = useState({
        imageOfTruck: '',
        cuisineType: '',
    });

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
    }, [id]);

    const handleChange = e => {
        setUser({
            ...user,
        [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        axiosWithAuth()
        .post(`/truck/${id}`, user)
        .then(res => {
            console.log(res);
            setUser({
                ...user,
                imageOfTruck: '',
                cuisineType: ''
            })
            props.history.push('/dashboard')
        })
        .catch(err => console.log('failed to create new truck', err));
    };


    const deleteTruck = (truck) => {
        axiosWithAuth()
        .delete(`truck/${id}`, truck)
        .then(res => {
            props.history.push(`/dashboard`)
        })
        .catch(err => console.log(err));
    };

    return (
        <div className='dashboard-container'>
            <div className='dashboard-card'>
                <div className='user-avatar'>
                    <img src={UserAvatar} alt='User Avatar' />
                </div>
                <div className='user-info'>
                <h3>Welcome back, {localStorage.getItem('user')}</h3>
                <p>This is your dashboard where you can view the trucks that you own and make updates to them.</p>
                </div>
            </div>

            <div className='owned-trucks'>
            <form onSubmit={handleSubmit}>
                <input
                    type='url'
                    name='imageOfTruck'
                    value={user.imageOfTruck}
                    onChange={handleChange}
                    placeholder='Photo Url'
                />
                <input
                    type='text'
                    name='cuisineType'
                    value={user.cuisineType}
                    onChange={handleChange}
                    placeholder='Type of food offered'
                />
                
                <Button className='register-btn' type='submit'>Add Truck</Button>
            </form>

            </div>
        </div>
    )
}

export default OperatorProfile
