import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import AddItem from './AddItem'
import UpdateItem from './UpdateItem'

import UserAvatar from '../../assets/UserAvatar.svg';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

function OperatorProfile(props) {

    const [user, setUser] = useState({});
    const [trucksOwned, setTrucksOwned] = useState({});

    const id = localStorage.getItem('id');

    useEffect(() => {
        axiosWithAuth().get(`/truck/${id}`)
            .then(res => {
                console.log(res);
                setUser(res.data);
                setTrucksOwned(res.data.trucksOwned);
            })
            .catch(err => {
                console.log(err);
            })
    }, [id]);

    const deleteTruck = (truck) => {
        axiosWithAuth()
        .delete(`turck/${id}`, truck)
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

            <div className="owned-trucks">
                <h3>Your Trucks</h3>
                {!trucksOwned.length && <p>You don't currently have any of your trucks listed. Head to your <Link to="/dashboard/operator">profile settings</Link> to add one!</p>}
                {trucksOwned &&
                    <div>
                        {trucksOwned.map((truck, index) => {
                            return (
                                <div key={index} className="fav-card">
                                    <h4>Truck Name: </h4>
                                    <p>{truck}</p>
                                </div>
                            )
                        })}
                    </div>}
                    <Link to={`/update-menu/${user.id}`}><Button outline color='primary'>Update</Button></Link>
                    <Button outline color='danger' onClick={deleteTruck}>Delete</Button>
            </div >
        </div>
    )
}

export default OperatorProfile
