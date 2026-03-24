import { Navbar, Nav, Container } from 'react-bootstrap';

export function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#specialization">Specialization</Nav.Link>
                        <Nav.Link href="#tool">Tools</Nav.Link>
                        <Nav.Link href="#project">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}