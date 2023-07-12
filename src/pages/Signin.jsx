import { Col, Container, Form, Row } from "react-bootstrap";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-hot-toast";


const Signin = () => {

    const { googleLogin, githubLogin, loginAccountWithEmailPws, setLoading } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    const [error, setError] = useState('')

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success('Successfully Google Loged in!')
            }).catch((error) => {
                console.log('Error Is,', error);
                toast.error('Something Went Wrong !')
            });
    }

    const handleGitHubLogin = () => {
        githubLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success('Successfully GitHub Loged in!')
            }).catch((error) => {
                console.log('Error Is,', error);
                toast.error('Something Went Wrong !')
            });
    }

    const handleEmailPwsLogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        loginAccountWithEmailPws(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset()
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                    toast.success('Successfully Loged in!')
                } else {
                    toast.error("Your Email Not Verify ! Please Verify Your Email.")
                }
            })
            .catch((error) => {
                console.error('Error', error);
                setError(error.message)
            })
            .finally(() => {
                setLoading(false)
            })
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
                            <form onSubmit={handleEmailPwsLogin} className="auth-form">
                                <input className="d-block w-100 mb-4 auth-input" type="email" name="email" placeholder="Enter Your Email " />
                                <input className="d-block w-100 mb-4 auth-input" type="password" name="password" placeholder="Enter Your Password " />

                                <button className="mb-4" type="submit">Submit</button>
                                <Form.Text className="text-danger">
                                    <div className=" mb-4">{error}</div>
                                </Form.Text>
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