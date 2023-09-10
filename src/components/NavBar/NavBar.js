import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../NavBar/navbar.css";
import logo3 from "../img/logo3.png";
import "../NavBar/navbar.css";
import { useAuth } from "../../services/AuthProvider";
import { logout } from "../../services/user.service";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const onLogout = () => {
    logout();
    setAuth(false);

    navigate("/");
  };
  return (
    <Navbar className="fondo" collapseOnSelect expand="lg" variant="dark">
    <Container>
    <Nav.Link eventKey={2} href="/cart" >
          <i class="fa-solid fa-cart-shopping carrito"></i>
          </Nav.Link>
      <Navbar.Brand href="/"><img className="mini-logo" src={logo3} alt= "minilogo"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
         
        <Nav.Link eventKey={2} href="/catalogo" className='nav-link active'>
          Catálogo
          </Nav.Link>
          

         
        </Nav>
        <Nav>
          {!auth?<Nav.Link href="/login">Iniciar Sesión</Nav.Link>:null}{/* si NO hay algo en el token, que aparezca iniciar sesion */}
          {auth?<Nav.Link href="/perfil">Mi Perfil</Nav.Link>:null}{/* si hay algo en el token, que aparezca mi perfil */}
          
       
          
          {auth?<Nav.Link className='item-nav' onClick={onLogout}>Cerrar sesión</Nav.Link>:null} {/* si hay algo en el token, que aparezca cerrar sesion */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar