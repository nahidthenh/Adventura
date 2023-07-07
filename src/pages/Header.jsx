import { Container, Nav, Navbar } from "react-bootstrap";
import headerLogo from '../assets/images/logo.png'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="">
                    <img className="header-logo" src={headerLogo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/destination'>Destination</Nav.Link>
                        <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                        <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                        <Nav.Link as={Link} to='/profile' >Md. Nahid Hasan</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;