import React, { useState } from 'react';
import miki from '../photos/miki.jpg';

const AboutMe = () => {
    const [about, setAbout] = useState('skills');

    return (
        <section className="about" id="about">
            <div className="container">
                    <div className="">
                        <h2>About Me</h2>
                        <p>
                            I'm a Civil Engineer and <strong style={{ color: "red" }}>Full Stack Developer</strong> with a passion for problem-solving and coding. 
                            A quick learner, I eagerly embrace new technologies. 
                            I excel in teamwork, thrive under pressure, and go the extra mile to deliver. 
                            Known for creative problem-solving, I value collaboration and feedback. 
                            Self-motivated, I continuously seek to enhance my skills and knowledge. 
                            With a positive outlook, reliability, and dedication, I consistently deliver exceptional results.
                        </p>
                        {/* Navigation Buttons */}
                        <ul className="nav nav-pills mb-4">
                            <li className="nav-item">
                                <button className={`nav-link ${about === "skills" ? "active disabled" : ""}`} onClick={() => setAbout('skills')}>Skills</button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link ${about === "experience" ? "active disabled" : ""}`} onClick={() => setAbout('experience')}>Experience</button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link ${about === "education" ? "active disabled" : ""}`} onClick={() => setAbout('education')}>Education</button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link ${about === "certificate" ? "active disabled" : ""}`} onClick={() => setAbout('certificate')}>Certificate</button>
                            </li>
                        </ul>
                        {/* Content Based on Selected Tab */}
                        {about === 'skills' && (
    <div>
        <h3 className="mb-4">Skills</h3>
        <ul className="list-unstyled">
            <li className="mb-3">Innovation, MERN Software, Teamwork</li>
            <li className="mb-3"><strong style={{ color: "#0dcaf0" }}>Frontend:</strong> Bootstrap, CSS3, HTML5, JavaScript, React.js</li>
            <li className="mb-3"><strong style={{ color: "#0dcaf0" }}>Backend:</strong> Django, Express.js, Node.js, Python, User Authentication</li>
            <li className="mb-3"><strong style={{ color: "#0dcaf0" }}>Databases:</strong> MongoDB, MySQL</li>
            <li className="mb-3"><strong style={{ color: "#0dcaf0" }}>Other Technologies:</strong> Git, GitHub, Java</li>
        </ul>
    </div>
)}

                        {about === 'experience' && (
                            <div>
                                <h3>Experience</h3>
                                <div className='row'>
                                <ul className='col-5'>
                                    <li>
                                        <span style={{ color: "#0dcaf0" }}>Web Developer Freelancer</span> <br />
                                        <span style={{ color: "#0dcaf0" }}>Mesfin General Contractor, Addis Ababa</span> | 03/2024 - Present <br />
                                        <p> - Developed and maintained a comprehensive site management system using the MERN stack and continues to monitor and maintain the application to ensure optimal performance and functionality.</p>
                                    </li>
                                </ul>
                                    <ul className='col'>
                                    
                                    <li>
                                        <span style={{ color: "#0dcaf0" }}>Web Developer Freelancer </span>     <br />
                                        <span style={{ color: "#0dcaf0" }}>YD Accessories, Adama</span> |  01/2024 - Present<br />
                                         - Developed and maintained a comprehensive inventory management system using the MERN stack and continues to monitor and maintain the application to ensure optimal performance and functionality.
                                    </li>
                                </ul>
                                    <ul className='col'>
                                    <li>
                                        <span style={{ color: "#0dcaf0" }}>Web Developer Freelancer</span>      <br />
                                        <span style={{ color: "#0dcaf0" }}>Joka Trading, Adama</span> | 12/2023 - 04/2024<br />
                                         - Developed and maintained a comprehensive inventory management system using the MERN stack
                                    </li>
                                </ul>
                                </div>
                            </div>
)}

                        {about === 'education' && (
                            <div>
                                <h3>Education</h3>
                                <ul>
                                    <li className="mb-4">
                                        <span className="font-weight-bold font-italic" style={{ color: "#0dcaf0" }}>Software Engineering Program</span>
                                        <br />
                                        <span className="text-cyan">ALX</span>
                                        <br />
                                        <span className="text-cyan">09/2023</span>
                                    </li>
                                    <li className="mb-4">
                                        <span className="font-weight-bold font-italic" style={{ color: "#0dcaf0" }}>BSc in Civil Engineering</span>
                                        <br />
                                        <span className="text-cyan">Woldia University</span>
                                        <br />
                                        <span className="text-cyan">Ethiopia</span>
                                        <br />
                                        <span className="text-cyan">GPA: 3.58</span>
                                        <br />
                                        <span className="text-cyan">06/2018</span>
                                    </li>
                                </ul>
                            </div>
                        )}
                        {about === 'certificate' && (
                            <div>
                                <h3>Certificates</h3>
                                <ul>
                                    <li className="mb-4">
                                        <span className="font-weight-bold font-italic" style={{ color: "#0dcaf0" }}>ALX Software Engineering Program Certificate</span>
                                        <br />
                                        <a href="https://intranet.alxswe.com/certificates/PmBHNXE3Gx" target="_blank">View Certificate</a>
                                    </li>
                                    <li className="mb-4">
                                        <span className="font-weight-bold font-italic" style={{ color: "#0dcaf0" }}>Java Certificate</span>
                                        <br />
                                        <a href="https://www.udemy.com/certificate/UC-ace293d5-a467-4952-8f88-8f32bef5c80f/" target="_blank">View Certificate</a>
                                    </li>
                                    <li className="mb-4">
                                        <span className="font-weight-bold font-italic" style={{ color: "#0dcaf0" }}>BSc in Civil Engineering Diploma</span>
                                        <br />
                                        <a href="https://drive.google.com/file/d/1NinoTzGgnnHOMOQ9Q9IIXxxxiDF20dn9/view?usp=sharing" target="_blank">View Diploma</a>
                                    </li>
                                </ul>
                            </div>
                        )}

                    </div>
                </div>
        </section>
    );
};

export default AboutMe;
