import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { thousandSeparator } from "../helpers/thousandSeparator";
import { Dropdown } from "react-bootstrap";

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
              <Button variant="outline-light" href="#action1" className="mx-2">
                🍕 Home
              </Button>

              {token ? (
                <Dropdown>
                  <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                    👨‍🚀 Profile
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    title="👨‍🚀 Profile"
                    id="navbarScrollingDropdown"
                  >
                    <Dropdown.Item href="#">⚙️ Settings</Dropdown.Item>
                    <Dropdown.Item href="#">🏃‍➡️ Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <>
                  <Button
                    variant="outline-light"
                    href="#action1"
                    className="mx-2"
                  >
                    🔑 Sign In
                  </Button>
                  <Button
                    variant="outline-light"
                    href="#action1"
                    className="mx-2"
                  >
                    🚀 Create Acccount
                  </Button>
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
