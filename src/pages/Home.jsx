import { Col, Container, Row } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";

const Home = () => {
    return (
        <Container className="default-margin-top">
            <Row>
                <Col lg={6} sm={12} md={12}>
                    <div className="hero-content">
                        <h1>Where would you like to go?</h1>
                        <p>Embark on your next extraordinary adventure.</p>
                        <div className="form-inner">
                            <form className="booking-form">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                                        <div className="form-group">
                                            <input type="text" name="origin" placeholder="Origin" required="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                                        <div className="form-group">
                                            <input type="text" name="destination" placeholder="Destination" required="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                                        <div className="form-group input-date">
                                            <input type="date" name="date" placeholder="When?" className="when" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                                        <div className="form-group message-btn">
                                            <button type="submit" className="theme-btn"> <BiSearch /> Find Now</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;