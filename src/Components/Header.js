import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-red-900">
                        <NavLink to="/" className="btn btn-ghost normal-case text-xl">Topics</NavLink>
                        <NavLink to="/" className="btn btn-ghost normal-case text-xl">Statistics</NavLink>
                        <NavLink to="/" className="btn btn-ghost normal-case text-xl">Blog</NavLink>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img src="https://www.pngkey.com/png/full/117-1178305_logo-quizizz-logo.png" className='w-32' alt="" />
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex text-red-900">

                <NavLink to="/" className="btn btn-ghost normal-case text-xl">Topics</NavLink>
                <NavLink to="/" className="btn btn-ghost normal-case text-xl">Statistics</NavLink>
                <NavLink to="/" className="btn btn-ghost normal-case text-xl">Blog</NavLink>

            </div>
        </div>
    );
};

export default Header;

