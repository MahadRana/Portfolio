import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './NavBar.css';

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary px-3 fixed-top">
      <Container fluid>
        {/* Your Name in the top-left */}
        <Navbar.Brand href="#home" className="fw-bold">Mahad Rana</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigation Links */}
          <Nav className="navbar-nav me-auto">
            <Nav.Link href="#home" className='nav-link'>Home</Nav.Link>
            <Nav.Link href="#skills" className='nav-link'>Skills</Nav.Link>
            <Nav.Link href="#projects" className='nav-link'>Projects</Nav.Link>
          </Nav>

          {/* Buttons Container */}
          <div className="icon-container">
            <a 
              href="https://www.linkedin.com/in/mahad-rana/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="icon-circle"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="https://github.com/MahadRana" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="icon-circle"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="#contact" 
              className="connect-button"
            >
              Let’s Connect
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
