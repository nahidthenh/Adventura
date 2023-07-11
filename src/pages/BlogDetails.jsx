import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { Category, Download, Search, Sponsor } from "../components/widget";
const BlogDetails = () => {
    const blogs = useLoaderData()
    const { image, blogTitle, description, postDate } = blogs
    return (
        <div className="default-margin-top">
            <Breadcrumbs title="Our Travel Blog" description="Welcome to our travel Blog"></Breadcrumbs>
            <div className="blog-details-wrap py-5">
                <Container>
                    <Row>
                        <Col lg={8} md={12} sm={12}>
                            <img src={image} alt="" />
                            <small>{postDate}</small>
                            <h3>{blogTitle}</h3>
                            <p>{description}</p>
                        </Col>
                        <Col lg={4} md={12} sm={12}>
                            <div className="ms-3 sidebar-sticky">
                                <Search></Search>
                                <Download></Download>
                                <Category></Category>
                                <Sponsor></Sponsor>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default BlogDetails;