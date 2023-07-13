import { Col, Container, Row } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import heroImage from '../assets/images/hero.png'
import aboutUs from '../assets/images/about.png'
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components Start
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from 'swiper/modules';
import ScrollToTop from "../components/others/ScrollToTop";
// Import Swiper React components End
const Home = () => {
    const [whyus, setWhyus] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await axios.get('https://adventura-server.vercel.app/whyus');
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
            const response = await axios.get('https://adventura-server.vercel.app/destinations');
            setDestinationData(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    // for Tour data

    const [tourData, setTourData] = useState([]);

    useEffect(() => {
        fetchTourDataData();
    }, []);

    async function fetchTourDataData() {
        try {
            const response = await axios.get('https://adventura-server.vercel.app/tour');
            setTourData(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    // fot Testimonials Data

    const [testimonialsData, setTestimonialsData] = useState([]);

    useEffect(() => {
        fetchTestimonialsData();
    }, []);

    async function fetchTestimonialsData() {
        try {
            const response = await axios.get('https://adventura-server.vercel.app/testimonials');
            setTestimonialsData(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    // fot Blog Data

    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        fetchBlogData();
    }, []);

    async function fetchBlogData() {
        try {
            const response = await axios.get('https://adventura-server.vercel.app/blog');
            setBlogData(response.data);
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
                                        <Link to={`destinations/${data.id}`}><h3>{data.place}</h3></Link>
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
                                            <SwiperSlide className="offers-single-item" key={data.id}>
                                                <div className="offers-item-img">
                                                    <img src={data.offerImg} alt="OfferImage" />
                                                </div>
                                                <div className="content-box">
                                                    <span>Get {data.discount}% Off</span>
                                                    <h3><Link to={`destinations/${data.id}`}>{data.place}</Link></h3>
                                                    <h4>${data.price}</h4>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="py-5 our-fun-fact">
                <Container>
                    <Row>
                        <Col lg={3} md={6} sm={12}>
                            <div className="fan-fact-box">
                                <h3>4,958</h3>
                                <p>Destinations</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className="fan-fact-box">
                                <h3>2,869</h3>
                                <p>Total Properties</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className="fan-fact-box">
                                <h3>1M</h3>
                                <p>Happy customers</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className="fan-fact-box">
                                <h3>574,974</h3>
                                <p>Our Volunteers</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="our-tour-wrap py-5">
                <Container>
                    <div className="section-title pb-5 text-center">
                        <p>Upscale & Lovely</p>
                        <h2>Preferred Outdoor Experiences</h2>
                    </div>
                    <Row>
                        {
                            tourData.slice(3, 6).map(data => (
                                <Col lg={4} md={6} sm={12} key={data.id}>
                                    <div className="tour-single-item">
                                        <div className="tour-image">
                                            <img src={data.image} alt="Tour Images" />
                                        </div>
                                        <div className="tour-single-content">
                                            <div className="rating"><span><i className="ri-star-fill"></i>{data.rating} Superb</span></div>
                                            <h3><Link to={`/tour/${data.id}`}>{data.place}</Link></h3>
                                            <h4>{data.price} <span> / Per person</span></h4>
                                            <ul className="info">
                                                <li><i className="ri-time-line"></i>{data.duration}</li>
                                                <li><i className="ri-map-line"></i>{data.location}</li>
                                            </ul>
                                            <p>{data.shortDescription}</p>
                                            <div className="tour-btn-box">
                                                <Link to={`/tour/${data.id}`}>See Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div>
            <div className="testimonial-wrap py-5">
                <Container>
                    <Row className="align-items-center">
                        <div className="section-title pb-3 text-center">
                            <p className="text-white">REVIEW & TESTIMONIALS</p>
                            <h2 style={{ fontSize: '35px' }}>Top Reviews for Your Motivition.</h2>
                        </div>
                        <Col xl={6} md={6} className="mx-auto">
                            <>
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    effect={'creative'}
                                    creativeEffect={{
                                        prev: {
                                            shadow: true,
                                            translate: [0, 0, -400],
                                        },
                                        next: {
                                            translate: ['100%', 0, 0],
                                        },
                                    }}
                                    modules={[Autoplay, EffectCreative]}
                                    className="mySwiper"
                                >
                                    {
                                        testimonialsData.map(data => (
                                            <SwiperSlide className="testimonials-single-item" key={data.id}>
                                                <h4>{data.title}</h4>
                                                <p>{data.description}</p>
                                                <hr />
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <img className="rounded-circle" src={data.userPhoto} alt="" />
                                                    </div>
                                                    <div className="ms-3">
                                                        <h6>{data.username}</h6>
                                                        <span>{data.job}</span>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="our-blog py-5">
                <Container>
                    <div className="section-title pb-5">
                        <p>NEWS & ARTICLES</p>
                        <h2>Stay Update with Tour Tips.</h2>
                    </div>
                    <Row>
                        {
                            blogData.slice(0, 3).map(data => (
                                <Col lg={4} md={6} sm={12} key={data.id}>
                                    <div className="blog-item">
                                        <div className="blog-img">
                                            <img src={data.image} alt="Blog Images" />
                                        </div>
                                        <div className="blog-content">
                                            <small>{data.postDate}</small>
                                            <h3><Link to={`/blog-details/${data.id}`}>{data.title}</Link></h3>
                                            <p>{data.shortDescription}</p>
                                            <Link className="blog-readmore-btn" to={`/blog-details/${data.id}`}>Read More</Link>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div>
            <ScrollToTop />
        </div>
    );
};

export default Home;