import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" ticky="top">
        <Container fluid>
          <Navbar.Brand href="#">Django React eCommerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/cart">
                <i className="fas fa-shopping-cart"></i> Cart
              </Nav.Link>

              <NavDropdown title="Services" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/penetration-testing">
                  Penetration Testing
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Web Design</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Web Developement
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/login">
                <i className="fas fa-user"></i> Login
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
