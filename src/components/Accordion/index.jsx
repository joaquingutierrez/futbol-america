import { useRef, useState } from "react"

import "./style.css"
import AccordionMenu from "../AccordionMenu";

const Accordion = ({ items }) => {

    const [expandedIndex, setExpandedIndex] = useState(null);
    const [someOtherExpanded, setSomeOtherExpanded] = useState(false);
    const [widthAcc, setWidthAcc] = useState(0)
    const itemRefs = useRef([]);

    const handleClick = (index) => {
        setExpandedIndex((prev) => {
            if (prev === index) {
                setSomeOtherExpanded(false)
                return null
            }
            setSomeOtherExpanded(true)
            return index
        })

    }

    return (
        <section className="accordion-container">
            <div className="accordion-text">
                <h2>Unleash Your <span>Potential</span></h2>
                <p>Step into a world where soccer transcends boundaries and becomes a transformative journey of discovery and achievement. We're more than just a destination – we're your gateway to a realm where passion meets purpose, where players, coaches, and fans alike unite in the pursuit of greatness. With a steadfast commitment to excellence and innovation, we're here to empower you to unleash your full potential on and off the field. Our holistic approach to soccer development goes beyond the game itself, encompassing personalized mentorship, immersive experiences, and sustainable practices that shape the future of the sport.</p>
            </div>
            <div className="accordion-contentContainer">
                {items.map((item, index) => (
                    <>
                        <div key={index} className={`accordion-itemContainer ${expandedIndex == index ? "accordion-itemContainer-expand" : ""}`}>
                            <div className="accordion-item-sideContainer">
                                <h4>{item.sideTitle}</h4>
                                <button className="accordion-sideItem-ButtonContainer" onClick={() => handleClick(index)}>
                                    <div className={`accordion-sideItem-ButtonContainer-verticalLine ${expandedIndex == index ? "accordion-sideItem-ButtonContainer-verticalLine-expanded" : ""}`}></div>
                                    <div className="accordion-sideItem-ButtonContainer-horizontalLine"></div>
                                </button>
                            </div>
                        </div>
                        <div className={`accordion-item-extraContentContainer ${expandedIndex == index ? "accordion-itemContainer-expand" : ""}`}>
                            <div className="accordion-item-extraContent-imgContainer">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="accordion-item-extraContent-textContainer">
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    </>
                ))}
            </div>
            <div className="accordion-phone-contentContainer">
                <AccordionMenu items={items} />
            </div>
        </section>
    )
}

export default Accordion