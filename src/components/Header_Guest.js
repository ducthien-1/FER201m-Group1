

import { NavDropdown, Navbar, Nav, Container, Col, Row, Button } from 'react-bootstrap'
import { BsFillCartCheckFill } from "react-icons/bs";
import { SlLogin } from "react-icons/sl";


export default function Header_Guest() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" >
                <Container>
                    <Col md={1}>
                        <Navbar.Brand href="/">
                            <img
                                alt=""
                                src="/img/logo.svg"
                                width="90"
                                height="90"
                                className="d-inline-block align-top"
                            />{' '}
                        </Navbar.Brand>

                    </Col>
                    <Col md={3}>
                        <Navbar.Brand href="/" className="h1">Racket Shop</Navbar.Brand>
                    </Col>
                    <Col >
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" >
                            <Nav className="me-auto">
                                <Nav.Link href="/"><div className="h4"> Home</div></Nav.Link>
                                <div></div>
                                <Nav.Link href="products"><div className="h4"> Rackets</div></Nav.Link>
                                <Nav.Link href="/#!"><div className="h4"> Contact</div></Nav.Link>

                                <NavDropdown className="h4" title="Brands" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1"><div className="h4"> Brand_01</div></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.3"><div className="h4"> Brand_02</div></NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                    <Col md={1}>
                        <Container>
                            <Row>
                                <Col className="h4"> <a href="\#!"><BsFillCartCheckFill /></a></Col>
                                <Col className="h4"> <a href="\#!"><SlLogin /></a></Col>
                            </Row>
                        </Container>
                    </Col>
                </Container>
            </Navbar>
        </>
    )
}