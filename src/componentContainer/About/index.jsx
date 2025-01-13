import { Checkpoints, InfiniteGallery, TeamGallery, TimeLapse } from "../../components"
import AboutFrontPage from "../AboutFrontPage"
import "./style.css"
import guzonImg from "../../assets/team/guzon.jpg"
import neveleffImg from "../../assets/team/neveleff.jpg"
import unknownImg from "../../assets/team/unknown.png"
import sabinImg from "../../assets/team/sabin.jpg"
import sousaImg from "../../assets/team/sousa.jpg"
import oliveraImg from "../../assets/team/olivera.jpg"
import barrientosImg from "../../assets/team/barrientos.jpg"
import caroImg from "../../assets/team/caro.jpg"


const About = () => {

    const team = [
        {
            img: neveleffImg,
            name: "Jeronimo Neveleff",
            desc: "After more then 10 years assisitng Soccer Tours at Futbol America, First Team Tour Operator in Southamerica, founded in 1998, Jeronimo became CEO in 2019. Argentinian native, holding a Physical Education and Marketing degree. He is also a certified licenced Coach. Involved at details on all levels of the process from professional to amatheur teams, continues the company tradition to deliver the ¨Experience of their lives¨ to all participants. Fluent in Spanish, English and Portuguese.",
            contactMail: "jneveleff@futbolamericatours.com",
            phone: "+5492235965940"
        },
        {
            img: guzonImg,
            name: "Aldo Guzon",
            desc: "Joined in 2019, Aldo arrived at Futbol America with one mission: improved the unbeatable. Prepare to be prepared. Graduated in Business Administration and Marketing, he became the heart of the company. Seriousness, quality, and precision.These are the words for his  hard work and commitment. His department responsability is to make participants receive the expected and beyond. Along with the rest of the team, create memories that will be taken for a lifetime.",
            contactMail: "guzonaldo@futbolamericatours.com",
            phone: "+5491167487823"
        },
        {
            img: sousaImg,
            name: "Willer Sousa",
            desc: "With a degree in Production Engineering and Logistics from the Estacio de Sá University in Rio de Janeiro, Willer has spent more than 28 years dedicated to soccer. As a player, his carrer for clubs in Brazil and Europe gave him a wide vision of the impact of well organize clubs can provide for athetes. After retirement  he has participate and organized pre-season and logistics for soccer clubs, professional games and scouting consultancy. Proud of providing opportunities to players and top team experiences, he works in creative ways to deliver the best of the best on the southamerican soccer culture and willing to colaborate with young players pathway when is needed. Since 2007, he has been responsible for Futbol América's operations in Brazil and Argentina.",
            contactMail: "willersousa@futbolamericatours.com",
            phone: "+5532999079023"
        },
        {
            img: sabinImg,
            name: "Marc Sabin",
            desc: "Based in Cincinnati, Marc has the responsibility of the US office. He played at the University of Kentucky and holds a USSF “A” license, USSF National Youth License and a NSCAA DIRECTOR OF COACHING Diploma. He has an extensive 25 plus year coaching career at the  USSDA, ECNL, USYSA,  US club NPL and Collegiate level. This and having personally lead 5 teams internationally, gives him the perfect vision to propose and interact with Coaches and Club Directors. Marc also facilitates scheduling an International Team Tour and advising young players on International Residential programs. Futbol America is proud to work with Marc as US Representative since 2023.",
            contactMail: "marcsabin@futbolamericatours.com"
        },
        {
            img: barrientosImg,
            name: "Juan Barrientos",
            desc: `Juan Barrientos is an Argentinian ex soccer player with a professional career for more than 12 years.\n
From Racing Club de Avellaneda (Argentina) to the first European leagues (France, Greece, Bulgaria), Juan has obtained a great experience that has allowed him to develop as a youth Coach (USSF D License) in Florida Premier FC since 2015 for ECNL/ECNLR league in Tampa, Florida.\n
Juan is also the creator of Total Futbol Camp, a soccer program for boys and girls that combine fun and development to grow in the skills and the passion for the game.
`,
            contactMail: ""
        },
        {
            img: oliveraImg,
            name: "Emanuel Olivera",
            desc: "Say Hello to Coach Emmanuel Olivera. He has been playing soccer since he was 5 years old, he went through all the academy divisions until he obtained his professional contract in 2015 (Argentine first division) at Club Gimnasia y Esgrima de la Plata as well as playing in the second and third divisions while he was finishing his Law degree before moving to the US in 2019.Since moving to Kentucky coach “E”, Argentina“A” License  (ATFA -CONMEBOL US Soccer approved) has opened his own technical training business, Coach Emmanuel Soccer and has trained over 500 players ( boys and girls) and worked as head coach  at Central Kentucky Storm, Georgetown Football Club (KPL/KSSL). He offers training all year around, including summer and winter camps. Most recently,  he was a part of the IMG Academy Summer Soccer Camp. His goal is to share his knowledge and love for the sport to create a positive impact on the players, and see results on and off the field."
        },
        {
            img: caroImg,
            name: "Diana Caro",
            desc: 'She is Diana Caro For more than 10 years, she has accompanied the soccer sports process in the different categories in which one of her children has participated. As a mother, she is aware of the dreams of young people. For this reason, she has decided a year ago to accompany Soccer Tours in Fútbol América. from Colombia.She is currently a Lawyer, Specialist in Procedural Law, Sports Coaching, with a diploma in Fundamentals of Management for Sports Organizations, she also stands out for promoting the organization of events and their logistics, through the Soccer Go foundation “Travel for a dream”, the whose mission is to transform the quality of life of children, adolescents and young people in Colombia through the promotion of sports through trips, excursions, events and recreation. Ensuring that they live unforgettable experiences through national and international travel, which allows them to learn about other cultures, where they carry out sports exchanges or compete in high-level tournaments, and also grow personally and professionally, strengthening their sporting talent and promoting their comprehensive development. ”.'
        }
    ]

    return (
        <main>
            <AboutFrontPage />
            <Checkpoints />
            <TeamGallery team={team} />
            <div className="about-textContainer">
                <p>Beyond the world of soccer, Futbol America Tours brings over 24 years of expertise in crafting exceptional travel experiences for a diverse range of audiences. From corporate travel solutions to seamless crew logistics and dynamic event management, our team is dedicated to ensuring every journey is effortless and memorable. With a network of reliable partners and affiliates spanning across the globe, including Argentina, Chile, and the United States, we have successfully delivered projects across various industries and sectors. Explore our comprehensive travel services below, designed to simplify your travel needs and elevate your experience to new heights. </p>
            </div>
            <TimeLapse />
            <InfiniteGallery />
        </main>
    )
}

export default About