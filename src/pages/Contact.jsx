
import { Col, Container, Row } from 'react-bootstrap';
import Breadcrumbs from '../components/Breadcrumbs'
const Contact = () => {
    return (
        <div className="default-margin-top">
            <Breadcrumbs title='Contact Us' description='Fell Free To Contact With Us.'></Breadcrumbs>
            <Container>
                <Row className='py-5'>
                    <Col lg={4} md={6} sm={12}>
                        <div className="contact-box">
                            <div className="icon-box"><i className="ri-location-line"></i></div>
                            <h3>Address</h3>
                            <p>Khilkhet House 12 , Nikunja 2 1250 Dhaka Bangladesh.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="contact-box">
                            <div className="icon-box"><i className="ri-location-line"></i></div>
                            <h3>Phone</h3>
                            <ul>
                                <li><a href="tel:987456321">+987456321</a></li>
                                <li><a href="tel:125478965">+125478965</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="contact-box">
                            <div className="icon-box"><i className="ri-location-line"></i></div>
                            <h3>Email</h3>
                            <ul>
                                <li><a href="mailto:youremail@gmail.com">youremail@gmail.com</a></li>
                                <li><a href="mailto:youremail@gmail.com">youremail@gmail.com</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className='py-5'>
                    <Col lg={5}>
                        <small className='text-danger'>Google Map WIll Be here 😁✌️</small>
                    </Col>
                    <Col lg={7}>
                        <div className="contact-form-wrap p-4 rounded-3">
                            <form>
                                <Row>
                                    <Col><input className="d-block w-100 mb-4 auth-input border-0" type="text" name="name" placeholder="Your Name " required /></Col>
                                    <Col> <input className="d-block w-100 mb-4 auth-input border-0" type="email" name="photo" placeholder="Your Email " required /></Col>
                                </Row>
                                <Row>
                                    <Col><input className="d-block w-100 mb-4 auth-input border-0" type="email" name="email" placeholder="Phone Number " required /></Col>
                                    <Col><input className="d-block w-100 mb-4 auth-input border-0" type="text" name="password" placeholder="Subject " required /></Col>
                                </Row>
                                <Row>
                                    <Col><textarea name="" id="" cols="30" rows="10" className='form-control border-0 mb-4' placeholder='Message'></textarea></Col>
                                </Row>
                                <button className="mb-4 w-100" type="submit">Send Message</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;