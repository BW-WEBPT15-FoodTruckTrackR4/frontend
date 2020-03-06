import React from 'react';
import { Link } from 'react-router-dom';

/* assets */
import Logo from '../assets/logo.png';

function NavBar() {
    return (
        <div className="header-nav">
            <div className="logo">
                <img src={Logo} alt="Food Truck TrackR" />
            </div>

            <div className="nav">
                <Link to="/">Home</Link>
                {localStorage.getItem('token') && localStorage.getItem('role') === 'diner' &&
                    <Link to="/">Diner Profile</Link>
                }
                {localStorage.getItem('token') && localStorage.getItem('role') === 'operator' &&
                    <Link to="/">Operator Profile</Link>
                }
                {!localStorage.getItem('token') &&
                    <Link to="/login">Login</Link>
                }
                {!localStorage.getItem('token') &&
                    <Link to="/register">Register</Link>
                }
                {localStorage.getItem('token') &&
                    <Link to="#" onClick={() => {
                        localStorage.clear();
                        window.location.reload();
                    }}>Logout</Link>
                }

            </div>
        </div>
    )
}

export default NavBar
