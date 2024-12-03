import React from 'react'
import '../Contact/contact.css'

function Contact() {
    return (
        <div className='contact'>
            <div className="contact-section">
                <div className="contact-sec1">
                    <h3>
                        Get in Touch with us
                    </h3>
                    <p>
                        Connect with us for a world of superior hygiene and personalized care at Life-Support tech. Reach out to experience the best analysis of your product.
                    </p>
                    <br />
                    <h6><b>Customer Care:</b>  +91-6202 43 8915</h6>

                    <h6><b>Email Id:</b> info@lifesupportstech.com</h6>

                    <h6><b>Head Office:</b> T61,Second Floor,Punjabi Basti, Baljit Nagar, Near Jhandewala chowk, New Delhi, Pin 110008</h6>
                </div>
                <div className="contact-sec2">
                    <div class="form-group">
                        <input type="text" id="name" name="name" placeholder="Full Name" required />
                    </div>
                    <div class="form-group">
                        <input type="text" id="name" name="name" placeholder="Mobile No." required />
                    </div>
                    <div class="form-group">
                        <textarea id="message" name="message" rows="4" placeholder="What can we help you with?" required></textarea>
                    </div>
                    <div class="form-group">
                        <input id='submit' type="submit" value="Submit" />
                    </div>
                </div>
            </div>

            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7002.152094992736!2d77.17064912416706!3d28.65744155205751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d028dd8ac9ba9%3A0x31c3a60c291a9ea8!2sPunjabi%20Basti%2C%20Patel%20Nagar%2C%20Delhi%2C%20110005!5e0!3m2!1sen!2sin!4v1713879205085!5m2!1sen!2sin"
                    width="580"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map"
                ></iframe>

                <div className="map-1">
                    <h1 className='l-header'>Location </h1>
                </div>
            </div>
        </div>
    )
}

export default Contact
