import { Col, Container, Row } from "react-bootstrap";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link, useLoaderData } from "react-router-dom";


const Tour = () => {
    const tours = useLoaderData()
    console.log(tours);
    return (
        <div className="default-margin-top">
            <Breadcrumbs title='Our Tours List' description='Discover your next great adventure'></Breadcrumbs>
            <Container className="py-5">
                <Row>
                    <Col lg={8} md={12} sm={12}>
                        <Row>
                            {
                                tours.map(data => (
                                    <Col lg={6} md={6} sm={12} key={data.id}>
                                        <div className="tour-single-item">
                                            <div className="tour-image">
                                                <img src={data.image} alt="Tour Images" />
                                            </div>
                                            <div className="tour-single-content">
                                                <div className="rating"><span><i className="ri-star-line"></i>{data.rating} Superb</span></div>
                                                <h3><Link to={`tour-details/${data.id}`}>{data.place}</Link></h3>
                                                <h4>${data.price}<span> / Per person</span></h4>
                                                <ul className="info">
                                                    <li><i className="ri-time-line"></i>{data.duration}</li>
                                                    <li><i className="ri-map-line"></i>{data.location}</li>
                                                </ul>
                                                <p>{data.shortDescription}</p>
                                                <div className="btn-box">
                                                    <Link to={`tour-details/${data.id}`}>See Details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                        <div className="bg-danger">
                            Widget Card
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Tour;