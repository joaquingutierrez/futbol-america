import { useEffect, useState } from "react"

import "./style.css"
import AutoGallery from "../../components/AutoGallery"

import image1 from "../../assets/images/grandBrizo/image1.png"
import image2 from "../../assets/images/grandBrizo/image2.png"
import image3 from "../../assets/images/grandBrizo/image3.png"
import image4 from "../../assets/images/grandBrizo/image4.png"
import image5 from "../../assets/images/grandBrizo/image5.png"
import image6 from "../../assets/images/grandBrizo/image6.png"

import landPlaza1 from "../../assets/images/landPlaza/image1.png"
import landPlaza2 from "../../assets/images/landPlaza/image2.png"
import landPlaza3 from "../../assets/images/landPlaza/image3.png"
import landPlaza4 from "../../assets/images/landPlaza/image4.png"
import landPlaza5 from "../../assets/images/landPlaza/image5.png"

import othonPalace1 from "../../assets/images/othonPalace/image1.png"
import othonPalace2 from "../../assets/images/othonPalace/image2.png"
import othonPalace3 from "../../assets/images/othonPalace/image3.png"
import othonPalace4 from "../../assets/images/othonPalace/image4.png"
import othonPalace5 from "../../assets/images/othonPalace/image5.png"
import othonPalace6 from "../../assets/images/othonPalace/image6.png"

import southAmerica1 from "../../assets/images/southAmerica/image1.png"
import southAmerica2 from "../../assets/images/southAmerica/image2.png"
import southAmerica3 from "../../assets/images/southAmerica/image3.png"
import southAmerica4 from "../../assets/images/southAmerica/image4.png"
import southAmerica5 from "../../assets/images/southAmerica/image5.png"
import southAmerica6 from "../../assets/images/southAmerica/image6.png"

import savoyOthon1 from "../../assets/images/savoyOthon/image1.png"
import savoyOthon2 from "../../assets/images/savoyOthon/image2.png"
import savoyOthon3 from "../../assets/images/savoyOthon/image3.png"
import savoyOthon4 from "../../assets/images/savoyOthon/image4.png"
import savoyOthon5 from "../../assets/images/savoyOthon/image5.png"
import savoyOthon6 from "../../assets/images/savoyOthon/image6.png"

import customerIcon from "../../assets/icons/hotelItems/Customer.png"
import barbellIcon from "../../assets/icons/hotelItems/Barbell.png"
import bedIcon from "../../assets/icons/hotelItems/Bed.png"
import restaurantIcon from "../../assets/icons/hotelItems/Restaurant.png"
import spaFlowerIcon from "../../assets/icons/hotelItems/Spa Flower.png"
import swimmingIcon from "../../assets/icons/hotelItems/Swimming.png"
import wiFiIcon from "../../assets/icons/hotelItems/Wi-Fi.png"
import beachIcon from "../../assets/icons/hotelItems/Beach.png"
import twoBedsIcon from "../../assets/icons/hotelItems/Two Beds.png"
import vanImg from "../../assets/images/van.png"

const HotelSectionContainer = ({ hotel }) => {

    const [selected, setSelected] = useState(1)

    useEffect(() => {
        setSelected(1)
    }, [hotel]);

    const imagesGrandBrizo = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6
    ]

    const imagesLandPlaza = [
        landPlaza1,
        landPlaza2,
        landPlaza3,
        landPlaza4,
        landPlaza5
    ]

    const othonPalace = [
        othonPalace1,
        othonPalace2,
        othonPalace3,
        othonPalace4,
        othonPalace5,
        othonPalace6
    ]

    const southAmerica = [
        southAmerica1,
        southAmerica2,
        southAmerica3,
        southAmerica4,
        southAmerica5,
        southAmerica6
    ]

    const savoyOthon = [
        savoyOthon1,
        savoyOthon2,
        savoyOthon3,
        savoyOthon4,
        savoyOthon5,
        savoyOthon6
    ]

    const handleClick = (number) => {
        setSelected(number)
    }

    return (
        <section className="hotelSectionContainer">
            <div className="hotelSection-hotelContainer">
                <div className="hotelSection-hotel-infoContainer">
                    <p>Rest assured, your comfort and satisfaction are our top priorities at Futbol America Tours. Each hotel is meticulously selected to offer convenience, luxury, and a delightful stay, paralleling your soccer journey. Peruse our hotel options below, knowing that every detail of your trip is expertly managed with us."</p>
                    <div className="hotelSection-phone-hotel-yellowBox"></div>
                    <div className="hotelSection-phone-hotelGalleryContainer">
                        <div className="hotelSection-phone-hotel-gallery">
                            <div className={`hotelSection-hotel1 ${selected === 2 || selected === 3 ? "hotelSection-hotel1Up" : ""}`} >
                                <AutoGallery images={hotel === "Brazil" ? imagesGrandBrizo : othonPalace} />
                            </div>
                            <div className={`hotelSection-hotel2 ${selected === 2 ? "hotelSection-hotel2Up" : ""} ${selected === 3 ? "hotelSection-hotel1Up" : ""}`} >
                                <AutoGallery images={hotel === "Brazil" ? imagesLandPlaza : southAmerica} />
                            </div>
                            {hotel === "Brazil" && (
                                <div className={`hotelSection-hotel2 ${selected === 3 ? "hotelSection-hotel2Up" : ""}`} >
                                    <AutoGallery images={savoyOthon} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="hotelSection-phone-buttonsContainer">
                        <h3 onClick={() => handleClick(1)} className={`hotelSection-buttons-text ${selected === 1 ? "hotelSection-buttons-textSelection" : ""}`}>{hotel === "Brazil" ? "Hotel Grand Brizo" : "Hotel Othon Palace"}</h3>
                        <h3 onClick={() => handleClick(2)} className={`hotelSection-buttons-text ${selected === 2 ? "hotelSection-buttons-textSelection" : ""}`}>{hotel === "Brazil" ? "Hotel Land Plaza" : "Hotel South America"}</h3>
                        {hotel === "Brazil" && <h3 onClick={() => handleClick(3)} className={`hotelSection-buttons-text ${selected === 3 ? "hotelSection-buttons-textSelection" : ""}`}>Hotel Savoy Othon</h3>}
                    </div>
                    <div className="hotelSection-hotel-info-titleContainer">
                        <h2 className={`hotelSection-hotel1 ${selected === 2 || selected === 3 ? "hotelSection-hotel1Up" : ""}`}>{hotel === "Brazil" ? "HOTEL GRAN BRIZO" : "HOTEL OTHON PALACE"}</h2>
                        <h2 className={`hotelSection-hotel2 ${selected === 2 ? "hotelSection-hotel2Up" : ""} ${selected === 3 ? "hotelSection-hotel1Up" : ""}`}>{hotel === "Brazil" ? "HOTEL LAND PLAZA" : "HOTEL SOUTH AMERICA"}</h2>
                        {hotel === "Brazil" && <h2 className={`hotelSection-hotel2 ${selected === 3 ? "hotelSection-hotel2Up" : ""}`}>HOTEL SAVOY OTHON</h2>
                        }
                    </div>
                    <ul>
                        {hotel === "Brazil" ? (
                            <>
                                <li><img src={customerIcon} alt="" />2 people</li>
                                <li className={`${selected === 2 ? "hotelSection-hotel1Right" : ""}`}><img src={bedIcon} alt="" />Queen bed</li>
                                <li className={`${selected === 1 || selected === 3 ? "hotelSection-hotel1Right" : ""}`}><img src={twoBedsIcon} alt="" />Individual beds</li>
                                <li><img src={restaurantIcon} alt="" />Restaurant</li>
                                <li><img src={wiFiIcon} alt="" />Wifi</li>
                                <li><img src={barbellIcon} alt="" />Gym</li>
                                <li className={`${selected === 3 ? "hotelSection-hotel1Right" : ""}`}><img src={swimmingIcon} alt="" />Pool</li>
                                <li className={`${selected === 2 || selected === 3 ? "hotelSection-hotel1Right" : ""}`}><img src={beachIcon} alt="" /> Facing the beach</li>
                            </>
                        ) : (
                            <>
                                <li><img src={customerIcon} alt="" />2 people</li>
                                <li><img src={bedIcon} alt="" />Queen bed</li>
                                <li><img src={restaurantIcon} alt="" />Restaurant</li>
                                <li><img src={wiFiIcon} alt="" />Wifi</li>
                                <li><img src={barbellIcon} alt="" />Gym</li>
                                <li><img src={swimmingIcon} alt="" />Pool</li>
                                <li className={`${selected === 2 ? "hotelSection-hotel1Right" : ""}`}><img src={spaFlowerIcon} alt="" />Spa & Wellness Center</li>
                            </>
                        )}
                    </ul>
                    <div className="hotelSection-buttonsContainer">
                        <h3 onClick={() => handleClick(1)} className={`hotelSection-buttons-text ${selected === 1 ? "hotelSection-buttons-textSelection" : ""}`}>{hotel === "Brazil" ? "Hotel Grand Brizo" : "Hotel Othon Palace"}</h3>
                        <h3 onClick={() => handleClick(2)} className={`hotelSection-buttons-text ${selected === 2 ? "hotelSection-buttons-textSelection" : ""}`}>{hotel === "Brazil" ? "Hotel Land Plaza" : "Hotel South America"}</h3>
                        {hotel === "Brazil" && <h3 onClick={() => handleClick(3)} className={`hotelSection-buttons-text ${selected === 3 ? "hotelSection-buttons-textSelection" : ""}`}>Hotel Savoy Othon</h3>}
                    </div>
                </div>
                <div className="hotelSection-hotel-yellowBox">
                </div>
                <div className="hotelSection-hotel-gallery">
                    <div className={`hotelSection-hotel1 ${selected === 2 || selected === 3 ? "hotelSection-hotel1Up" : ""}`} >
                        <AutoGallery images={hotel === "Brazil" ? imagesGrandBrizo : othonPalace} />
                    </div>
                    <div className={`hotelSection-hotel2 ${selected === 2 ? "hotelSection-hotel2Up" : ""} ${selected === 3 ? "hotelSection-hotel1Up" : ""}`} >
                        <AutoGallery images={hotel === "Brazil" ? imagesLandPlaza : southAmerica} />
                    </div>
                    {hotel === "Brazil" && (
                        <div className={`hotelSection-hotel2 ${selected === 3 ? "hotelSection-hotel2Up" : ""}`} >
                            <AutoGallery images={savoyOthon} />
                        </div>
                    )}
                </div>
            </div>
            <div className="hotelSection-vanContainer">
                <div className="hotelSection-van-text">
                    <div className="hotelSection-van-text-ImgContainer-phone">
                        <div className="hotelSection-van-yellowBoc-phone">

                        </div>
                        <div className="hotelSection-van-imgContainer-phone">
                            <img src={vanImg} alt="" />
                        </div>
                    </div>
                    <p>Our buses and vans come equipped with bathrooms, air conditioning, and DVD players for your comfort. We offer round-trip transfers between the airport and hotel, as well as transportation for friendly matches.</p>
                </div>
                <div className="hotelSection-van-yellowBoc">

                </div>
                <div className="hotelSection-van-imgContainer">
                    <img src={vanImg} alt="" />
                </div>
            </div>
        </section >
    )
}

export default HotelSectionContainer