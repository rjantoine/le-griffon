import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import * as React from "react";
import {StaticImage} from "gatsby-plugin-image";
import {Link} from "gatsby";
import navItems from "./navItems";

const SiteNavbar = () => {
    return (
        <>
            <div className="bg-theme-blue py-3">
                <div className="text-center">
                    <Link to="/">
                        <StaticImage src="../images/griffon-logo.png" alt="LeGriffon Logo" height={50} className="align-middle mr-2" />
                        <span style={{color:'white'}}>Centre communautaire Le Griffon</span>
                    </Link>
                </div>
            </div>
            <Navbar bg="theme-blue" expand="lg" className="main-menu navbar-dark">
                <Container>
                    <Row className="mx-auto">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-auto" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>
                                { navItems.map(navItem => <Nav.Item key={navItem.key} className="mx-3">
                                    <Link to={navItem.to} className="nav-link text-center" activeClassName="active">{navItem.title}</Link>
                                </Nav.Item> ) }
                            </Nav>
                        </Navbar.Collapse>
                    </Row>
                </Container>
            </Navbar>
            <div className="alert alert-success text-center font-weight-bold my-0" role="alert">
                <Link to='/jeux'>Passez voir les photos des Jeux du Canada</Link>
            </div>
        </>
    )
}

export default SiteNavbar
