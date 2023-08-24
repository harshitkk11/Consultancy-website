import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Hamburger from '../components/Hamburger'

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logoname">
                    <a href="/">InnovateWeb</a>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <Hamburger />
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                        <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                        <NavLink to="/services">Services</NavLink>
                        </li>
                        <li>
                        <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                        <NavLink to="/contactus">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
