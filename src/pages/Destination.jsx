import { Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";


const Destination = () => {

    const destinations = useLoaderData()
    console.log(destinations);

    return (
        <div className="default-margin-top">
            <Breadcrumbs></Breadcrumbs>
            <Container>
                <Row>
                    {
                        destinations.map(data => (
                            <Col lg={4} md={6} sm={12} key={data.id}>
                                <div className="destination-single-item">
                                    <div className="destination-cover">
                                        <img src={data.image} alt="" />
                                    </div>
                                    <Link to=''><h3>{data.place}</h3></Link>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Destination;