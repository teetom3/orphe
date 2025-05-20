import { NavbarBrand } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../assets/styles/header.scss";
import Logo from "../assets/images/logo.webp";

export default function Header() {
  return (
    <header>
      <Navbar>
        <Container>
          <NavbarBrand>
            <img
              className="NavBrand"
              src={Logo}
              alt="mexicain qui joue de la guitare"
            />
          </NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Accueil</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
