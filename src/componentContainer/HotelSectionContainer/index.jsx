import { HotelLayout } from "../../components"
import "./style.css"
import stadium from "../../assets/images/stadium.png"

const HotelSectionContainer = ({ hotels }) => {

    return (
        <section className="hotelSectionContainer">
            <div className="hotelSectionContainer-bg">
                <img src={stadium} alt="" />
            </div>
            <div className="hotelSectionContainer-content">
            <h2>WHERE ARE WE <span>GOING TO STAY</span>?</h2>
            {hotels.map((hotel, index)=>(
                <HotelLayout hotel={hotel} key={index}/>
            ))}
            </div>
        </section >
    )
}

export default HotelSectionContainer