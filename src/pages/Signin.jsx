import { Col, Container, Row } from "react-bootstrap";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";


const Signin = () => {
    return (
        <div className="default-margin-top">
            <Breadcrumbs title='Sign In.' description='Discover your next great adventure.'></Breadcrumbs>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12} className="mx-auto my-5">
                        <div className="auth-form-wrap">
                            <h3 className="mb-4">Sign In with</h3>
                            <div className="signin-btn-group">
                                <button type="button" className="user-auth-btn me-2">Google</button>
                                <button type="button" className="user-auth-btn ms-2">Github</button>
                            </div>
                            <div className="auth-text my-4"><span>or</span></div>
                            <form className="auth-form">
                                <input className="d-block w-100 mb-4 auth-input" type="email" name="email" placeholder="Enter Your Email " />
                                <input className="d-block w-100 mb-4 auth-input" type="password" name="password" placeholder="Enter Your Password " />

                                <div className="form-check mb-4">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label">
                                        I Aggery With <Link to='tos'>Tos</Link>
                                    </label>
                                </div>

                                <button className="mb-4" type="submit">Submit</button>
                            </form>
                            <div className="other-text">Already have an account ? <Link to='/signup'>Register Now</Link></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Signin;