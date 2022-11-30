import React from 'react';
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
                        <a href="">Order</a>
                    </li>
                    <li>
                    <a href="">Order-Review</a>
                    </li>
                    <li>
                    <a href="">Manage-Inventory</a>
                    </li>
                    <li><a href="">Login</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;