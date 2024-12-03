import React, { useEffect } from 'react'
import { asset } from '../../assets/asset'
import { LuKeyboard } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa6";


import Aos from 'aos'
import 'aos/dist/aos.css'
import '../Home/home.css'

import { GoArrowDownRight } from "react-icons/go";


const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className='home'>
            <div className="home-section-1">
                <div className="text-1" data-aos="fade-up" >
                    <h3 className='heading ' >ONE-MINUTE </h3>
                    <h3 className='heading'>SOLUTION TO,</h3>
                    <h3 className='heading'>BACTERIA-FREE LIVING</h3>
                    <a href="" className='learn'>Learn more about our process <GoArrowDownRight /></a>
                </div>

                <div className="banner_img">
                    <img className='img_1 ' data-aos="fade-up" src={asset.bio1} alt="" />
                    <img className='img_2' data-aos="fade-right" src={asset.bio2} alt="" />
                    <img className='img_3' data-aos="fade-up" src={asset.bio3} alt="" />
                    <img className='img_4' data-aos="fade-down" src={asset.bio4} alt="" />
                    <img className='img_5' data-aos="fade-up-right" src={asset.bio5} alt="" />
                    <img className='img_6' data-aos="fade-up-left" src={asset.bio6} alt="" />
                </div>
                <div class="area" >
                    <ul class="circles">
                        <li></li> <li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                    </ul>
                </div >
            </div>

            <div className="home-section-2">
                <div className="h-sec-1" data-aos="fade-up">
                    <h2 className='h-title-1'>
                        Bacto-Scanner
                    </h2>
                    <h4 className='h-title-2'>SPC, Coliform & Customized Microbes</h4>
                    <p className='h-title-3'>With cutting-edge technology and precise analytics, our device ensures accurate and swift identification of microbial contaminants in various samples. Whether you're in food production, healthcare, or environmental monitoring, trust Bacto-Scanner to deliver reliable results, safeguarding quality and compliance. Experience efficiency and peace of mind with our advanced microbial detection system.</p>
                </div>
                <div className="h-sec-2">
                    <img className='lab-img' src={asset.bio7} alt="" />
                </div>
            </div>

            <div className="home-section-3">
                <div className="h-sec-3">
                    <img className='lab-img' src={asset.bio8} alt="" />
                </div>
                <div className="h-sec-4" data-aos="fade-up">
                    <h2 className='h-title-4'>
                        Bacto-Screen
                    </h2>
                    <h4 className='h-title-5'>SPC, Coliform</h4>
                    <p className='h-title-6'>
                        Introducing BactoScreen, your reliable solution for SPC "Standard Plate Count" and Coliform detection. This innovative device offers swift and accurate identification of microbial contaminants in diverse samples. With its user-friendly interface and precise analytics, BactoScreen ensures efficient monitoring of hygiene and quality standards in various industries.
                        Stay ahead of microbial risks with BactoScreen, your trusted partner in maintaining product safety and compliance.</p>
                </div>

            </div>
            <div className="home-section-4">
                <div className="h-sec-5" data-aos="fade-up">
                    <h2 className='h-title-7'>
                        Bacto-Flash
                    </h2>
                    <h4 className='h-title-8'> SPC</h4>
                    <p className='h-title-9'>Experience the speed and precision of BactoFlash SPC, your go-to solution for rapid Standard Plate Count 'SPC' detection. Utilizing advanced technology, BactoFlash delivers swift and accurate results, empowering industries to efficiently monitor microbial contamination levels. Safeguard product integrity and compliance with the agility of BactoFlash SPC, your reliable partner in quality assurance.</p>
                </div>
                <div className="h-sec-6" >
                    <img className='lab-img' src={asset.bio9} alt="" />
                </div>
            </div>

            <div className="home-section-6">
                <div className="h-sec-7">
                    <img src={asset.bio13} class="d-block w-100" alt="..." />
                </div>

                <div className="h-sec-8">
                    <h1 className='head8'>Features</h1>
                    <div className="h-sub-sec8" data-aos="fade-up" >
                        <div className="feature">
                            <LuKeyboard className='feature-icon' />
                            <h3 className='header-8'>Rapid Testing</h3>
                            <p className='para8'>Provides quick and efficient results, significantly reducing testing time compared to traditional methods.</p>

                        </div>

                        <div className="feature">
                            <FiSearch className='feature-icon' />
                            <h3 className='header-8'>High Accuracy</h3>
                            <p className='para8'>Advanced technology ensures precise and reliable testing, guaranteeing accurate results.
                            </p>

                        </div>

                        <div className="feature">
                            <IoPerson className='feature-icon' />
                            <h3 className='header-8'>User-Friendly-Interface</h3>
                            <p className='para8'>Intuitive design for easy operation and minimal training requirements, making it accessible to all.</p>

                        </div>

                        <div className="feature">
                            <FaDatabase className='feature-icon' />
                            <h3 className='header-8'>Data Management</h3>
                            <p className='para8'>Integrated software for seamless data storage, analysis, and reporting, facilitating informed decision-making.</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className="home-section-5">

                <div className="sub-h1">

                    <h3>
                        Call for an Enquiry
                    </h3>
                    <p>
                        We are here to provide best solutions for you.
                    </p>
                </div>
                <div className="sub-h2">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal-5">
                        Enquiry
                    </button>
                    <div className="modal fade" id="exampleModal-5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered  modal-lg">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="body-1">
                                        <img src={asset.Picture6} class="img-fluid" alt="..." />
                                    </div>
                                    <div className="body-2">
                                        <div class="col g-3">
                                            <div class="col">
                                                <input type="text" class="form-control" placeholder="Full Name" aria-label="Full Name" />
                                            </div>
                                            <div class="col">
                                                <input type="text" class="form-control" placeholder="Mobile Number" aria-label="Mobile Number" />
                                            </div>
                                            <div className="col">
                                                <label class="visually-hidden" for="inlineFormSelectPref">Preference</label>
                                                <select class="form-select" id="inlineFormSelectPref">
                                                    <option selected>Please Select</option>
                                                    <option value="1">Bacto-Scanner</option>
                                                    <option value="2">Bacto-Screen</option>
                                                    <option value="3">Bacto-Flash</option>

                                                </select>
                                            </div>

                                            <div className="col">
                                                <div class="form-floating">
                                                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "150px", resize: "none" }}></textarea>
                                                    <label for="floatingTextarea2">What can we help you with?</label>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">

                                    <button type="button" class="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Home
