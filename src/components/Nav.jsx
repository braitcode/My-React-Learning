import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import img from '../assets/images/audi-rs-4-avant-rear-lights-view_1539108577.jpg'

function Navs() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/">
        <Navbar.Brand href="#home"><img src={img} width="20px" height="20px" alt="" /></Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-2" >
            <Nav.Link>
            <NavLink to="/" style={{textDecoration: "none"}}>
              Home
            </NavLink>
            </Nav.Link>

            <Nav.Link>
                <NavLink to="/about" style={{textDecoration: "none"}}>
            About
            </NavLink>
            </Nav.Link>
            
            <Nav.Link>
            <NavLink to="/product" style={{textDecoration: "none"}}>
            Product
            </NavLink>
            </Nav.Link>
            <Nav.Link>
            <NavLink to="/login" style={{textDecoration: "none"}}>
            Login
            </NavLink>
            </Nav.Link>
            <Nav.Link>
            <NavLink to="/register" style={{textDecoration: "none"}}>
            Register
            </NavLink>
            </Nav.Link>
            <Nav.Link>
            <NavLink to="/hooks" style={{textDecoration: "none"}}>
            My Hook
            </NavLink>
            </Nav.Link>
            <Nav.Link>
            <NavLink to="/blogs" style={{textDecoration: "none"}}>
            Blogs
            </NavLink>
            </Nav.Link>



            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;