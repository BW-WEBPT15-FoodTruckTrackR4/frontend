import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { Link } from 'react-router-dom';

/* assets */
import UserAvatar from '../../assets/UserAvatar.svg';

function DinerProfile(props) {

    const [user, setUser] = useState({});
    const [favoriteTrucks, setFavoriteTrucks] = useState([]);

    const uid = localStorage.getItem('id');
    console.log(uid);

    useEffect(() => {
        axiosWithAuth().get(`/diner/${uid}`)
            .then(res => {
                // console.log(res);
                setUser(res.data);
                setFavoriteTrucks(res.data.favoriteTrucks);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div className="dashboard-container">
            <div className="dashboard-card">
                <div className="user-avatar">
                    <img src={UserAvatar} alt="User Avatar" />
                </div>
                <div className="user-info">
                    <h3>Welcome back, {localStorage.getItem('user')}</h3>
                    <p>This is your dashboard where you can view your current
                        favorite trucks, as well as update them.
                    </p>
                </div>
                {console.log(user)}
            </div>

            <div className="favorite-trucks">
                <h3>Your Favorite Trucks</h3>
                {!favoriteTrucks && <p>You don't currently have any favorite trucks. Head to your <Link to="/dashboard/diner">profile settings</Link> to add one!</p>}
                {favoriteTrucks &&
                    <div>
                        {favoriteTrucks.map((truck, index) => {
                            return (
                                <div key={index} className="fav-card">
                                    <h4>Truck Name: </h4>
                                    <p>{truck}</p>
                                </div>
                            )
                        })}
                    </div>}
            </div >
        </div >
    )
}

export default DinerProfile
