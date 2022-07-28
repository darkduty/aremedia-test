import "../App.scss";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import aremedia from "../assets/aremedia.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <div>
      <Navbar
        className="navbarParent"
        collapseOnSelect
        expand="lg"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={aremedia}
              width="90"
              height="30"
              className="d-inline-block align-top"
            />
            Article Feed
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navItems">
              <Nav.Link href="#features">Brands</Nav.Link>
              <Nav.Link href="#ad">Ad Specs</Nav.Link>
              <Nav.Link href="#insights">Insights</Nav.Link>
              <Nav.Link href="#news">News</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
}
export default NavBar;
