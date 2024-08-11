import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { useTheme } from "./ThemeContext";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <Navbar
      bg={darkMode ? "dark" : "primary"}
      variant={darkMode ? "dark" : "light"}
      className="mb-4"
    >
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/category/Higiene">
            Higiene
          </Nav.Link>
          <Nav.Link as={NavLink} to="/category/Snacks">
            Snacks
          </Nav.Link>
          <Nav.Link as={NavLink} to="/category/Alimentos">
            Alimentos
          </Nav.Link>
        </Nav>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Dark Mode"
          checked={darkMode}
          onChange={toggleDarkMode}
          className="ms-3"
        />
        <CartWidget />
      </Container>
    </Navbar>
  );
};
