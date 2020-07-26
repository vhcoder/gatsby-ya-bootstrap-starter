import React, { useState } from "react";
import SiteInfo from "./siteInfo"
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap"
import { Link, navigate } from 'gatsby'
import { getUser, isLoggedIn, logout } from "../services/auth"


const Header = () => {
    const [activeKey, setActiveKey] = useState("/");

    console.log("mounted header");

    const setCurrKey = (selKey) => {
        alert(selKey);
        setActiveKey(selKey);
    }

    const data = SiteInfo();
    return (
        <header>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Navbar.Brand href="#home">{data.site.siteMetadata.title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {isLoggedIn() ? (
                            <>
                                <Nav.Item>
                                    <Link className="nav-link" activeClassName="active" to="/app/profile">Profile</Link>
                                </Nav.Item>

                            </>
                        ) :
                            <>
                                <Nav.Item>
                                    <Link className="nav-link" activeClassName="active" to="/">Page1</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link className="nav-link" activeClassName="active" to="/page-2">Page2</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link className="nav-link" activeClassName="active" to="/page-3">Page3</Link>
                                </Nav.Item>

                            </>

                        }
                    </Nav>
                    <Nav>
                        <Nav.Item>
                            {
                                isLoggedIn() ?

                                    <Nav.Item>
                                        <a
                                            href="/"
                                            className="nav-link"
                                            onClick={event => {
                                                event.preventDefault()
                                                logout(() => navigate(`/`))
                                            }}
                                        >
                                            Logout {getUser().name}
                                        </a>
                                    </Nav.Item>

                                    :

                                    <Nav.Item>
                                        <Link className="nav-link" to="/app/login">Login</Link>
                                    </Nav.Item>

                            }
                        </Nav.Item>
                    </Nav>
                    <Form className="form-inline" >
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success"> Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )

}

export default Header;