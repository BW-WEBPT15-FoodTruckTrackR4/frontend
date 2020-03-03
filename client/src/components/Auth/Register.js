import React, { useState } from 'react';
import { Button, Form, Input, Label, Alert } from 'reactstrap';

/* components */
import DinerReg from './DinerReg';
import OperatorReg from './OperatorReg';

function Register(props) {

    const [diner, setDiner] = useState(false);
    const [operator, setOperator] = useState(false);

    const toggleDiner = () => {
        setDiner(!diner);
    }

    const toggleOperator = () => {
        setOperator(!operator);
    }

    return (
        <div>
            <button onClick={toggleDiner}>Diner</button>

            <button onClick={toggleOperator}>Operator</button>

            {diner && <DinerReg />}
            {operator && <OperatorReg />}
        </div>
    )
}

export default Register;