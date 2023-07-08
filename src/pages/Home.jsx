import { Col, Container, Row } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import heroImage from '../assets/images/hero.png'
import axios from 'axios';
import { useState, useEffect } from "react";

const Home = () => {
    const [responseData, setResponseData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await axios.get('http://localhost:5000/whyus');
            setResponseData(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="default-margin-top">
            <div className="hero-area-wrap py-5">
                <Container >
                    <Row className="align-items-center">
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
                        <Col lg={6} sm={12} md={12}>
                            <img className="img-fluid" src={heroImage} alt="Hero area images" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="why-us">
                <Container>
                    <div className="section-title text-center">
                        <p>Adventura Specials</p>
                        <h2>Why Travel with Adventura?</h2>
                    </div>
                    <Row>
                        <Col>
                            {/* Display the response data */}
                            {responseData && (
                                <ul>
                                    {responseData.map(item => (
                                        <li key={item.id}>{item.title}</li>
                                    ))}
                                </ul>
                            )}
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Home;