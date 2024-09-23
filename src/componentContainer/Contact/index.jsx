import { useRef } from "react"
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

import "./style.css"
import video from "../../assets/videos/contact-video.mp4"
import Button from "../../components/Button"
import { InfiniteGallery } from "../../components";

const Contact = () => {
    const form = useRef();

    const sendEmail = () => {
        emailjs
            .sendForm('service_w1crit9', 'template_djk128h', form.current, {
                publicKey: 'Ts2VPzmMGRbcl2hXY',
            })
            .then(
                () => {
                    Swal.fire({
                        title: "Your email was sent successfully!",
                        icon: "success"
                    });
                    form.current.reset()
                },
                (error) => {
                    Swal.fire({
                        title: "Sorry, something went wrong!",
                        text: "Error: " + error,
                        icon: "error"
                    });
                },
            );
    };
    return (
        <>
            <main className="contactMain">
                <div className="contactContent">
                    <h2><span className="yellowColor">YOUR ADVENTURE</span> IS JUST A STEP AWAY</h2>
                    <h3>Contact us and live the experience.</h3>
                    <form ref={form} className="contactForm">
                        <input className="contact-textInput" type="text" name="fullName" id="fullName" placeholder="Full Name" />
                        <input className="contact-textInput" type="email" name="email" id="email" placeholder="Email Adress" />
                        <textarea className="contact-textAreaInput" name="textArea" id="textArea" placeholder="Message"></textarea>
                        <div className="contact-checkboxContainer">
                            <input type="checkbox" name="sendInformation" />
                            <p>By submitting this form you agree to send your informationto Futbol America . We will use it
                                to support our commercial activity and send your newsletters according to our pricavy policy.</p>
                        </div>
                        <Button handleClick={sendEmail} title="Submit" white={false} />
                    </form>
                </div>
            </main>
            <div className="contact-videoContainer">
                <video autoPlay muted loop playsInline id="contactVideo">
                    <source src={video} />
                </video>
            </div>
            <InfiniteGallery />
        </>
    )
}

export default Contact