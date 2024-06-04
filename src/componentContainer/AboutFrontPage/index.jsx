import { useEffect, useRef, useState } from "react";
import "./style.css";
import frontImg from "../../assets/images/aboutUs.png";

const AboutFrontPage = () => {
    const [scrollEnabled, setScrollEnabled] = useState(true);
    const [animationEnd, setAnimationEnd] = useState(false)
    const [frameNumber, setFrameNumber] = useState(1);
    const imageRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            if (scrollEnabled && window.scrollY >= 150 && frameNumber < 6) {
                setScrollEnabled(false);
                setFrameNumber((prev) => prev + 1);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollEnabled, frameNumber]);

    useEffect(()=>{
        document.body.classList.add('ocultar-scrollbar');
        const imageHeight = window.screen.height * 1.73 / 16
        imageHeight < (60*1.73) ? imageRef.current.style.height = 60*1.73 + "rem" : imageRef.current.style.height = imageHeight + "rem" 
        
    },[])
    useEffect(() => {
        console.log(document.body)
        if (!scrollEnabled && !animationEnd) {
            document.body.style.overflow = 'hidden';
            const timer = setTimeout(() => {
                setScrollEnabled(true)
                window.scrollTo(0, 0); // Reset scroll position
            }, 1000); // Duración de la animación
            return () => clearTimeout(timer);
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [scrollEnabled, animationEnd]);

    useEffect(() => {
        if (frameNumber === 6) {
            document.body.classList.remove('ocultar-scrollbar');
            setAnimationEnd(true);
        }
    }, [frameNumber]);

    const frameImgChoose = (frame) => {
        switch (frame) {
            case 1:
                return "frameImg1";
            case 2:
                return "frameImg2";
            case 3:
                return "frameImg3";
            case 4:
                return "frameImg4";
            case 5:
                return "frameImg5";
            default:
                return "frameImg5";
        }
    };
    const frameTitleChoose = (frame) => {
        switch (frame) {
            case 1:
                return "frameTitle1";
            case 2:
                return "frameTitle2";
            case 3:
                return "frameTitle3";
            case 4:
                return "frameTitle4";
            case 5:
                return "frameTitle5";
            default:
                return "frameTitle5";
        }
    };

    const frameP1Choose = (frame) => {
        switch (frame) {
            case 1:
                return "frameP11";
            case 2:
                return "frameP12";
            case 3:
                return "frameP13";
            case 4:
                return "frameP14";
            case 5:
                return "frameP15";
            default:
                return "frameP15";
        }
    };

    const frameP2Choose = (frame) => {
        switch (frame) {
            case 1:
                return "frameP21";
            case 2:
                return "frameP22";
            case 3:
                return "frameP23";
            case 4:
                return "frameP24";
            case 5:
                return "frameP25";
            default:
                return "frameP25";
        }
    };

    const frameP3Choose = (frame) => {
        switch (frame) {
            case 1:
                return "frameP31";
            case 2:
                return "frameP32";
            case 3:
                return "frameP33";
            case 4:
                return "frameP34";
            case 5:
                return "frameP35";
            default:
                return "frameP35";
        }
    };

    return (
        <section className={`about-frontPage-container ${animationEnd ? "about-frontPage-container-block" : ""}`}>
            <img ref={imageRef} className={frameImgChoose(frameNumber)} src={frontImg} alt="" />
            <div className="about-frontPage-content">
                <div className="about-frontPage-leftTextContainer">
                    <h1 className={`about-frontPage-title ${frameTitleChoose(frameNumber)}`}>DISCOVER OUR <span>STORY</span></h1>
                    <p className={`about-frontPage-text ${frameP1Choose(frameNumber)}`}>Our vision is to lead sports tourism in South America, guided by ethics, transparency, and social responsibility.</p>
                    <p className={`about-frontPage-text ${frameP2Choose(frameNumber)}`}>Futbol America has strived to achieve success, working hand in hand with the best first division professional clubs in Brazil and Argentina, their national teams and amateur clubs. This gives us the flexibility to organize football activities for all levels and ages. We are equally aware of the increasing standards of our clients. Therefore, we will customize our program to meet the needs of each client. We coordinate all the games, fields, food, transportation, lodging and tourism. We recognize that only by providing consistently high-quality performance and service experience can we exceed these expectations and maintain long-term relationships based on trust.</p>
                </div>
                <div className="about-frontPage-rightTextContainer">
                    <p className={`about-frontPage-text ${frameP3Choose(frameNumber)}`}>Since <span>1998</span>, Futbol America Tours has been a leader in sports tourism, dedicated to providing exceptional logistics services and travel organization for athletes, managers, and teams connected to the world of sports. Our commitment to excellence is evident in every aspect of our highly specialized services, tailored to meet the unique needs and specifications of each sport.</p>
                </div>
            </div>
        </section>
    );
};

export default AboutFrontPage;
