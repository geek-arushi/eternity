import React from 'react';
import { Link } from 'react-router-dom';
const HeroBanner3 = () => {
    return (
            <section className="agk-hero">
                <div className="hero-wrapper-three">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                
                                <div className="hero-content mb-70 pf_fadeup">
                                    <h1>Agency For Growth Through Innovative <span>Marketing.</span></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-wrapper-two">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <ul className="service-list pf_fadeup">
                                                <li>
                                                    
                                                    <Link to="/service/service-details" className="agenko-iconic-box style-one">
                                                        <div className="icon">
                                                        <i className="bi bi-browser-edge"></i>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Website Design Service</h4>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    
                                                    <Link to="/service/service-details" className="agenko-iconic-box style-one">
                                                        <div className="icon">
                                                        <i className="bi bi-code-square"></i>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Web Development Service</h4>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    
                                                    <Link to="/service/service-details" className="agenko-iconic-box style-one">
                                                        <div className="icon">
                                                        <i className="bi bi-lightbulb"></i>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Brand Strategy Solutions</h4>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                   
                                                    <Link to="/service/service-details" className="agenko-iconic-box style-one">
                                                        <div className="icon">
                                                        <i className="bi bi-megaphone"></i>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Digital Marketing Solution</h4>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-8">
                                            
                                            <div className="hero-image style-one pf_fadeup">
                                                <img src="/assets/images/digital-agency/hero/hero-img1.jpg" alt="Hero Image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
            </section>
    );
};

export default HeroBanner3;