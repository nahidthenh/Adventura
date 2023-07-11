import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const TourDetails = () => {
    const tours = useLoaderData()
    const { rating, place, price } = tours
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
            <h3>{tours.place}</h3>
        </div>
    );
};

export default TourDetails;