import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

function DinerProfile(props) {

    const [trucks, setTrucks] = useState([]);

    useEffect(() => {
        axiosWithAuth().get(`/trucks`)
            .then(res => {
                // console.log(res);
                setTrucks(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            {console.log(trucks)}
            <h2>Available Trucks:</h2>
            {
                trucks.map((truck, index) => {
                    return (
                        <div className="truck-card" key={index}>
                            <img src={truck.imageOfTruck} alt="Truck View" />
                            <p>Cuisine Type: {truck.cuisineType}</p>
                            <p>Customer Rating Average: {truck.customerRatingAvg}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DinerProfile
