import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaLinkedinIn } from 'react-icons/fa';
const ContactMe = () => {
    return (
        <section className="container-fluid" style={{ backgroundColor: '#f8f9fa', minHeight: "100vh" }} id='contact'>
            <div className="contact-section row justify-content-center align-items-center m-5">
                {/* Contact Information */}
                <div className="col-md-6 contact-info">
                    <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Contact Information</h3>
                    <div className="mb-3">
                        <i className="fas fa-envelope"></i>
                        <span style={{ fontSize: '1.25rem', marginLeft: '1rem' }}>Email:</span>
                        <p style={{ fontSize: '1.1rem' }}>mikiyasayelekore@gmail.com</p>
                    </div>
                    <div className="mb-3">
                        <i className="fas fa-phone"></i>
                        <span style={{ fontSize: '1.25rem', marginLeft: '1rem' }}>Phone:</span>
                        <p style={{ fontSize: '1.1rem' }}>+251912292684</p>
                    </div>
                    <div className="mb-3">
                        <i className="fas fa-linkden"><FaLinkedinIn /></i>
                        <span style={{ fontSize: '1.25rem', marginLeft: '1rem' }}>LinkedIn:</span>
                        <p style={{ fontSize: '1.1rem' }}>
                            <a href="https://www.linkedin.com/in/mikiyas-ayele" target="_blank" rel="noopener noreferrer">linkedin.com/in/mikiyas-ayele</a>
                        </p>
                    </div>
                    <div className="mb-3">
                        <i className="fas fa-map-marker-alt"></i>
                        <span style={{ fontSize: '1.25rem', marginLeft: '1rem' }}>Address:</span>
                        <p style={{ fontSize: '1.1rem' }}>Addis Ababa</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="col-md-6 contact-form mt-5">
                    <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Send Me a Message</h3>
                    <form id="contactForm" action="mailto:dagimwalelegne@gmail.com" method="post" encType="text/plain">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label" style={{ fontSize: '1.25rem' }}>Name:</label>
                            <input type="text" className="form-control" id="name" name="name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label" style={{ fontSize: '1.25rem' }}>Email:</label>
                            <input type="email" className="form-control" id="email" name="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label" style={{ fontSize: '1.25rem' }}>Message:</label>
                            <textarea className="form-control" id="message" name="message" rows="4" required style={{ fontSize: '1.1rem' }}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ fontSize: '1.25rem' }}>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
