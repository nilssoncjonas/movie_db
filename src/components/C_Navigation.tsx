
import { Link, NavLink } from 'react-router-dom'
// style
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
const C_Navigation = () => {
const expand = true
    return (
        <>
            <Navbar expand='md' variant="dark" className="bg-dark mb-3">

                <Container fluid>

                    <Navbar.Brand as={Link} to={'/'}><h1>The Movie DB 🎬</h1></Navbar.Brand>

                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>

                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                The Movie DB 🎬
                            </Offcanvas.Title>
                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link as={NavLink} to={'/person'}>Person</Nav.Link>
                                <Nav.Link as={NavLink} to={'/movies'}>Movies</Nav.Link>
                            </Nav>

                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-warning">Search</Button>
                            </Form>

                        </Offcanvas.Body>

                    </Navbar.Offcanvas>

                </Container>

            </Navbar>
        </>
    )
}

export default C_Navigation