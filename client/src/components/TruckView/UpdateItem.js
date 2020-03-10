import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const UpdateItem = () => {
    const [item, setItem] = useState([])
    const [toEdit, setToEdit] = useState({
        itemName: '',
        itemDescription: '',
        itemPhotos: '',
        itemPrice: Number,
    });

    useEffect(() => {
        axiosWithAuth()
        .get(`/truck/${id}`)
        .then(res => {
            console.log(res)
            setItem(res.data);
        })
        .catch(err => console.log(err));
    }, [id])

    const history = useHistory();
    
    const id = localStorage.getItem('id')

    const handleChanges = e => {
        setToEdit({
            ...toEdit,
            [e.target.name]: e.target.value
        });
    }

    const update = item => {
        axiosWithAuth()
        .put(`truck/${id}`, toEdit)
        .then(res => {
            console.log(res);
            history.push(`/dashboard`)
        })
        .catch(err => console.log(err))
    }

    
    return (
        <div className='food-truck'>
            <p>Update the items on your menu here.</p>
            <Form onSubmit={(e) => {
                e.preventDefault();
                update(toEdit);
            }} inline>
                <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
                    <Label for='itemPhoto' className='mr-sm-2'>Item Photo</Label>
                    <Input type='url' name='itemPhoto' id='itemPhoto' placeholder='photo url' />
                </FormGroup>
                <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
                    <Label for='itemName' className='mr-sm-2'>Item Name</Label>
                    <Input onChange={handleChanges} type='text' name='itemName' id='itemName' placeholder='Enter name of dish' />
                </FormGroup>
                <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
                    <Label for='itemDescription' className='mr-sm-2'>Item Description</Label>
                    <Input onChange={handleChanges} type='textarea' name='itemDescriptio' id='itemDescription' placeholder='Enter description of dish' />
                </FormGroup>
                <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
                    <Label for='itemPrice' name='itemPrice' id='itemPrice' placeholder='Enter price of dish' />
                    <Input onChange={handleChanges} type='number' name='itemPrice' id='itemPrice' placeholder='Enter price of dish' />
                </FormGroup>
                <Button className='register-btn' type='submit'>Update Dish</Button>
            </Form>
            <div className='menu-list'>
                {item.map((item, index) => {
                    return (
                        <div key={index} className='ind-truck'>
                            <div className='item-img'>
                                <img src={item.imageOfItem} alt='menu item view' />
                            </div>
                            <div className='truck-info'>
                                <h3>Item Name: </h3>
                                <p>{item.itemName}</p>
                                <h4>Item Description: </h4>
                                <p>{item.itemDescription}</p>
                                <h5>Item Price: </h5>
                                <p>{item.itemPrice}</p>
                                <h4>Customer Ratings</h4>
                                <p>{item.customerRatings}</p>
                                <h4>Average Rating</h4>
                                <p>{item.customerRatingAvg}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UpdateItem
