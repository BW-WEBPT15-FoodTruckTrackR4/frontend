import React, { useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

function DinerSettings() {

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

    const [truckString, setTruckString] = useState('');

    const handleChange = (e) => {
        // setTruckString(e.target.value);

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

    return (
        <div>
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
            </form>
        </div>
    )
}

export default DinerSettings;
