import React from 'react'
import '../About/about.css'
import { asset } from '../../assets/asset'

function About() {
    return (
        <div className='about'>
            <div className="about-section-1">
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={asset.bio11} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={asset.bio10} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={asset.bio12} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="about-section-2">
                <div className="about-sec-1" data-aos="zoom-in">
                    <img className='vision' src={asset.vision} alt="" />
                </div>
                <div className="about-sec-1">
                    <h2>Our Vision</h2>
                    <p>Our vision for the Life Support is to establish an informative and empowering online hub dedicated to life-saving technologies. Through engaging design and comprehensive content, we aim to spotlight Life Support as a pioneering solution in critical care and emergency response. Our website will showcase the innovative features and functionalities of Life Support devices while emphasizing our unwavering dedication to saving lives. Join us in shaping a safer and healthier future with Life Support – where cutting-edge technology meets compassionate care</p>
                </div>
            </div>

            <div className="about-section-3">

                <div className="about-sec-2">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission at Life Support is to redefine standards in critical care by providing innovative, reliable, and accessible life-saving technologies. Through continuous research and development, we strive to empower healthcare professionals with advanced tools that enhance patient outcomes and save lives. We are committed to fostering partnerships, driving excellence, and delivering compassionate support to individuals and communities worldwide. At Life Support, our mission is clear: to be the beacon of hope in times of crisis and the cornerstone of resilience in healthcare. Together, let's advance the frontier of life-saving technology and make a meaningful difference in the lives we touch.
                    </p>
                </div>
                <div className="about-sec-2" data-aos="zoom-in">
                    <img className='mission' src={asset.mission} alt="" />
                </div>
            </div>

            <div className="about-section-4" data-aos="fade-right">
                <h2>LST Bacto-Scanner</h2>
                <p>What we can measure , can control is the basic tool to monitor and to establish the quality parameters of raw materials, processing /production and to build a consistent quality product perception for consumer satisfaction and finally to build a brand image of the company.</p>
                <p>Enumeration of Quality Index of Food/ Drinks – along with maintaining the hygiene of personnel /equipment, raw materials and finished products plays a pivotal role for the quality of end product of any food, shelf life and a set of characteristics requirement of consumers which is not only essential but a statutory requirement and moral too. Which can be monitored from initial stage due to restriction of development of toxins, enzymes and breakdown of basic ingredients. In case of milk , basics of bacteriological control needs from secretion of udder milk , utensils, milking conditions, reception, transportation, chilling/processing, storage to the end use of products. Hygiene of personnel , environment, equipment to processing parameters are responsible for maintaining the bacteriological standards.</p>
                <p>
                    LST BACTOSCANNER , BC-1 provides a integrated scientific equipment with its requisite hardware and software systems , which interpret the result of the sample within a minute and at the rate of sixty samples per hour. However for the confirmation of the sample , a complete cycle of 2.0 Hr of an unknown sample is required , which is recorded and analysed by a personal computer.
                </p>
            </div>
        </div>
    )
}

export default About
