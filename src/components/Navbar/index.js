import React from 'react';
import {Navbar, Nav, Container, Button, Form, FormControl} from 'react-bootstrap';
import {NavWrapper} from './style'
import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'


 export default function Navbars(){
    return (
        <NavWrapper>
            <Container>
        <Navbar expand = "lg">
            <Link to = "/"><img src = "/image/logo.svg" /> </Link>
            {/* <Navbar.Brand href = "#home">React-BootStrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls = "basic-navbar-nav" />
            <Navbar.Collapse id = "basic-navbar-nav">
                <Form inline>
                    <FaSearch></FaSearch>
                    <FormControl
                    type = "text"
                    placeholder = "Search"
                    className = "mr-sm-2"
                    />
                </Form>
                <Nav className = "mr-auto">
                    <Nav.Link href = "#home">Home</Nav.Link>
                    <Nav.Link href = "#home">Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </Container>
        </NavWrapper>
    )
}