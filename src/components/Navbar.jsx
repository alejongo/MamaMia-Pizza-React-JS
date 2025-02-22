import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { thousandSeparator } from "../helpers/thousandSeparator";

export const NavbarMenu = () => {
  const total = 250000;
  const token = false;
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#">Mamma Mia</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">🍕 Home</Nav.Link>

              {token ? (
                <NavDropdown title="👨‍🚀 Profile" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#">⚙️ Settings</NavDropdown.Item>
                  <NavDropdown.Item href="#">🏃‍➡️ Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                  <Nav.Link href="#action1">🔑 Sign In</Nav.Link>
                  <Nav.Link href="#action1">🚀 Create Acccount</Nav.Link>
                </>
              )}
            </Nav>
            <Button variant="outline-info">
              💸 $ {thousandSeparator(total)}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
