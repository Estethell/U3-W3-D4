import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Articoli</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Home
          </Link>
          <Link to="/" className={location.pathname === "#" ? "nav-link active" : "nav-link"}>
            Info
          </Link>
          <Link to="/" className={location.pathname === "#" ? "nav-link active" : "nav-link"}>
            Scrivi un Articolo!
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
