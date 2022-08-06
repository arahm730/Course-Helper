import React from "react";
import {Nav, Navbar, Container } from "react-bootstrap";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navbar">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link id="past-five-link" href="/">
              Course Difficulty Over Past 5 Years
            </Nav.Link>
            <Nav.Link id="past-one-link" href="/one-year">
              Course Difficulty Over the Past Year
            </Nav.Link>
            <Nav.Link id="plan-link" href="/planner">
              Planner
            </Nav.Link>
            <Nav.Link id="sorted-courses" href="/sorted-courses">
              Sorted Courses by Difficulty
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
