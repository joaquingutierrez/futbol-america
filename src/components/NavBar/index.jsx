import { NavLink } from "react-router-dom"

import "./style.css"
import HamburguerMenu from "../HamburguerMenu"

const NavBar = ({ links }) => {
    return (
        <nav className="navBar-container">
            <ul className="navLinks">
                {links.map((link, index) => {
                    return (
                        <li key={index}>
                            <NavLink to={link.path}>{link.name.toUpperCase()}</NavLink>
                        </li>
                    )
                })}
            </ul>
            <HamburguerMenu links={links} />
        </nav>
    )
}

export default NavBar