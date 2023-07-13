import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Col, Container, Row } from "react-bootstrap";
import ScrollToTop from './../components/others/ScrollToTop';

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="default-margin-top">
            <Container className="py-5">
                <Row>
                    <Col lg={12}>
                        <h1>Welcome, {user.displayName}</h1>
                        <p>{user.email}</p>
                        <img className="img-fluid rounded-3 my-3" src={user.photoURL} alt="Profile Photo" />
                    </Col>
                </Row>
            </Container>
            <ScrollToTop />
        </div>
    );
};

export default Profile;