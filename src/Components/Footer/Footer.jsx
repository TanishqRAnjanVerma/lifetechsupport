import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../Footer/footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div>
            <footer className='footer-section'>

                <div className="f_section-1" >
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 1000 1000"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        overflow="auto"
                        shapeRendering="auto"
                        fill="#ffffff"
                    >
                        <defs>
                            <path
                                id="wavepath"
                                d="M 0 2000 0 500 Q 140.5 408 281 500 t 281 0 281 0 281 0 281 0 281 0 v1000 z"
                            />
                            <path id="motionpath" d="M -562 0 0 0" />
                        </defs>
                        <g>
                            <use xlinkHref="#wavepath" y="-450" fill="#0C2C65">
                                <animateMotion dur="5s" repeatCount="indefinite">
                                    <mpath xlinkHref="#motionpath" />
                                </animateMotion>
                            </use>
                        </g>
                    </svg>
                    <div className="f_subsec-1" data-aos="fade-up">
                        <div className="footer-items-1" >
                            <h6>About Us</h6>
                            <p>What we can measure , can control is the basic tool to monitor and to establish the quality parameters of raw materials, processing /production and to build a consistent quality product perception for consumer satisfaction and finally to build a brand image of the company.</p>
                            <li className="f-item">
                                <a href="" className='f_icon'><FaFacebook /></a>
                                <a href="" className='f_icon'><FaWhatsapp /></a>
                                <a href="" className='f_icon'><FaLinkedin /></a>
                                <a href="" className='f_icon'><FaInstagram /></a>
                            </li>
                        </div>
                        <div className="footer-items-2">

                            <h6>Links</h6>
                            <li><a href="">Home</a></li>
                            <li><a href="">Services </a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Contact </a></li>
                        </div>
                    </div>
                    <div className="f_subsec-2" data-aos="fade-up" >
                        <div className="f_sub-2">
                            <h6>Address :</h6>

                            <p>
                                T61,Second Floor,Punjabi Basti, Baljit Nagar, Near Jhandewala chowk, New Delhi, Pin 110008
                            </p>

                            <h6>Email ID :</h6>
                            <p> info@lifesupportstech.com</p>
                            <h6>Phone Number</h6>
                            <p> +91-6202 43 8915</p>

                        </div>

                    </div>
                </div>

                <div className="f_section-2">
                    <p>&copy;2024 Life-Support. All right reserved</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
