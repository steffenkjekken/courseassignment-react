import { Container, Nav, Navbar as NavbarBS } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CartIcon from './Cart.js';

const Header = () => {

  return (
    <NavbarBS className="shadow-sm">
        <Container>
        <NavbarBS.Brand to="/" as={NavLink}>Azamon</NavbarBS.Brand>
            <Nav>
            <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
            <Nav.Link to="/contact" as={NavLink}>Contact</Nav.Link>
            <Nav.Link to="/cart" as={NavLink}><CartIcon/></Nav.Link>
            </Nav>
        </Container>
    </NavbarBS>
  )
}

export default Header
