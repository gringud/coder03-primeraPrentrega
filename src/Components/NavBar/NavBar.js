import logoImg from "../../Components/Img/logo.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { TiShoppingCart } from "react-icons/ti";

import ItemListContainer from "./ItemListContainer";

export default function NavBar(){
    console.log("object");

    return(
        <>
            <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                <img src={logoImg} width="60px"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#Inicio">Inicio</Nav.Link>
                    <Nav.Link href="#Nosotros">Nosotros</Nav.Link>
                    <Nav.Link href="#Contacto">Contacto</Nav.Link>
                    
                </Nav>
                <Nav>
                    <Nav.Link eventKey={2} href="#cart">
                    <TiShoppingCart className="fs-1"/>
                    </Nav.Link>
                    <Nav.Link href="#deets">
                        <ItemListContainer greeting="1"/>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}