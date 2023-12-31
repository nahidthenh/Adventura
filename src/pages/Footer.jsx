import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <>
            <div className="cta-wrap py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={8}>
                            <h3>Not a Member Yet?</h3>
                            <p>Join us! Our members can access savings of up to 50% and earn Trip Coins while booking.</p>
                        </Col>
                        <Col lg={4} className="text-end">
                            <div className="cta-btn-group">
                                <Link className="active" to='signin'>Sign In</Link>
                                <Link to='signup'>Sign Up</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <footer className="footer-wrap">
                <Container>
                    <Row>
                        <Col md={6} lg={3} sm={12}>
                            <div className="footer-widget">
                                <h3 className="footer-title">
                                    About Us.
                                </h3>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident officiis, dolorem corrupti nesciunt dignissimos beatae accusantium magni iure numquam repellendus?
                                </p>
                            </div>
                        </Col>
                        <Col md={6} lg={3} sm={12}>
                            <div className="footer-widget">
                                <h3 className="footer-title">
                                    Company
                                </h3>
                                <ul>
                                    <li><Link to='/about'>About Us</Link></li>
                                    <li><Link to='/'>Listing</Link></li>
                                    <li><Link to='/'>How It Works</Link></li>
                                    <li><Link to='/'>Our Services</Link></li>
                                    <li><Link to='/blog'>Our Blog</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={6} lg={3} sm={12}>
                            <div className="footer-widget">
                                <h3 className="footer-title">
                                    Support
                                </h3>
                                <ul>
                                    <li><Link to='/contact'>Contact</Link></li>
                                    <li><Link to='/'>Legal Notice</Link></li>
                                    <li><Link to='/pp'>Privacy Policy</Link></li>
                                    <li><Link to='/tos'>Terms and Condition</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={6} lg={3} sm={12}>
                            <div className="footer-widget">
                                <h3 className="footer-title">
                                    Contacts
                                </h3>
                                <ul>
                                    <li><i className="fas fa-map-marker-alt"></i><p>Flat 55, Nikunja2, Dhaka Bangladesh, FV77 8WS</p></li>
                                    <li><i className="fas fa-microphone"></i><a href="tel:01601164855">+8801601164855</a></li>
                                    <li><i className="fas fa-envelope"></i><a href="mailto:mail.mdnahidhasan@gmail.com">mail.mdnahidhasan@gmail.com</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <div className="footer-copyright d-flex justify-content-between border-top pt-4 mt-2">
                                <div className="d-flex">
                                    <div><p>© 2023 Adventura All rights reserved.</p></div>
                                    <div className="ms-4 d-flex">
                                        <Link className="me-3" to='/pp'>Privacy</Link>
                                        <Link className="me-3" to='/tos'>Terms</Link>
                                        <Link className="me-3" to='/'>Site Map</Link>
                                    </div>
                                </div>
                                <div className="ms-4 d-flex">
                                    <a className="ms-3" target="blank" href="https://www.facebook.com/nahidthenh">
                                        <i className="ri-facebook-line"></i>
                                    </a>
                                    <a className="ms-3" target="blank" href="https://www.youtube.com/@ndevs">
                                        <i className="ri-youtube-line"></i>
                                    </a>
                                    <a className="ms-3" target="blank" href="https://www.instagram.com/nahidthenh">
                                        <i className="ri-instagram-line"></i>
                                    </a>
                                    <a className="ms-3" target="blank" href="https://www.github.com/nahidthenh">
                                        <i className="ri-github-line"></i>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Footer;