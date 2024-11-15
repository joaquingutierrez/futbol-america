import { useState } from "react"

import "./style.css"
import Button from "../Button"
import useImageLoader from "../../customHook/useImageLoader/useImageLoader"
import Spinner from "../Spinner"

const BgGallery = ({ info }) => {

    const [animation, setAnimation] = useState(false)

    const { loaded, error, imageRefs } = useImageLoader(info ? [info.img] : []);

    return (
        <div className="bgGallery-container">
            {loaded ? (
                <>
                    {info ? (
                        <>
                            <div className="bgGallery-bgContainer">
                                <img loading="lazy" className={animation ? "bgGallery-bgImg-off" : ""} src={info.img} alt="" />
                            </div>
                            <div className="bgGallery-contentContainer">
                                <div className="bgGallery-contentAndButton">
                                    <div className="bgGallery-content">
                                        <div className={`bgGallery-info ${animation ? "bgGallery-info-animation-up bgGallery-transition " : ""}`}>
                                            <h2>{info.title}</h2>
                                            <p>{info.desc}</p>
                                            <Button className="bgGallery-button-JoinUs" toLink={"/contact"} title="More Information" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <h2 className="bgGallery-soon">Proximamente</h2>
                    )}
                </>
            ) : (
                <Spinner />
            )}

        </div>
    )
}

export default BgGallery