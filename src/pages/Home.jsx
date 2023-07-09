import { Col, Container, Row } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import heroImage from '../assets/images/hero.png'
import aboutUs from '../assets/images/about.png'
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components Start
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper React components End
const Home = () => {
    const [whyus, setWhyus] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await axios.get('http://localhost:5000/whyus');
            setWhyus(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    // for Destination data

    const [destinationData, setDestinationData] = useState([]);

    useEffect(() => {
        fetchDestinationDataData();
    }, []);

    async function fetchDestinationDataData() {
        try {
            const response = await axios.get('http://localhost:5000/destinations');
            setDestinationData(response.data);
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
            <div className="why-us py-5">
                <Container>
                    <div className="section-title text-center pb-5">
                        <p>Adventura Specials</p>
                        <h2>Why Travel with Adventura?</h2>
                    </div>
                    <Row>
                        <Col>
                            {/* Display the response data */}
                            {whyus && (
                                <Row>
                                    {whyus.map(item => (
                                        <Col lg={3} md={6} sm={12} key={item.id}>
                                            <div className="why-us-block">
                                                <div className="image-box">
                                                    <img className="img-fluid" src={item.photo} alt="photo" />
                                                </div>
                                                <div className="lower-content">
                                                    <div className="why-us-icon"><i className={item.icon}></i></div>
                                                    <h3>{item.title}</h3>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            )}
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="about-us py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} md={12} sm={12}>
                            <div className="me-5">
                                <p>About Adventura</p>
                                <h2>Premier Worlds Best Travel Agency Company Since 2022</h2>
                                <div className="des">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam ut minima sequi, placeat temporibus quo velit rem nisi voluptatum atque quam laudantium blanditiis eius maiores corrupti assumenda vero reprehenderit molestias.</p>
                                </div>
                                <Link to='destination'>Find Now.</Link>
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <div className="about-image ms-5">
                                <img src={aboutUs} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="our-city py-5">
                <Container>
                    <div className="section-title text-center pb-5">
                        <p>CHOOSE YOUR PLACE</p>
                        <h2>Popular Destinations</h2>
                    </div>
                    <Row>
                        {
                            destinationData.slice(0, 6).map(data => (
                                <Col lg={4} md={6} sm={12} key={data.id}>
                                    <div className="destination-single-item">
                                        <div className="destination-cover">
                                            <img src={data.image} alt="" />
                                        </div>
                                        <Link to={`destination-details/${data.id}`}><h3>{data.place}</h3></Link>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div>
            <div className="offers-wrap py-5">
                <Container>
                    <div className="section-title pb-5">
                        <p>DEALS & OFFERS</p>
                        <h2>Last-Minute Exclusive Deals</h2>
                    </div>
                    <Row>
                        <Col md={12} lg={12} sm={12}>
                            <>
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay]}
                                    className="mySwiper"
                                >
                                    {
                                        destinationData.map(data => (
                                            <SwiperSlide className="destination-single-item" key={data.id}>
                                                <div className="destination-cover">
                                                    <img src={data.image} alt="" />
                                                </div>
                                                <Link to={`destination-details/${data.id}`}><h3>{data.place}</h3></Link>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Home;