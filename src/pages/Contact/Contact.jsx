import './Contact.css'
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <section id='contact' className='contact'> 

            <h3 className='contact-title'>Contact</h3>
            <h2 className='contact-description'>
                Let’s Discuss Your <span>Project</span>
            </h2>

            <div className="contact-container">

                {/* LEFT SIDE */}

                <div className="contact-content">

                    <div className="telephone">
                        <div className="icon-square"><BsTelephone /></div>
                        <div>
                            <p className='contact-w-title'>Call me</p>
                            <p className='contact-w-des'>+00966538787071</p>
                        </div>
                    </div>

                    <div className="email">
                        <div className="icon-square"><MdOutlineMail /></div>
                        <div>
                            <p className='contact-w-title'>Email me</p>
                            <p className='contact-w-des'>roaazoman@gmail.com</p>
                        </div>
                    </div>

                    <div className="address">
                        <div className="icon-square"><FaMapMarkerAlt /></div>
                        <div>
                            <p className='contact-w-title'>Address</p>
                            <p className='contact-w-des'>Saudi Arabia, Riyadh</p>
                        </div>
                    </div>

                </div>


                {/* RIGHT SIDE FORM */}

                <form className="contact-form">

                    <input
                        type="text"
                        placeholder="Full name"
                        className="contact-input"
                    />

                    <input
                        type="email"
                        placeholder="Your email"
                        className="contact-input"
                    />

                    <input
                        type="tel"
                        placeholder="Phone number"
                        className="contact-input phone"
                    />

                    <textarea
                        placeholder="Message"
                        className="contact-input message"
                    ></textarea>

                    <button className="send-btn">
                        Send Message
                    </button>

                </form>

            </div>

        </section>
    )
}

export default Contact