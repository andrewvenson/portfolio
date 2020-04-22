import React from "react";
import NameLogo from "./NameLogo";
import NavLinks from "./NavLinks";

import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";

const NavComponent = () => {
  return (
    <header>
      <nav className="myNav">
        <Navbar bg="dark" expand="lg">
          <Container>
            <NameLogo />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <div
              className="divider"
              style={{ fontSize: "35px", fontWeight: "lighter" }}
            >
              |
            </div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavLinks name="Portfolio" classN="portfolio" linkey="#" />
                <NavLinks name="About" classN="about" linkey="/about" />
                <NavLinks name="Contact" classN="contact" linkey="/contact" />
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Email"
                  className="mr-sm-2"
                />
                <Button className="emailSend" variant="outline-success">
                  Send
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    </header>
  );
};

export default NavComponent;
