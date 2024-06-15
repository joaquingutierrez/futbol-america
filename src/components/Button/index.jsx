import { Link } from "react-router-dom"
import "./style.css"

const Button = ({ title, white, toLink, handleClick }) => {

    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <Link to={toLink} onClick={handleClick ? handleClick : handleLinkClick} className="buttonLink">
            <button className={`button ${white ? "button-white" : "button-yellow"}`}>
                {title}
            </button>
        </Link>
    )
}

export default Button