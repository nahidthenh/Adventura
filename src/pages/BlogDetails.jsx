import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { Download, LatestNews, Search, Sponsor } from "../components/widget";
import ScrollToTop from "../components/others/ScrollToTop";
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
                            <div className="blog-details-item">
                                <img src={image} alt="" />
                                <small>{postDate}</small>
                                <h3>{blogTitle}</h3>
                                <p>{description}</p>
                            </div>
                        </Col>
                        <Col lg={4} md={12} sm={12}>
                            <div className="ms-3 sidebar-sticky">
                                <Search></Search>
                                <LatestNews></LatestNews>
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

export default BlogDetails;