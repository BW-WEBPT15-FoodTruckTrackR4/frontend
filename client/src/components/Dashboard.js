import React, { useState } from 'react';

/* components */
import DinerProfile from './DinerView/DinerProfile';
import OperatorProfile from './OperatorProfile';

function Dashboard(props) {

    const [role, setRole] = useState(localStorage.getItem('role'));

    return (
        <div>
            {role === 'diner' && <DinerProfile />}
            {role === 'operator' && <OperatorProfile />}
        </div>
    )
}

export default Dashboard;
