import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

function DinerProfile(props) {

    useEffect(() => {
        axiosWithAuth().get(`/diner/5`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div>

        </div>
    )
}

export default DinerProfile
