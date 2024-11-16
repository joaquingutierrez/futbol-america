import "./style.css"

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
                            {item.contactMail && <a href={`mailto: ${item.contactMail}`}>{item.contactMail}</a>}
                        </div>
                        <div className="teamGallery-separator"></div>
                    </div>
                )
            })}
        </section>
    )
}

export default TeamGallery