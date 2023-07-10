import { Col, Container, Row } from "react-bootstrap";
import Breadcrumbs from "../components/Breadcrumbs";
import { Category, Search, Sponsor } from "../components/widget";
import { Link, useLoaderData } from "react-router-dom";


const Blog = () => {

    const blogs = useLoaderData()

    return (
        <div className="default-margin-top">
            <Breadcrumbs title="Adventura Blogs" description="Welcome To Adventura Blogs."></Breadcrumbs>
            <Container className="py-5">
                <Row>
                    <Col lg={8} md={12} sm={12}>
                        <Row>
                            {
                                blogs.map(item => (
                                    <Col lg={6} md={6} sm={12} key={item.id}>
                                        <div className="blog-item">
                                            <div className="blog-img">
                                                <img src={item.image} alt="Blog Images" />
                                            </div>
                                            <div className="blog-content">
                                                <small>{item.postDate}</small>
                                                <h3><Link to={`/blog-details/${item.id}`}>{item.title}</Link></h3>
                                                <p>{item.shortDescription}</p>
                                                <Link className="blog-readmore-btn" to={`/blog-details/${item.id}`}>Read More</Link>
                                            </div>
                                        </div>
                                    </Col>
                                ))
                            }
                        </Row>
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
        </div>
    );
};

export default Blog;