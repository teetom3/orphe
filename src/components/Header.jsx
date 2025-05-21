import { NavbarBrand } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../assets/styles/header.scss";
import Logo from "../assets/images/logo.webp";
import { useCart } from "../hook/useCart";

export default function Header() {
  const { cartCount } = useCart();
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
              <Nav.Link href="#">Panier {cartCount}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
