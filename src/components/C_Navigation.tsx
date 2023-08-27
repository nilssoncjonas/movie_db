
import { Link, NavLink } from 'react-router-dom'
// style
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
const C_Navigation = () => {
const expand = true
    return (
        <>
            <Navbar expand='md' variant="dark" className="bg-dark mb-3" fixed={"top"}>

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
                            <Nav className="justify-content-end flex-grow-1 pe-3 text-center">
                                <Nav.Link as={NavLink} to={'/movie/now_playing'}>Now Playing</Nav.Link>
                                <Nav.Link as={NavLink} to={'/movie/popular'}>Trending Movies</Nav.Link>
                                <Nav.Link as={NavLink} to={'/movie/top_rated'}>Top Rated Movies</Nav.Link>
                                <Nav.Link as={NavLink} to={'/genre'}>Discover Movies By Genres</Nav.Link>

                            </Nav>



                        </Offcanvas.Body>

                    </Navbar.Offcanvas>

                </Container>

            </Navbar>
        </>
    )
}

export default C_Navigation