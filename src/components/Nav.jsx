import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import img from '../assets/images/audi-rs-4-avant-rear-lights-view_1539108577.jpg'
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useContext } from 'react';
import { PageTheme } from '../contexts/ThemeContext';
function Navs() {

  // use theme context
  const {theme, toggleTheme} = useContext(PageTheme)
  console.log(theme);
  
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
            <NavLink to="/hook" style={{textDecoration: "none"}}>
            My Hook
            </NavLink>
            </Nav.Link>
            <Nav.Link>
            <NavLink to="/blogs" style={{textDecoration: "none"}}>
            Blogs
            </NavLink>
            </Nav.Link>
            <Nav.Link>
            <NavLink to="/countries" style={{textDecoration: "none"}}>
            Countries
            </NavLink>
            </Nav.Link>

            <div className="text-dark" >
              {theme === "light" ? <MdLightMode className='icon' onClick={toggleTheme} /> : <MdDarkMode className='icon' onClick={toggleTheme} /> }
            </div>


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