import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  return (
    <Navbar bg="info">
      <Container fluid>
        <Navbar.Brand href="#home">Articoli</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" className={location.pathname === "/" ? "nav-link active mx-1" : "nav-link mx-1"}>
            Home
          </Link>
          <Link to="/" className={location.pathname === "#" ? "nav-link active mx-1" : "nav-link mx-1"}>
            Info
          </Link>
          <Link to="/" className={location.pathname === "#" ? "nav-link active mx-1" : "nav-link mx-1"}>
            Scrivi un Articolo!
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
