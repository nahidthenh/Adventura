import { Container, Nav, Navbar } from "react-bootstrap";
import headerLogo from '../assets/images/logo.png'
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-white py-3 border-bottom" fixed="top">
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <img className="header-logo" src={headerLogo} alt="Header Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <NavLink as={Link} to='/'>Home</NavLink>
                            <NavLink as={Link} to='/destination'>Destination</NavLink>
                            <NavLink as={Link} to='/tour'>Tour</NavLink>
                            <NavLink as={Link} to='/blog'>Blog</NavLink>
                            <NavLink as={Link} to='/contact'>Contact</NavLink>
                            <NavLink className='header-signin-btn' as={Link} to='/signin' >Join</NavLink>
                            {/* <NavLink as={Link} to='/profile' >Md. Nahid Hasan</NavLink> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;