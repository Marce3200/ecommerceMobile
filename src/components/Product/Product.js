import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "../Product/product.css";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const { id } = useParams(); //llaves porque useparams es una funcion que devuelve parametros y uno de ellos es id
  const [post, setPost] = useState([]);
  const baseURL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const productoAlCarrito = async () => {
    const axiosConfig = {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
      withCredentials: true,
    };
    const datos = {
      itemId: id,
      quantity: 1,
    };
    try {
      const respuesta = await axios.post(
        `${baseURL}/carrito/addItem`,
        datos,
        axiosConfig
      );

      navigate("/cart");
    } catch (error) {
      return false;
    }
  };

  const actualizarProducto = async () => {
    navigate(`/actualizarproduct/${id}`);
  };

  const eliminarProducto = async () => {
    const axiosConfig = {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
      withCredentials: true,
    };

    try {
      const respuesta = await axios.delete(
        `${baseURL}/product/delete/${id}`,
        axiosConfig
      );
      if (respuesta) {
        navigate("/catalogo");
      }
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    const baseURL = process.env.REACT_APP_API_URL;
    const axiosConfig = {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
      withCredentials: true,
    };
    axios.get(`${baseURL}/product/item/${id}`, axiosConfig).then((response) => {
      setPost(response.data.products);
      console.log(response.data.products);
    });
  }, [id]);
  return (
    <Container fluid>
      <center>
        <Row>
          <Col lg={6} sm={12}>
            <img src={post.img} className="imagen-principal" alt="" />
          </Col>
          <Col lg={6} sm={12}>
            <Col lg={6} sm={12}>
              <p className="text-infor-product">{post.name}</p>

              <li className="li-product">{post.description}</li>

              <p className="precio">${post.price}</p>

              <Button
                className="boton-comprar"
                type="submit"
                size="sm"
                onClick={productoAlCarrito}
              >
                Agregar al Carrito
              </Button>
            
              
            </Col>
          </Col>
        </Row>
      </center>
    </Container>
  );
};

export default Product;
