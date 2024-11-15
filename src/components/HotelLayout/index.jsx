import AutoGallery from "../AutoGallery"
import "./style.css"

const HotelLayout = ({ hotel }) => {
    return (
        <div className="hotelContainer">
            <div className="hotel-imgsGalleryContainer">
                <div>
                    <AutoGallery images={hotel.imgs} />
                </div>
            </div>
            <div className="hotel-textContainer">
                <h3>{hotel.title}</h3>
                <p className="hotel-nameList">Included services:</p>
                <ul>
                    {hotel.items.map((item, index) => (
                        <li key={index}><span><img src={item.img} alt="" /></span>{item.item}</li>
                    ))}
                </ul>
            </div>
            <div className="hotel-buttonContainer">
                <a href={hotel.link} target="_blank" rel="noopener noreferrer"><button>Click here for <br/>more details</button></a>
            </div>
        </div>
    )
}

export default HotelLayout