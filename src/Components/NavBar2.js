import logo from '../img/krazylogo.JPG';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function NavBar2 () {
    const navegar = useNavigate();

    const goCapsulas = () => {
        navegar(`/capsulas`)
    }

    const goVapos = () => {
        navegar(`/vapos`)
    }

    const goCarrito = () => {
        navegar(`/carrito`)
    }

    const goHome = () => {
        navegar(`/`)
      }


    return (
        <div className="NavBar2">
            <img src={logo} alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
            <Button style={{height:'50%', width:'20%'}}  variant="secondary">+</Button>
            <Navbar.Brand >Crazy Vaps</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={goHome} >Inicio</Nav.Link>
            <NavDropdown title="Capsulas / Vapos" id="basic-nav-dropdown">
              <NavDropdown.Item >Sativas</NavDropdown.Item>
              <NavDropdown.Item >Indicas</NavDropdown.Item>
              <NavDropdown.Item >Pen's</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </div>
    )
}