import { NavbarBrand } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../assets/styles/header.scss";
import Logo from "../assets/images/logo.webp";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export default function Header() {
  const { cartCount } = useContext(CartContext);
  return (
    <header>
      <Navbar>
        <Container>
          <NavbarBrand>
            <img src={Logo} alt="mexicain qui joue de la guitare" />
          </NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Accueil</Nav.Link>
              <p>Panier {cartCount}</p>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
