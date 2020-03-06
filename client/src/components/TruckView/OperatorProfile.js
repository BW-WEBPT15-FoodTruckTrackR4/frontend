import React from 'react'
import { axiosWithAuth } from '../../utils/axiosWithAuth';

function OperatorProfile() {
    const [operator, SetOperator] = useState({
        id: '',
        userName: '',
        password: '',
        email: '',
        trucksOwend: ''

    })

    useEffect(() => {
        axiosWithAuth()
        .get(`/truck/${id}`)
        .then(res => {
            console.log(res);
            SetTruck(res.data);
        })
        .catch(err => console.log(err));
    }, [id]);


    return (
        <div>
            
        </div>
    )
}

export default OperatorProfile
