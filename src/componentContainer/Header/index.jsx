import { Link } from "react-router-dom"
import { DropDown, NavBar } from "../../components"

import "./style.css"

const Header = ({ links }) => {
    return (
        <header className="header">
            <div>
                <h1 className="title"><Link to="/"><span>FUTBOL</span> AMERICA</Link></h1>
            </div>
            <div className="navOptions">
                <DropDown />
                <NavBar links={links} />
            </div>
        </header>
    )
}

export default Header