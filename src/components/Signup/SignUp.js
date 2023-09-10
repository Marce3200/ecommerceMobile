import "../LogIn/login.css";
import "../Signup/signup.css";
import logo from "../img/mario.png";
import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../LogIn/Login";
import { useRef, useState } from "react";
import { registroUsuario } from"../../services/user.service";
import { useNavigate } from "react-router-dom";
import { IonButton } from '@ionic/react';




const SignUp = () => {
  const username = useRef(null);
  const password = useRef(null);
  const password2 = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const [alertaSignUp, setAlertaSignUp] = useState(false);

  
  const onSubmit = async () => {
  

    const n = name.current.value;
    const u = username.current.value;
    const p1 = password.current.value;
    const p2 = password2.current.value;
    
    



    const registroConExito = await registroUsuario(n, u, p1, p2);
    if (registroConExito){
      navigate("/login")
    }else {setAlertaSignUp(true)

    }
     

  };
  return (
    <Container fluid className="p-0">
      <Row>
        <center>
          <Col>
            <img className="logo-mario" src={logo} alt ="logo"/>
            <p className="titulo-seccion">_Crea tu Cuenta</p>
            <div className="bajada-titulo">
              
                <div>
                  <p className="text-1">¿Ya tienes cuenta? </p>
                  <a href="/login" className="link">
                    {" "}
                    Inicia Sesión
                  </a>
                </div>
              
            </div>
            {alertaSignUp?
            <p className="mensaje-error">Hubo un problema, por favor ingresa tus datos nuevamente</p>
            :null}
            <Form className="form w-75">
            <Form.Group className="mb-2 form-group" controlId="formBasicEmail">
                <Form.Label className="text-forma">Nombre</Form.Label>
                <Form.Control type="text" size="sm" ref = {name}/>
              </Form.Group>

              <Form.Group className="mb-2 form-group" controlId="formBasicEmail">
                <Form.Label className="text-forma">Correo electrónico</Form.Label>
                <Form.Control type="text" size="sm" ref = {username}/>
              </Form.Group>

              <Form.Group className="mb-2 form-group" controlId="formBasicPassword">
                <Form.Label className="text-forma">Contraseña</Form.Label>
                <Form.Control type="password" size="sm" ref = {password}/>
              </Form.Group>
              <Form.Group className="mb-2 form-group" controlId="formBasicPassword">
                <Form.Label className="text-forma">Confirma tu contraseña</Form.Label>
                <Form.Control type="password" size="sm" ref = {password2}/>
              </Form.Group>

              {/* <Button className="boton-comprar" onClick = {onSubmit} size="sm">
                Crear Cuenta
              </Button> */}
              <IonButton  className="boton-mobile" size="large" onClick = {onSubmit}>Crear cuenta</IonButton>
            </Form>
          </Col>
        </center>
      </Row>
    </Container>
  )
}

export default SignUp;