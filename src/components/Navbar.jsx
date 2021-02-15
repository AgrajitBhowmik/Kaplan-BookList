import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Button } from "react-bootstrap";

function NavbarComponent({ loc }) {
  return (
    <Navbar expand="lg" variant="primary" bg="light" className="mb-3">
      <Container fluid>
        <Link to="/books">
          <Navbar.Brand>
            <b>BOOKS</b>
          </Navbar.Brand>
        </Link>
        {loc.pathname === "/books" && (
          <Link to="/form/new">
            <Button variant="outline-primary">Create New Book</Button>
          </Link>
        )}
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
