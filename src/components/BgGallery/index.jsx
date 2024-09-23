import { useState } from "react"
import "./style.css"
import Button from "../Button"
import useImageLoader from "../../customHook/useImageLoader/useImageLoader"
import Spinner from "../Spinner"

const BgGallery = ({ handleChange, info }) => {

    const [items, setItems] = useState(info)
    const [animation, setAnimation] = useState(false)

    const { loaded, error, imageRefs } = useImageLoader(info.map(item => item.img))

    const handleClick = () => {
        handleChange()
        setAnimation(true)
        setTimeout(() => {
            setItems(prev => {
                setAnimation(false)
                const newItems = [...prev]
                newItems.push(newItems[0])
                newItems.splice(0, 1)
                return newItems
            })
        }, 200)
    }

    return (
        <div className="bgGallery-container">
            {loaded ? (
                <>
                    <div className="bgGallery-bgContainer">
                        {items.map((item, index) => {
                            return <img loading="lazy" className={animation ? "bgGallery-bgImg-off" : ""} key={index} src={item.img} alt="" />
                        })}
                    </div>
                    <div className="bgGallery-contentContainer">
                        <div className="bgGallery-contentAndButton">
                            <div className="bgGallery-content">
                                {items.map((item, index) => {
                                    return (
                                        <div className={`bgGallery-info ${animation ? "bgGallery-info-animation-up bgGallery-transition " : ""}`} key={index}>
                                            <h2>{item.title}</h2>
                                            <p>{item.desc}</p>
                                            <Button className="bgGallery-button-JoinUs" toLink={"/contact"} title="More Information" />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="bgGallery-imgButtonsContainer">
                            <div className={`${animation ? "bgGallery-imgButton0 bgGallery-transition" : "bgGallery-imgButton1"}`}>
                                <img loading="lazy" src={items[0].img} alt="" />
                            </div>
                            <div className={`${animation ? "bgGallery-imgButton1 bgGallery-transition" : "bgGallery-imgButton2"}`}>
                                <img loading="lazy" onClick={handleClick} src={items[1].img} alt="" />
                            </div>
                            <div className={`${animation ? "bgGallery-imgButton2 bgGallery-transition" : "bgGallery-imgButton3"}`}>
                                <img loading="lazy" onClick={handleClick} src={items[0].img} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="bgGallery-phone-bgContainer">
                        <div className="bgGallery-phone-titleAndButtonsContainer">
                            <div className="bgGallery-phone-bgImgContainer">
                                <img loading="lazy" className={animation ? "bgGallery-bgImg-off" : ""} src={items[0].img} alt="" />
                            </div>
                            <h2 className={animation ? "bgGallery-bgImg-off" : ""}>{items[0].title}</h2>
                            <div className="bgGallery-phone-imgButtonsContainer">
                                <div className={`${animation ? "bgGallery-imgButton0 bgGallery-transition" : "bgGallery-imgButton1"}`}>
                                    <img loading="lazy" src={items[0].img} alt="" />
                                </div>
                                <div className={`${animation ? "bgGallery-imgButton1 bgGallery-transition" : "bgGallery-imgButton2"}`}>
                                    <img loading="lazy" onClick={handleClick} src={items[1].img} alt="" />
                                </div>
                                <div className={`${animation ? "bgGallery-imgButton2 bgGallery-transition" : "bgGallery-imgButton3"}`}>
                                    <img loading="lazy" onClick={handleClick} src={items[0].img} alt="" />
                                </div>
                            </div>
                        </div>
                        <p className={animation ? "bgGallery-bgImg-off" : ""}>{items[0].desc}</p>
                        <div className="bgGallery-button-JoinUsContainer">
                            <Button toLink={"/contact"} title="" />
                        </div>
                    </div>
                </>
            ) : (
                <Spinner />
            )}

        </div>
    )
}

export default BgGallery