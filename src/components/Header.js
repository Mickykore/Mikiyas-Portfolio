import React from 'react';
import Home from "./Home";
import Portfolio from "./Portfolio";
import ContactMe from "./ContactMe";
import Footer from './Footer';
import AboutMe from './AboutMe';
import { FaBars } from 'react-icons/fa';

const Header = () => {

    
    return (
        <div>
        <nav>
            <ul>
                <li><a href="#home"></a>Home</li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact Me</a></li>
                <li><a href="#resume">CV</a></li>
            </ul>
        </nav>
        <Home />
        <AboutMe />
        <Portfolio />
        <ContactMe />
        <Footer />
        </div>
    );
}

export default Header;