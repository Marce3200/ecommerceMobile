import React from "react";
import "./home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import logov2 from "../img/logov2.png";


const Home = () => {
  return (
    <Container fluid className="p-0">
      <Row className="logosection">
        <center>
          <Col className="logo-nuevo">
            <img className="logo" src={logov2} alt="" />
            <div>
              <p className="bajada-header">
                Arma tu Set Up, con los mejores accesorios tecnológicos y el
                mejor servicio.
              </p>
             
              <center>
                  <Button size="sm" className="product-button" a href="/catalogo">
                    Ver Catálogo
                  </Button>
                </center>
            </div>
          </Col>
        </center>
      </Row>
      
      
    </Container>
  );
};

export default Home;
