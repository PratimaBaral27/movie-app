import React from 'react';
import {Navbar, Nav, Container, Button, Form, FormControl} from 'react-bootstrap';
import {NavWrapper} from './style'
import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {useState} from "react";
import ReorderIcon from "@material-ui/icons/Reorder";
import SearchIcon from "@material-ui/icons/Search";

export default function Navbars(){
    return(
     <NavWrapper>
                 <Container>
             <Navbar expand = "lg">
               {/* <Link to = "/"><img src = "/image/logo.svg" />MOVIEBOX </Link>  */}
               <Navbar.Brand href = "#home">MOVIEBOX Office</Navbar.Brand>
                 <Navbar.Toggle aria-controls = "basic-navbar-nav" />
                 <Navbar.Collapse id = "basic-navbar-nav">
                     <Form inline>
                     <FaSearch></FaSearch>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                       </Form>
                     <Nav className = "ml-auto">
                         <Nav.Link href = "#home" >Home</Nav.Link>
                         <Nav.Link href = "#home">Link</Nav.Link>
                     </Nav>
                 </Navbar.Collapse>
             </Navbar>
             </Container>
             </NavWrapper>
        )
    }
