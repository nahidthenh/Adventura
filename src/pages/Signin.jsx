import { Col, Container, Row } from "react-bootstrap";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";


const Signin = () => {

    const { googleLogin, githubLogin } = useContext(AuthContext)

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                console.log('Error Is,', error);
            });
    }

    const handleGitHubLogin = () => {
        githubLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                console.log('Error Is,', error);
            });
    }

    return (
        <div className="default-margin-top">
            <Breadcrumbs title='Sign In.' description='Discover your next great adventure.'></Breadcrumbs>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12} className="mx-auto my-5">
                        <div className="auth-form-wrap">
                            <h3 className="mb-4">Sign In with</h3>
                            <div className="signin-btn-group">
                                <button onClick={handleGoogleLogin} type="button" className="user-auth-btn me-2">Google</button>
                                <button onClick={handleGitHubLogin} type="button" className="user-auth-btn ms-2">Github</button>
                            </div>
                            <div className="auth-text my-4"><span>or</span></div>
                            <form className="auth-form">
                                <input className="d-block w-100 mb-4 auth-input" type="email" name="email" placeholder="Enter Your Email " />
                                <input className="d-block w-100 mb-4 auth-input" type="password" name="password" placeholder="Enter Your Password " />
                                <button className="mb-4" type="submit">Submit</button>
                            </form>
                            <div className="other-text">Dont have an account ? <Link to='/signup'>Register Now</Link></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Signin;