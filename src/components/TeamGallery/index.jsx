import "./style.css"
import whatsappLogo from "../../assets/icons/whatsapp.png"

const TeamGallery = ({ team }) => {

    return (
        <section className="teamGallery-container">
            {team.map((item, index) => {
                return (
                    <div key={index} className={`teamGallery-cardContainer ${index % 2 === 0 ? "teamGallery-leftCardContainer" : "teamGallery-rightCardContainer"}`}>
                        {index === 0 && <div className="teamGallery-topSeparator teamGallery-separator"></div>}
                        <div className={`teamGallery-imgContainer`}>
                            <img src={item.img} alt="" />
                        </div>
                        <h3 className={`teamGallery-name`}>{item.name}</h3>
                        <p className={`teamGallery-desc`}>{item.desc}</p>
                        <div className={`teamGallery-mailContainer`}>
                            {item.phone && <a href={`https://wa.me/${item.phone}`} target="_blank"><img src={whatsappLogo} alt="whatsapp" /></a>}
                        </div>
                        <div className="teamGallery-separator"></div>
                    </div>
                )
            })}
        </section>
    )
}

export default TeamGallery