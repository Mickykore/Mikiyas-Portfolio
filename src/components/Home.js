import React from 'react';
import mikigurd from '../photos/mikigurd.JPG';

const AboutMe = () => {
    return (
        <section className='home' id='home'>
            <div className='container'>
                <img src={mikigurd} alt='Mikigurd' className='gurd' />
                <div className='content'>
                    <h2><strong style={{color: "red"}}>Mikiyas</strong> Ayele Kore</h2>
                    <h5 style={{ color: "red", fontWeight: "bold" }}>Full Stack Developer</h5>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;