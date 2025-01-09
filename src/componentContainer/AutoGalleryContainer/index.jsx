import { AutoGallery } from "../../components"
import "./style.css"
import image1 from "../../assets/images/autoGallery/image1.jpg"
import image2 from "../../assets/images/autoGallery/image2.jpg"
import image3 from "../../assets/images/autoGallery/image3.jpg"
import image4 from "../../assets/images/autoGallery/image4.jpg"
import image5 from "../../assets/images/autoGallery/image5.jpg"
import image6 from "../../assets/images/autoGallery/image6.jpg"
import image7 from "../../assets/images/autoGallery/image7.jpg"

const AutoGalleryContainer = () => {

    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7
    ]

    return (
        <section className="autoGallery-section">
            <AutoGallery images={images} />
        </section>
    )
}

export default AutoGalleryContainer