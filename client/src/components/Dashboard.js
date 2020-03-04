import React, { useState } from 'react';

/* components */
import DinerProfile from './DinerView/DinerProfile';

function Dashboard(props) {

    const [role, setRole] = useState(localStorage.getItem('role'));

    return (
        <div>
            {role === 'diner' && <DinerProfile />}
        </div>
    )
}

export default Dashboard;
