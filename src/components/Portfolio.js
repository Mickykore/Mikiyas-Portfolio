import React from 'react';
import portfolio1 from '../photos/portfolio1.png';
import construction from '../photos/construction1.png';
import embraceEvent from '../photos/Embrace events.png';

const Portfolio = () => {
    return (
        <section className='portfolio container' id="portfolio">
            <div className="container">
                {/* Portfolio Section Heading */}
                <h2 className="text-center text-uppercase text-secondary mb-3">Portfolios</h2>
                {/* Portfolio Grid Items */}
                <div className="row">
                    {/* Top Row */}
                    <div className="col-md-6 mb-5">
                        <div className="portfolio-item">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100 bg-dark">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <a href="https://inventoryapp-phi.vercel.app" target="_blank"><img className="img-fluid" src={portfolio1} alt="..." /></a>
                            <h5 className="text-center p-3" style={{ color: "black", fontWeight: "bold" }}>inventory Management app</h5>
                            
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <div className="portfolio-item">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100 bg-dark">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <a href="https://construction-site-management-web-app.onrender.com/" target="_blank"><img className="img-fluid" src={construction} alt="..." /></a>
                            <h5 className="text-center p-3" style={{ color: "black", fontWeight: "bold" }}>construction Site Management app</h5>

                        </div>
                    </div>
                    {/* Bottom Row */}
                    <div className="col-md-6 mb-5 mt-5">
                        <div className="portfolio-item">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100 bg-dark">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <a href="https://www.embracevents.com/" target="_blank"><img className="img-fluid" src={embraceEvent} alt="..." /></a>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5 mt-5">
                        <div className="portfolio-item">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100 bg-dark">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={portfolio1} alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
