import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer>
            <div>
                <h4>LOCATION</h4>
                <p>Addis Ababa <br/> Nifas Silk Lafto, Woreda 10</p>
            </div>
            <div className="social-icons">
                <a href="https://www.facebook.com"><FaFacebook /></a>
                <a href="#"><FaXTwitter /></a>
                <a href="https://github.com"><FaGithub /></a>
                <a href="https://www.linkedin.com"><FaLinkedin /></a>
                <a href="https://discord.com"><FaDiscord /></a>
            </div>
        </footer>
    );
};

export default Footer;