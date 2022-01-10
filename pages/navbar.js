import Link from 'next/link';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavBar() {
  return (
<>
<Navbar bg="white" expand="lg" className="border-bottom border-3">
  <Container>
    <Navbar.Brand>{<Link href="/"><h1>Diana Heuman Consulting</h1></Link>}</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto text-dark">
        <Nav.Link>{<Link href="/"><h2>Home</h2></Link>}</Nav.Link>
        <Nav.Link>{<Link href="/about"><h2>About</h2></Link>}</Nav.Link>
        <Nav.Link>{<Link href="/services"><h2>Services</h2></Link>}</Nav.Link>
        <Nav.Link>{<Link href="/contact"><h2>Contact</h2></Link>}</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>
  )
}

export default NavBar