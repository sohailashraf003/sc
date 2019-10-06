import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <NavLink className="navbar-brand" to="/">SC</NavLink>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link" activeClassName="active" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/add-customer">Add New</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;