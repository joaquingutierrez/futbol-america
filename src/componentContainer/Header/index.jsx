import { Link } from "react-router-dom"

import { DropDown, NavBar } from "../../components"

import "./style.css"

const Header = ({ links }) => {
    return (
        <header className="header">
            <div className="header-content">
                <div>
                    <h1 className="title"><Link to="/"><span className="yellowColor">FUTBOL</span> AMERICA</Link></h1>
                </div>
                <div className="navOptions">
                    <DropDown />
                    <NavBar links={links} />
                </div>
            </div>
        </header>
    )
}

export default Header