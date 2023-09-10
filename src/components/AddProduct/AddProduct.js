import React from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import "../AddProduct/addproduct.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import logo from "../img/logo.png";
import Button from "react-bootstrap/esm/Button";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { agregarProducto } from "../../services/product.service";

const AddProduct = () => {
  const nombre = useRef(null);
  const descripcion = useRef(null);
  const stock = useRef(null);
  const status = useRef(null);
  const precio = useRef(null);
  const url = useRef(null);
  const navigate = useNavigate();

  const onSubmit = async () => {
    const np = nombre.current.value;
    const desc = descripcion.current.value;
    const st = stock.current.value;
    const stat = status.current.value;
    const pri = precio.current.value;
    const ur = url.current.value;

    const agregadoConExito = await agregarProducto(np, desc, st, stat, pri, ur);
    if (agregadoConExito) {
      navigate("/catalogo");
    }
  };

  return (
    <Container fluid>
      <Row>
        <center>
          <Col>
            <img className="logo-login" src={logo} alt="" />
            <form className="w-50">
              <Form.Group className="mb-3">
                <Form.Label className="text-add">Nombre</Form.Label>
                <Form.Control ref={nombre} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="text-add">Descripción</Form.Label>
                <Form.Control ref={descripcion} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="text-add">Stock</Form.Label>
                <Form.Control ref={stock} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="text-add">Status</Form.Label>
                <Form.Control ref={status} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="text-add">Precio</Form.Label>
                <Form.Control ref={precio} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="text-add">URL imagen</Form.Label>
                <Form.Control ref={url} />
              </Form.Group>
            </form>

            <Button className="boton-comprar" onClick={onSubmit} size="sm">
              agregar producto
            </Button>
          </Col>
        </center>
      </Row>
    </Container>
  );
};

export default AddProduct;
