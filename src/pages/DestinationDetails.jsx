import { useLoaderData } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { Col, Container, Row } from "react-bootstrap";
import { Category, Search, Sponsor } from "../components/widget";
const DestinationDetails = () => {
    const destinations = useLoaderData();
    const { place, description, countryDetails, photoGallery } = destinations;
    return (
        <div className="default-margin-top">
            <Breadcrumbs title="Destination Details" description="Discover your next great adventure."></Breadcrumbs>
            <Container className="py-5">
                <Row>
                    <Col lg={8} md={12} sm={12}>
                        <div className="destination-details-wrap">
                            <h2>{place}</h2>
                            <p>{description}</p>
                            <div className="country-details">
                                <h2>Country Details:</h2>
                                <p>{countryDetails.shortDescription}</p>
                                <ul className="details-list">
                                    <li><i className="ri-user-location-line"></i><span>Address:</span>{countryDetails.address}</li>
                                    <li><i className="ri-visa-line"></i><span>Visa Requirements:</span>{countryDetails.visaRequirements}</li>
                                    <li><i className="ri-global-line"></i><span>Country:</span>{countryDetails.country}</li>
                                    <li><i className="ri-chat-smile-2-line"></i><span>Languages spoken:</span>{countryDetails.languageSpoken}</li>
                                    <li><i className="ri-money-dollar-circle-line"></i><span>Currency Used:</span>{countryDetails.currencyUsed}</li>
                                    <li><i className="ri-phone-line"></i><span>Suport Phone:</span><a href={`tel:{countryDetails.supportPhone}`}>{countryDetails.supportPhone}</a></li>
                                    <li><i className="ri-mail-open-line"></i><span>Emergency Email:</span><a href={`mailto:{countryDetails.emergencyEmail}`}>{countryDetails.emergencyEmail}</a></li>
                                    <li><i className="ri-pin-distance-line"></i><span>Distance:</span>{countryDetails.distance}</li>
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
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                        <div className="ms-3 sidebar-sticky">
                            <Search></Search>
                            <Category></Category>
                            <Sponsor></Sponsor>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default DestinationDetails;