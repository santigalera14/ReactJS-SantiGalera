import React from "react"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/">
                <h3>StreetWear</h3>
            </Link>
            <div className="categories">
               <NavLink to={`/categoty/Hoddies`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' }>Hoddies</NavLink>
               <NavLink to={`/categoty/Joggers`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' }>Joggers</NavLink>
               <NavLink to={`/categoty/Overshirt`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' }>Overshirt</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar