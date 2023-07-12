import { Col, Container, Row } from "react-bootstrap";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";


const Signup = () => {
    const { googleLogin } = useContext(AuthContext)
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                console.log('Error Is,', error);
            });
    }

    return (
        <div className="default-margin-top">
            <Breadcrumbs title='Sign Up.' description='Create a Account For Discover your next great adventure.'></Breadcrumbs>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12} className="mx-auto my-5">
                        <div className="auth-form-wrap">
                            <h3 className="mb-4">Sign Up with</h3>
                            <div className="signin-btn-group">
                                <button onClick={handleGoogleLogin} type="button" className="user-auth-btn me-2">Google</button>
                                <button type="button" className="user-auth-btn ms-2">Github</button>
                            </div>
                            <div className="auth-text my-4"><span>or</span></div>
                            <form className="auth-form">
                                <Row>
                                    <Col><input className="d-block w-100 mb-4 auth-input" type="text" name="name" placeholder="Enter Your Name " /></Col>
                                    <Col> <input className="d-block w-100 mb-4 auth-input" type="text" name="photo" placeholder="Enter Your Photo URL " /></Col>
                                </Row>
                                <Row>
                                    <Col><input className="d-block w-100 mb-4 auth-input" type="email" name="email" placeholder="Enter Your Email " /></Col>
                                </Row>
                                <Row>
                                    <Col> <input className="d-block w-100 mb-4 auth-input" type="password" name="password" placeholder="Enter Your Password " /></Col>
                                    <Col> <input className="d-block w-100 mb-4 auth-input" type="password" name="confirmPassword" placeholder="Enter Your Confirm Password " /></Col>
                                </Row>

                                <div className="form-check mb-4">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label">
                                        I Aggery With <Link to='tos'>Tos</Link>
                                    </label>
                                </div>

                                <button className="mb-4 w-100" type="submit">Create Account</button>
                            </form>
                            <div className="other-text text-center">Already have an account ? <Link to='/signin'>Login Now</Link></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Signup;