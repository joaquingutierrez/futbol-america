import { HotelLayout } from "../../components"
import "./style.css"
import stadium from "../../assets/images/stadium.png"
import vanImg from "../../assets/images/van.png"

const HotelSectionContainer = ({ hotels }) => {

    return (
        <>
            <section className="hotelSectionContainer">
                <div className="hotelSectionContainer-bg">
                    <img src={stadium} alt="" />
                </div>
                <div className="hotelSectionContainer-content">
                    <h2>WHERE ARE WE <span>GOING TO STAY</span>?</h2>
                    {hotels.map((hotel, index) => (
                        <HotelLayout hotel={hotel} key={index} />
                    ))}
                </div>
            </section >
            <section>
                <div className="hotelSection-vanContainer">
                    <h2>Our <span>Transfers</span></h2>
                    <div className="hotelSection-van-text">
                        <div className="hotelSection-van-text-ImgContainer-phone">
                            <div className="hotelSection-van-yellowBoc-phone">

                            </div>
                            <div className="hotelSection-van-imgContainer-phone">
                                <img loading="lazy" src={vanImg} alt="" />
                            </div>
                        </div>
                        <p>Our buses and vans come equipped with bathrooms, air conditioning, and DVD players for your comfort. We offer round-trip transfers between the airport and hotel, as well as transportation for friendly matches.</p>
                    </div>
                    <div className="hotelSection-van-yellowBoc">

                    </div>
                    <div className="hotelSection-van-imgContainer">
                        <img loading="lazy" src={vanImg} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HotelSectionContainer