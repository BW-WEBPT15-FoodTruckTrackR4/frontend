import React, { useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const AddItem = (props) => {
    const [newItem, setNewItem] = useState({
        itemPhoto: '',
        itemName: '',
        itemDescription: '',
        itemPrice: Number
    })
    
    const handleChanges = e => {
        setNewItem({
            ...newItem,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        axiosWithAuth()
        .post('/truck/menu', newItem)
        .then(res => {
            console.log(res);
            setNewItem({
                itemPhoto: '',
                itemName: '',
                itemDescription: '',
                itemPrice: Number
            })
            props.history.push('/dashboard')
        })
        .catch(err => console.log('failed to create new item', err));
    };

    return (
        <div>
            <Form onSubmit={handleSubmit} inline>
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
                <Button className='register-btn' type='submit'>Add Dish</Button>
            </Form>
        </div>
    )
}

export default AddItem
