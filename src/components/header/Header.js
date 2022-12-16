import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import "./Header.css"

const Header = () => {
    return (
        <div>
            <nav id="nav">
                <div id="logo">
                <img src={logo} alt="" />
                </div>
                <ul id="nav-link">
                    <li>
                        <NavLink to="/">Shop</NavLink>
                    </li>
                    <li>
                    <NavLink to="/orders">Orders</NavLink>
                    </li>
                    <li>
                    <NavLink to="/inventory">Inventory</NavLink>
                    </li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;