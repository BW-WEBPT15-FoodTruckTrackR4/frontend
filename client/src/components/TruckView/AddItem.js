import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const AddItem = () => {
    const [item, setItem] = useState({
        itemPhoto: '',
        itemName: '',
        itemDescription: '',
        itemPrice: ''
    })
    
    useEffect(() => {
        axiosWithAuth()
        .post(`truck/menu`)
        .then(res => {
            console.log(res)
            setItem(res.data)
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div>
            
        </div>
    )
}

export default AddItem
