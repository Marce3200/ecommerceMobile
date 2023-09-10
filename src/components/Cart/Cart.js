import React from "react";
import Card from "react-bootstrap/Card";
import "../Cart/cart.css";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import logo from "../img/logo.png";
import axios from "axios";
import { useEffect, useState } from "react";

const Cart = () => {
  const [post, setPost] = useState([]);
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const cargarDatos = () => {
    setLoading(true);
    setLoading1(true);
    const baseURL = process.env.REACT_APP_API_URL;
    const axiosConfig = {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
      withCredentials: true,
    };
    axios.get(`${baseURL}/carrito/list`, axiosConfig).then((response) => {
      setPost(response.data.carrito);
      console.log(response.data.carrito);
     
        setLoading(false);
        
      
    });
    axios.get(`${baseURL}/product/all`, axiosConfig).then((response) => {
      setProducts(response.data.products);
      console.log(response.data.products);
     
        setLoading1(false);
    });
  };

  useEffect(() => {
    cargarDatos();
  }, []);
  return (
    <Container>
      <center>
        <img className="logo-login" src={logo} alt="logo" />
        <p className="titulo-seccion pt-5">Carrito de Compras</p>
        {loading || loading1
          ? null
          : (post.map((item) => {
              const prod = products.find((x) => x._id === item.itemId);

              return (
                <Card
                  className="card-carrito d-flex flex-column"
                  style={{ width: "75%" }}
                >
                  <Card.Body>
                    <Row className="align-items-center justify-content-center">
                      <Col lg={2}>
                        <p className="texto-mini">Artículo</p>
                        <p>{prod.name}</p>
                      </Col>

                      <Col lg={2}>
                        <p className="texto-mini">Cantidad</p>
                        <input
                          id="number"
                          type="number"
                          value={item.quantity}
                          className="w-50 input-number mb-3 text-center"
                        />
                      </Col>

                      <Col lg={2}>
                        <p className="texto-mini">Precio</p>
                        <p>{prod.price}</p>
                      </Col>
                      <Col lg={2}>
                        {/* <Button
                          className="boton-comprar"
                          type="submit"
                          size="sm"
                        >
                          x
                        </Button> */}
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              );
            }))}

        <Button
          className="boton-comprar"
          type="submit"
          size="sm"
          a
          href="/checkout"
        >
          Proceder al pago
        </Button>
      </center>
    </Container>
  );
};

export default Cart;
