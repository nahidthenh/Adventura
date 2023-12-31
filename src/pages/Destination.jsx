import { Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import ScrollToTop from "../components/others/ScrollToTop";

const Destination = () => {

    const destinations = useLoaderData()


    return (
        <div className="default-margin-top">
            <Breadcrumbs title='Destinations' description='Discover your next great adventure'></Breadcrumbs>
            <Container className="default-margin-top mb-5">
                <Row>
                    {
                        destinations.map(data => (
                            <Col lg={4} md={6} sm={12} key={data.id}>
                                <div className="destination-single-item">
                                    <div className="destination-cover">
                                        <img src={data.image} alt="" />
                                    </div>
                                    <Link to={`/destinations/${data.id}`}><h3>{data.place}</h3></Link>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
            <ScrollToTop />
        </div>
    );
};

export default Destination;