import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

function DinerSettings(props) {

    const [trucks, setTrucks] = useState([]);

    useEffect(() => {
        axiosWithAuth().get(`/trucks`)
            .then(res => {
                console.log(res);
                setTrucks(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const history = useHistory();

    const user = localStorage.getItem('user');
    const id = localStorage.getItem('id');

    /* for errors */
    const [err, setErr] = useState('');

    const [toEdit, setToEdit] = useState({
        username: user,
        password: '',
        favoriteTrucks: []
    });

    const handleChange = (e) => {

        setToEdit({
            ...toEdit,
            favoriteTrucks: e.target.value.split(',').map(item => item.trim())
        });
    }

    const inputChange = (e) => {
        setToEdit({
            ...toEdit,
            [e.target.name]: e.target.value
        })
    }

    const update = (toEdit) => {
        // console.log(toEdit);
        axiosWithAuth().put(`/diner/${id}`, toEdit)
            .then(res => {
                console.log(res);
                history.push(`/dashboard`);
            })
            .catch(err => {
                console.log(err);
                setErr('Invalid truck name or password.');
            })
    }

    const deleteTruck = (trucks) => {
        axiosWithAuth()
        .delete(`diner/${id}`, trucks)
        .then(res => {
            props.history.push(`/dashboard`)
        })
        .catch(err => console.log(err));
    };

    return (
        <div className="diner-trucks">
            <p>Please update your list of favorite trucks, separated by commas.</p>

            <form onSubmit={(e) => {
                e.preventDefault();
                update(toEdit);
            }}>
                <input
                    type="text"
                    onChange={handleChange}
                    placeholder="Taco Tops..."
                />
                <input
                    type="password"
                    name="password"
                    value={toEdit.password}
                    onChange={inputChange}
                    placeholder="Confirm Password"
                />
                <button type="submit">Update</button>
                {err && <p>{err}</p>}
                <button type='button' onClick={deleteTruck}>Delete</button>
            </form>

            <div className="truck-list">
                {trucks.map((truck, index) => {
                    return (
                        <div key={index} className="ind-truck">
                            <div className="truck-img">
                                <img src={truck.imageOfTruck} alt="Truck View" />
                            </div>
                            <div className="truck-info">
                                <h5>Cuisine Type:</h5>
                                <p>{truck.cuisineType}</p>

                                <h6>Average Rating:</h6>
                                <p>{truck.customerRatingAvg}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DinerSettings;
