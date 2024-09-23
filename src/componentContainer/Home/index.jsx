import { CareFuture, FrontPage, InfiniteGallery } from "../../components"
import DoubleScrollGallery from "../DoubleScrollGallery"
import "./style.css"

const Home = () => {
    return (
        <main>
            <FrontPage />
            <CareFuture />
            <DoubleScrollGallery />
            <InfiniteGallery />
        </main>
    )
}

export default Home