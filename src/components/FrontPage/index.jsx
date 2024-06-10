import "./style.css"
import videoFrontPage from "../../assets/videos/home-frontPage.mp4"
import Button from "../Button"
import { useEffect, useRef } from "react"

const FrontPage = () => {

    const videoRef = useRef(null)

useEffect(()=> {
    videoRef.current.play()
},[])

    return (
        <div className="home-frontPage">
            <video ref={videoRef} width="100%" height="100%" autoplay="autoplay" muted loop playsinline id="fontPageVideo">
                <source src={videoFrontPage} type="video/mp4" />
            </video>
            <div className="home-frontPage-container">
                <div className="home-frontPage-content">
                    <h1 className="home-frontPage-title">DIVE INTO OUR WORLD</h1>
                    <p className="home-frontPage-text">Your gateway to unforgettable soccer experiences in Argentina and Brazil.</p>
                    <div className="home-frontPage-buttonContainer">
                        <Button toLink={"/services"} title="Our Packages" white={true} />
                        <Button toLink={"/contact"} title="Join Us" white={false} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrontPage