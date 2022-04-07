import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavigationBar: React.FC = () => {
    return (
        <Navbar expand='lg' bg='dark' variant='dark' >
            <Container>
                <NavLink className='navbar-brand' to={'/'}>Home</NavLink>
            </Container>
        </Navbar>)
}

export default NavigationBar;