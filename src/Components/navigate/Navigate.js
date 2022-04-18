import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import './Navigate.css';
const Navigate = ({color}) => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
      };
    return (
        <div className='navigate-container'>
            <Navbar collapseOnSelect expand="lg" bg={color} variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Fitness Trainee</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">
                        </Nav>
                        <Nav className="item">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">
                            Blogs
                            </Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            {user?<Nav.Link 
                            onClick={()=>logout()} as={Link} to="/">Sign Out</Nav.Link>
                            :
                            <Nav.Link as={Link} to="/login">Sign In</Nav.Link>
    }
     <Nav.Link className='text-white' as={Link} to="/about">{user?.displayName}</Nav.Link>
                            
                            </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigate;