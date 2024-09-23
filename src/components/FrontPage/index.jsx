import "./style.css"
import videoFrontPage from "../../assets/videos/home-frontPage.mp4"
import Button from "../Button"

const FrontPage = () => {

    return (
        <div className="home-frontPage">
            <video autoPlay muted loop playsInline id="fontPageVideo">
                <source src={videoFrontPage} type="video/mp4" />
            </video>
            <div className="home-frontPage-container">
                <div className="home-frontPage-content">
                    <h1 className="home-frontPage-title">YOUR NEXT SOCCER TOUR IS HERE</h1>
                    <p className="home-frontPage-text">Your gateway to unforgettable soccer experiences in Argentina and Brazil.</p>
                    <div className="home-frontPage-buttonContainer">
                        <Button toLink={"/services"} title="OUR SERVICES" white={true} />
                        <Button toLink={"/contact"} title="More Information" white={false} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrontPage