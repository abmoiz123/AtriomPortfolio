import React from 'react';
import './menubtn.css'


function MenuComponent() {
    return (
        <div>
            <label className="open">
                <input className="menu_input" type='checkbox' />
                <span className='menu'>
                    <span className='hamburger'></span>
                </span>
                <ul className="menu_ul">
                    <li className="menu_li">
                        <a href='#' className="menu_li_a">Home</a>
                    </li>
                    <li className="menu_li">
                        <a href='#' className="menu_li_a">About</a>
                    </li>
                    <li className="menu_li">
                        <a href='#' className="menu_li_a">Services</a>
                    </li>
                    <li className="menu_li">
                        <a href='#' className="menu_li_a">Portfolio</a>
                    </li>
                    <li className="menu_li">
                        <a href='#' className="menu_li_a">Team</a>
                    </li>
                    <li className="menu_li">
                        <a href='#' className="menu_li_a">Clients</a>
                    </li>
                    <li className="menu_li">
                        <a href='#' className="menu_li_a">Blog</a>
                    </li>
                    <li className="menu_li">
                        <a href='#' className="menu_li_a">Contact</a>
                    </li>
                </ul>
            </label>
        </div>
    );
}

export default MenuComponent;