import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn, FaDiscord } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer text-center">
            <Container>
                <Row>
                    {/* Footer Location */}
                    <Col lg={4} className="mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            Addis Ababa <br />
                            Nifas Silk Lafto, Woreda 10
                        </p>
                    </Col>
                    {/* Footer Social Icons */}
                    <Col lg={4} className="mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/mikiyas.ayele1"><FaFacebookF /></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://twitter.com/MikiyasKore"><FaTwitter /></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/Mickykore"><FaGithub /></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/mikiyas-ayele"><FaLinkedinIn /></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://discord.com/users/994946188426096672"><FaDiscord /></a>
                    </Col>
                    {/* Footer About Text */}
                    <Col lg={4}>
                        <h4 className="text-uppercase mb-4">About Me</h4>
                        <p className="lead mb-0">
                            MIKIYAS AYELE KORE, a software engineer with a background in civil engineering
                        </p>
                    </Col>
                </Row>
            </Container>
            {/* Copyright Section */}
        </footer>
    );
}

export default Footer;
