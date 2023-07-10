
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
                <Row className='pb-5'>
                    <Col lg={6} className='mx-auto'>
                        <div className="contact-form-wrap p-3">

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;