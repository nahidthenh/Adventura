
import { Col, Container, Row } from 'react-bootstrap';
import Breadcrumbs from '../components/Breadcrumbs'
const Contact = () => {
    return (
        <div className="default-margin-top">
            <Breadcrumbs title='Contact Us' description='Fell Free To Contact With Us.'></Breadcrumbs>
            <Container>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <div className="single-info-box">
                            <div className="inner-box">
                                <div className="icon-box"><i className="ri-location-line"></i></div>
                                <h3>Address</h3>
                                <p>31 park street, 5th Avenue, Dhanmondy, Dhaka.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;