import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from "./Home";
import Portfolio from "./Portfolio";
import ContactMe from "./ContactMe";
import Footer from './Footer';
import AboutMe from './AboutMe';
import { FaBars } from 'react-icons/fa';
import cvPdf from '../photos/mikiyasKorecv.pdf';

const Header = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <Navbar bg="light" expand="lg" expanded={expanded} fixed="top">
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle onClick={() => setExpanded(!expanded)}>
                        <FaBars />
                    </Navbar.Toggle>
                    <Navbar.Collapse>
                        <Nav className="ml-auto">
                            <Nav.Link href="#home" onClick={() => setExpanded(false)}>Home</Nav.Link>
                            <Nav.Link href="#about" onClick={() => setExpanded(false)}>About Me</Nav.Link>
                            <Nav.Link href="#portfolio" onClick={() => setExpanded(false)}>Portfolio</Nav.Link>
                            <Nav.Link href="#contact" onClick={() => setExpanded(false)}>Contact Me</Nav.Link>
                            <Nav.Link href={cvPdf} onClick={() => setExpanded(false)}>CV</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Home />
            <AboutMe />
            <Portfolio />
            <ContactMe />
            <Footer />
        </>
    );
}

export default Header;
