import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../../utils/axiosWithAuth';

const UpdateItem = () => {
    const [item, setItem] = useState({
        itemPhoto: '',
        itemName: '',
        itemDescription: '',
        itemPrice: ''
    })

    useEffect(() => {
        axiosWithAuth()
        .put(`/truck/item/${id}`)
        .then(res => {
            console.log(res);
            setItem(res.data)
        })
        .catch(err => console.log(err));
    }, [id]);

    
    return (
        <div>
            
        </div>
    )
}

export default UpdateItem
