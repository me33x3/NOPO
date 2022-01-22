import React, { Fragment } from "react";
import { Container, Nav, Navbar, Button } from 'react-bootstrap'

function Header() {
    return (
        <Fragment>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#">NOPO</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="/">홈</Nav.Link>
                </Nav>
                <Nav>
                  <Button className="mx-1" href="/signin " variant="outline-light">로그인</Button>
                  <Button className="mx-1" href="/signup" variant="light">회원가입</Button>
                </Nav>
              </Container>
            </Navbar>
        </Fragment>
    );
}

export default Header;