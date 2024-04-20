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
                <a href="https://www.facebook.com/mikiyas.ayele1"><FaFacebook /></a>
                <a href="https://twitter.com/MikiyasKore"><FaXTwitter /></a>
                <a href="https://github.com/Mickykore"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/mikiyas-ayele"><FaLinkedin /></a>
                <a href="https://discord.com/users/994946188426096672"><FaDiscord /></a>
            </div>
        </footer>
    );
};

export default Footer;