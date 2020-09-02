import React from 'react';
import { Navbar, Brand, Nav, Link, Form, FormControl, Button } from 'react-bootstrap';
import Logo from './Logo.js';

export default function Navnav() {
    return (
        <Navbar bg="dark" variant="dark" style={ {height: '100%'} }>
            <Navbar.Brand href="#home">                    
                <div style={ { display: 'flex', alignItems: 'center', marginTop: '-20px' } }>
                    <div style={ { position: 'relative', width: '120px', height: '68px' } }>
                        <Logo />
                    </div>
                </div>
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )
}