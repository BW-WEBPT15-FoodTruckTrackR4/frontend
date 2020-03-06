import React, { useState } from 'react';

/* components */
import DinerLogin from './DinerLogin';
import OperatorLogin from './OperatorReg';

export default function Login() {

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
            <p>Please login to continue, or register a new account to get started.</p>
            <button onClick={toggleDiner}>Diner</button>

            <button onClick={toggleOperator}>Operator</button>

            {diner && <DinerLogin />}
            {operator && <OperatorLogin />}
        </div>
    )
}
