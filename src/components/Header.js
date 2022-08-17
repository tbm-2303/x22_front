import React from 'react';
import {Link, Outlet} from "react-router-dom";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';


const Header = ({logout}) => {
    const userType = localStorage.getItem("userType");
    let isAdmin = false;
    let isUser = false;
   

    if(userType === "admin"){
        isAdmin = true;
    }
    if(userType === "user"){
        isUser = true;
    }


    return (
        <div>
            <Navbar style={{backgroundColor:"white !important" }} className={"m-auto w-50"}>
                
                    <Nav className="me-auto m-auto">
                        {
                            isAdmin &&
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                        }
                        {
                            isAdmin &&

                            <LinkContainer to="/createTenant">
                                <Nav.Link>create tenant</Nav.Link>
                            </LinkContainer>

                        }
                        {
                            isAdmin &&

                            <LinkContainer to="/createrental">
                                <Nav.Link>create rental</Nav.Link>
                            </LinkContainer>

                        }
                        {
                            isAdmin &&

                            <LinkContainer to="/createhouse">
                                <Nav.Link>createhouse</Nav.Link>
                            </LinkContainer>

                        }
                        {
                            isAdmin &&

                            <LinkContainer to="/houses">
                                <Nav.Link>houses</Nav.Link>
                            </LinkContainer>

                        }
                         {
                            isAdmin &&
                            <LinkContainer to="/rentals">
                                <Nav.Link>Rentals</Nav.Link>
                            </LinkContainer>
                        }
                       

                        {
                            isUser &&

                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>

                        }
                        {
                            isUser &&

                            <LinkContainer to="/myRentals">
                                <Nav.Link>My Rentals</Nav.Link>
                            </LinkContainer>

                        }

                    
                        <Button className="float-end" onClick={logout}>Log out</Button>
                    </Nav>
               
            </Navbar>
            <Outlet/>
        </div>
    );
};

export default Header;