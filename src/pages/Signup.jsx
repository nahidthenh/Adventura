import { Col, Container, Row } from "react-bootstrap";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-hot-toast";


const Signup = () => {
    const { googleLogin, githubLogin, createAccountWithEmailPws, updateUserProfile } = useContext(AuthContext)
    const [aggery, setAggery] = useState(false)
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
    const hnadleCreateAccount = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photoURL = form.photo.value
        const email = form.email.value
        const password = form.password.value

        createAccountWithEmailPws(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset()
                handleUpdateUserProfile(name, photoURL)
                toast.success('Please Verify Your Email Account!')
                // redirect to login page code in bottom
            })
            .catch((error) => {
                console.error('Error is ', error);
                toast.error('Something Went Wrong !')
            });
    }
    // update profile

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch((error) => {
                console.error('Error Is ', error);
            });
    }
    const handleTos = () => {
        setAggery(event.target.checked)
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
                                <button onClick={handleGitHubLogin} type="button" className="user-auth-btn ms-2">Github</button>
                            </div>
                            <div className="auth-text my-4"><span>or</span></div>
                            <form onSubmit={hnadleCreateAccount} className="auth-form">
                                <Row>
                                    <Col><input className="d-block w-100 mb-4 auth-input" type="text" name="name" placeholder="Enter Your Name " required /></Col>
                                    <Col> <input className="d-block w-100 mb-4 auth-input" type="text" name="photo" placeholder="Enter Your Photo URL " required /></Col>
                                </Row>
                                <Row>
                                    <Col><input className="d-block w-100 mb-4 auth-input" type="email" name="email" placeholder="Enter Your Email " required /></Col>
                                    <Col> <input className="d-block w-100 mb-4 auth-input" type="password" name="password" placeholder="Enter Your Password " required /></Col>
                                </Row>
                                <div className="form-check mb-4">
                                    <input className="form-check-input" id="tos" type="checkbox" onClick={handleTos} />
                                    <label className="form-check-label" htmlFor="tos">
                                        I Aggery With <Link to='tos'>Tos</Link>
                                    </label>
                                </div>

                                <button disabled={!aggery} className="mb-4 w-100" type="submit">Create Account</button>
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