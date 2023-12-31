import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { BookForm, Download, Sponsor } from "../components/widget";
import ScrollToTop from './../components/others/ScrollToTop';

const TourDetails = () => {
    const tours = useLoaderData()
    const { rating, place, price, overviewDescription, location, departure, departureTime, returnTime, included, excluded, tourPlanShortDescription, tourPlan, photoGallery } = tours
    return (
        <div className="default-margin-top">
            <div className="tours-details-baner">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div className="tours-banner-content">
                                <div className="rating"><span><i className="ri-star-fill"></i>{rating} Superb</span></div>
                                <h1>{place}</h1>
                                <h3>{price}<span> / Per person</span></h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="py-5 tours-main-wrap">
                <Container>
                    <Row>
                        <Col lg={8} md={12} sm={12}>
                            <h3>Overview</h3>
                            <p>{overviewDescription}</p>
                            <ul className="details-list">
                                <li><i className="ri-map-pin-line"></i><span>Destination:</span>{location}</li>
                                <li><i className="ri-flight-land-line"></i><span>Departure:</span>{departure}</li>
                                <li><i className="ri-plane-line"></i><span>Departure Time:</span>{departureTime}</li>
                                <li><i className="ri-flight-takeoff-line"></i><span>Return Time:</span>{returnTime}</li>
                                <li><i className="ri-check-double-line"></i><span>Included:</span>{included}</li>
                                <li><i className="ri-close-line"></i><span>Excluded:</span>{excluded}</li>
                            </ul>
                            <div className="tours-plan mb-4">
                                <h2>Tour Plan:</h2>
                                <p>{tourPlanShortDescription}</p>
                                <ul>
                                    {
                                        tourPlan.days.map(data => <li key={data}>{data}</li>)
                                    }
                                </ul>
                            </div>
                            <div className="photo-gallery-wrap">
                                <h2>Photo Gallery:</h2>
                                <p>{photoGallery.shortDescription}</p>

                                <div className="photo-gallery-item">
                                    <Row>
                                        {
                                            photoGallery.images.map(item => (
                                                <Col md={4} key={item} >
                                                    <img src={item} />
                                                </Col>
                                            ))
                                        }
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={12} sm={12}>
                            <div className="ms-3 sidebar-sticky">
                                <BookForm></BookForm>
                                <Download></Download>
                                <Sponsor></Sponsor>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <ScrollToTop />
        </div>
    );
};

export default TourDetails;