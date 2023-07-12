import { Container, Nav, Navbar } from "react-bootstrap";
import headerLogo from '../assets/images/logo.png'
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from './../context/AuthProvider';
import { toast } from "react-hot-toast";

const Header = () => {

    const { user, userLogOut } = useContext(AuthContext)

    const logOutUser = () => {
        userLogOut()
            .then(() => {
                alert('Are Your Sure ?')
                toast.success('Successfully LogOut')
            }).catch((error) => {
                console.error(error);
            });
    }

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
                            {user?.uid ? <>
                                <NavLink as={Link} to='/profile' >{user?.displayName}</NavLink>
                                <span className="logout-btn" onClick={logOutUser}> <i className="ri-logout-box-r-line"></i> </span>
                            </>
                                :
                                <NavLink className='header-signin-btn' as={Link} to='/signin' >Join</NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;