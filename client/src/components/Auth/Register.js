import React, { useState } from 'react';

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
        <div className="login-controls">
            <h3>Welcome Foodie,</h3>
            <p>Please register a new account to get started.</p>
            <button onClick={toggleDiner}>Diner</button>

            <button onClick={toggleOperator}>Operator</button>

            {diner && <DinerReg />}
            {operator && <OperatorReg />}
        </div>
    )
}

export default Register;