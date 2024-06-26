import { Link, useLocation } from "react-router-dom"
import "./style.css"
import instagram from "../../assets/icons/Instagram.png"
import linkedin from "../../assets/icons/LinkedIn.png"
import twitterX from "../../assets/icons/TwitterX.png"
import facebook from "../../assets/icons/Facebook.png"

const Footer = () => {

    const location = useLocation()
    const getInfo = () => {
        switch (location.pathname) {
            case "/":
                return { title: "Home", toLink: "/" }
            case "/services":
                return { title: "Contact Us", toLink: "/contact" }
            case "/about":
                return { title: "Check Our Services", toLink: "/services" }
            case "/contact":
                return { title: "Home", toLink: "/" }
            default:
                return { title: "Home", toLink: "/" };
        }
    }

    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };

    const info = getInfo()

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-contactInfo">
                    <p>info@futbolamericatours.com</p>
                    <p>513 325 7423</p>
                    <p>+54 9 223 5965 940</p>
                </div>
                <Link to={info.toLink} onClick={handleLinkClick} className="footer-title-link"><h4 className="footer-title">{info.title}</h4></Link>
                <div className="footer-smIcons">
                    {/* <img src={linkedin} alt="LinkedIn" />
                    <img src={twitterX} alt="Twitter - X" /> */}
                    <a href="https://www.instagram.com/futbol_america_tours?igsh=bmJ3MGc1MTdtNms=" target="_blank" rel="noopener noreferrer"><img loading="lazy" src={instagram} alt="Instagram" /></a>
                    {/* {<img src={facebook} alt="Facebook" />} */}
                </div>
            </div>
            <div className="footer-copyright">
                <p>@Copyright. All rights recerved</p>
            </div>
        </footer>
    )
}

export default Footer