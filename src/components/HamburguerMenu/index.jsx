import { NavLink } from 'react-router-dom'

import "./style.css"
import { useState } from 'react'

const HamburguerMenu = ({ links }) => {

    const [menuShown, setMenuShown] = useState(false)

    const handleClick = () => {
        setMenuShown(!menuShown)
    }

    return (
        <div className='hamburguerMenu'>
            <button onClick={handleClick} className='hamburguerMenu-button'>
                <div className={`hamburguerMenu-button-line ${menuShown ? "hamburguerMenu-button-line-transform" : ""}`}></div>
                <div className={`hamburguerMenu-button-line ${menuShown ? "hamburguerMenu-button-line-transform" : ""}`}></div>
                <div className={`hamburguerMenu-button-line ${menuShown ? "hamburguerMenu-button-line-transform" : ""}`}></div>
            </button>
            <ul className={`hamburguerMenu-links ${menuShown ? "hamburguerMenu-links-shown" : ""}`}>
                {links.map((link, index) => {
                    return (
                        <li onClick={handleClick} key={index}>
                            <NavLink to={link.path}>{link.name.toUpperCase()}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default HamburguerMenu