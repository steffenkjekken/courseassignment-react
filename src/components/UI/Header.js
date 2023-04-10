import { Container, Nav, Navbar as NavbarBS } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CartIcon from './Cart.js';

const Header = () => {
  return (
    <NavbarBS className='bg-white shadow-sm'>
        <Container>
            <Nav>
                <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                <Nav.Link to="/contact" as={NavLink}>Contact</Nav.Link>
            </Nav>
            <Nav.Link to="/cart" as={NavLink}><CartIcon/></Nav.Link>

        </Container>
    </NavbarBS>
  )
}

export default Header
