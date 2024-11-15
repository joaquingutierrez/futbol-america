import { BgGallery, CountryChoice, InfiniteGallery, Schedules, Testimony } from "../../components"
import "./style.css"
import argentinaImg from "../../assets/images/bgGallery/argentina.png"
import brazilImg from "../../assets/images/bgGallery/brazil.png"
import AccordionContainer from "../AccordionContainer"
import AutoGalleryContainer from "../AutoGalleryContainer"
import HotelSectionContainer from "../HotelSectionContainer"
import shermanImg from "../../assets/testimonies/sherman.jpg"
import pittman from "../../assets/testimonies/pittman.jpg"
import { useState } from "react"


import image1 from "../../assets/images/grandBrizo/image1.png"
import image2 from "../../assets/images/grandBrizo/image2.png"
import image3 from "../../assets/images/grandBrizo/image3.png"
import image4 from "../../assets/images/grandBrizo/image4.png"
import image5 from "../../assets/images/grandBrizo/image5.png"
import image6 from "../../assets/images/grandBrizo/image6.png"

import landPlaza1 from "../../assets/images/landPlaza/image1.png"
import landPlaza2 from "../../assets/images/landPlaza/image2.png"
import landPlaza3 from "../../assets/images/landPlaza/image3.png"
import landPlaza4 from "../../assets/images/landPlaza/image4.png"
import landPlaza5 from "../../assets/images/landPlaza/image5.png"

import othonPalace1 from "../../assets/images/othonPalace/image1.png"
import othonPalace2 from "../../assets/images/othonPalace/image2.png"
import othonPalace3 from "../../assets/images/othonPalace/image3.png"
import othonPalace4 from "../../assets/images/othonPalace/image4.png"
import othonPalace5 from "../../assets/images/othonPalace/image5.png"
import othonPalace6 from "../../assets/images/othonPalace/image6.png"

import southAmerica1 from "../../assets/images/southAmerica/image1.png"
import southAmerica2 from "../../assets/images/southAmerica/image2.png"
import southAmerica3 from "../../assets/images/southAmerica/image3.png"
import southAmerica4 from "../../assets/images/southAmerica/image4.png"
import southAmerica5 from "../../assets/images/southAmerica/image5.png"
import southAmerica6 from "../../assets/images/southAmerica/image6.png"

import savoyOthon1 from "../../assets/images/savoyOthon/image1.png"
import savoyOthon2 from "../../assets/images/savoyOthon/image2.png"
import savoyOthon3 from "../../assets/images/savoyOthon/image3.png"
import savoyOthon4 from "../../assets/images/savoyOthon/image4.png"
import savoyOthon5 from "../../assets/images/savoyOthon/image5.png"
import savoyOthon6 from "../../assets/images/savoyOthon/image6.png"

import customerIcon from "../../assets/icons/hotelItems/Customer.png"
import barbellIcon from "../../assets/icons/hotelItems/Barbell.png"
import bedIcon from "../../assets/icons/hotelItems/Bed.png"
import restaurantIcon from "../../assets/icons/hotelItems/Restaurant.png"
import spaFlowerIcon from "../../assets/icons/hotelItems/Spa Flower.png"
import swimmingIcon from "../../assets/icons/hotelItems/Swimming.png"
import wiFiIcon from "../../assets/icons/hotelItems/Wi-Fi.png"
import beachIcon from "../../assets/icons/hotelItems/Beach.png"
import twoBedsIcon from "../../assets/icons/hotelItems/Two Beds.png"
import vanImg from "../../assets/images/van.png"

const Services = () => {

    const [country, setCountry] = useState("")

    const imagesAndInfo = {
        ARGENTINA: {
            title: "ARGENTINA",
            desc: "Experience the dynamic soccer culture of La Plata, where every moment on the pitch is infused with passion and dedication. Train with top-tier clubs in cutting-edge facilities, refining your skills under expert guidance. Immerse yourself in the rich history of iconic stadiums, where soccer legends have left their mark. Indulge in the savory flavors of Argentine cuisine, sampling local delicacies that fuel your soccer adventures. Engage in friendly matches against local teams, immersing yourself in the competitive spirit of La Plata. Get ready for an unforgettable soccer experience in this vibrant city.",
            img: argentinaImg
        },
        BRAZIL: {
            title: "BRAZIL",
            desc: "Dive into the electric soccer atmosphere of Rio, where the rhythm of the game pulses through the city. Train under the tropical sun, perfecting your skills against the backdrop of sandy beaches and lush landscapes. Explore legendary stadiums, where soccer history comes alive with every step. Indulge in the diverse flavors of Brazilian cuisine, tasting local dishes that ignite your passion for the game. Engage in friendly matches against local teams, experiencing the thrill of competition in Rio's dynamic atmosphere. Prepare for a soccer journey like no other in this iconic city.",
            img: brazilImg,
        }
    }

    const testimony1 = {
        title: '"Unforgettable Experience!"',
        stars: 5,
        desc: '"Visiting Argentina with Futbol America tours was an experience of a lifetime. I got to play the beautiful sport in a different way. I experienced  a completely new culture and lifestyle. Getting to train with world class players was really something special. Touring throughout La plata and visiting in Buenos Aires was something I’ll never forget. It was really amazing to visit stadiums such as BOCA and Estudiantes. The highlight of the trip was the opportunity to watch the Copa Argentina semifinal between Defensa y Justicia and San Lorenzo. It let me understand how passionate the fans are about the game they love. The trip was truly a wonderful experience and would certainly recommend futbol America tours."',
        img: shermanImg,
        name: "Sam Sherman",
        job: ""
    }

    const testimony2 = {
        title: '"Dream Come True!"',
        stars: 5,
        desc: '"If you' + "'" + 're a soccer enthusiast looking to immerse yourself in the rich tapestry of Argentine soccer culture while exploring the beautiful sights of the country, then Futbol America' + "'" + 's tour is an absolute must! From the moment we landed, the tour was flawlessly organized, with each day packed full of activities that catered to both the passionate soccer fan and the avid traveler. Watching games in some of Argentina' + "'" + 's most storied stadiums, we felt the pulsating energy of the crowds and the raw passion for the beautiful game. But Futbol America' + "'" + 's experience goes far beyond just watching soccer; they arranged for us to play friendly matches with local teams, providing a rare and thrilling chance to truly engage with the sport at a grassroots level. The camaraderie and sportsmanship displayed were heartwarming, creating memories that will last a lifetime. In addition to the soccer-filled agenda, Futbol America did a phenomenal job of integrating cultural experiences. We explored vibrant Buenos Aires. Each activity was thoughtfully chosen to ensure we got a holistic view of Argentina’s diverse and rich cultural heritage. The tour guides provided by Futbol America were exceptional—knowledgeable, friendly, and always willing to go the extra mile to make our experience special. Their insights into the history of soccer in Argentina enriched our understanding and appreciation of each match and soccer event we attended. Overall, Futbol America offered an unforgettable journey that perfectly balanced soccer, sightseeing, and cultural immersion. Whether you' + "'" + 're a die-hard soccer fan or just someone keen to explore Argentina through the lens of its favorite sport, this tour delivers a unique and exhilarating experience. We came as strangers but left as part of a community, united by our shared passions and unforgettable experiences. Hats off to Futbol America for arranging such a spectacular adventure and truly a trip of a lifetime!"',
        img: pittman,
        name: "Ella Pittman",
        job: ""
    }

    const changeCountry = (choice) => {
        setCountry(choice)
    }

    const hotels = {
        ARGENTINA: [
            {
                title: "HOTEL LAND PLAZA",
                link: "https://landplazalaplata.com.ar/en/",
                imgs: [
                    landPlaza1,
                    landPlaza2,
                    landPlaza3,
                    landPlaza4,
                    landPlaza5
                ],
                items: [
                    {
                        img: customerIcon,
                        item: "2 People"
                    },
                    {
                        img: bedIcon,
                        item: "Queen bed"
                    },
                    {
                        img: wiFiIcon,
                        item: "Wifi"
                    },
                    {
                        img: restaurantIcon,
                        item: "Restaurant"
                    },
                    {
                        img: barbellIcon,
                        item: "Gym"
                    },
                    {
                        img: swimmingIcon,
                        item: "Pool"
                    }
                ]
            },
            {
                title: "HOTEL GRAND BRIZO",
                link: "https://www.hotelgrandbrizobuenosaires.com/en/",
                imgs: [
                    image1,
                    image2,
                    image3,
                    image4,
                    image5,
                    image6
                ],
                items: [
                    {
                        img: customerIcon,
                        item: "2 People"
                    },
                    {
                        img: bedIcon,
                        item: "Queen bed"
                    },
                    {
                        img: wiFiIcon,
                        item: "Wifi"
                    },
                    {
                        img: restaurantIcon,
                        item: "Restaurant"
                    },
                    {
                        img: barbellIcon,
                        item: "Gym"
                    },
                    {
                        img: swimmingIcon,
                        item: "Pool"
                    },
                    {
                        img: spaFlowerIcon,
                        item: "Spa & Wellness Center"
                    }
                ]
            }
        ],
        BRAZIL: [
            {
                title: "HOTEL OTHON PALACE",
                link: "https://www.othon.com.br/hotel-copacabana/rio-othon-palace",
                imgs: [
                    othonPalace1,
                    othonPalace2,
                    othonPalace3,
                    othonPalace4,
                    othonPalace5,
                    othonPalace6
                ],
                items: [
                    {
                        img: customerIcon,
                        item: "2 People"
                    },
                    {
                        img: bedIcon,
                        item: "Queen bed"
                    },
                    {
                        img: wiFiIcon,
                        item: "Wifi"
                    },
                    {
                        img: restaurantIcon,
                        item: "Restaurant"
                    },
                    {
                        img: barbellIcon,
                        item: "Gym"
                    },
                    {
                        img: swimmingIcon,
                        item: "Pool"
                    },
                    {
                        img: beachIcon,
                        item: "Facing the beach"
                    }
                ]
            },
            {
                title: "HOTEL SOUTH AMERICA",
                link: "https://www.southamericanhotel.com.br/",
                imgs: [
                    southAmerica1,
                    southAmerica2,
                    southAmerica3,
                    southAmerica4,
                    southAmerica5,
                    southAmerica6
                ],
                items: [
                    {
                        img: customerIcon,
                        item: "2 People"
                    },
                    {
                        img: twoBedsIcon,
                        item: "Individual beds"
                    },
                    {
                        img: wiFiIcon,
                        item: "Wifi"
                    },
                    {
                        img: restaurantIcon,
                        item: "Restaurant"
                    },
                    {
                        img: barbellIcon,
                        item: "Gym"
                    },
                    {
                        img: swimmingIcon,
                        item: "Pool"
                    }
                ]
            },
            {
                title: "HOTEL SAVOY OTHON",
                link: "https://www.othon.com.br/hotel-copacabana/savoy-othon",
                link: "",
                imgs: [
                    savoyOthon1,
                    savoyOthon2,
                    savoyOthon3,
                    savoyOthon4,
                    savoyOthon5,
                    savoyOthon6
                ],
                items: [
                    {
                        img: customerIcon,
                        item: "2 People"
                    },
                    {
                        img: bedIcon,
                        item: "Queen bed"
                    },
                    {
                        img: wiFiIcon,
                        item: "Wifi"
                    },
                    {
                        img: restaurantIcon,
                        item: "Restaurant"
                    },
                    {
                        img: barbellIcon,
                        item: "Gym"
                    }
                ]
            }
        ]
    }

    return (
        <main>
            {country ? (
                <>
                    <BgGallery info={imagesAndInfo[country.toUpperCase()]} />
                    <AccordionContainer />
                    <HotelSectionContainer hotels={hotels[country.toUpperCase()]} />
                    <section className="services-testimoniesSection">
                        <h2>Hear their <span>Stories</span></h2>
                        <div className="services-testimoniesContainer">
                            <Testimony content={testimony1} />
                            <Testimony content={testimony2} />
                        </div>
                    </section>
                    <AutoGalleryContainer />
                    <InfiniteGallery />
                </>
            ) : (
                <CountryChoice handleChange={changeCountry} />
            )}
        </main>
    )
}

export default Services