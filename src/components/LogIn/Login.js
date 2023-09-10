import "./login.css";
import logo from "../img/logo.png";
import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Signup/SignUp";
import { signIn } from"../../services/user.service";
import { useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../services/AuthProvider";
import { IonButton } from '@ionic/react';


const Login = () => {

  const username = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const [alertaLogIn, setAlertaLogIn] = useState(false);
  const {setAuth,setUser} = useAuth();
  
  const onSubmit = async () => {
  

    const u = username.current.value;
    const p = password.current.value;
    
    const loginConExito = await signIn(u, p);
    console.log(loginConExito)
    if (loginConExito){
      setUser(loginConExito)
      
      setAuth(true)
      navigate("/perfil")
    }else {setAlertaLogIn(true)

    }
     

  };

  return (
    <Container fluid className="p-0">
      <Row>
        <center>
          <Col>
            <img className="logo-login" src={logo} alt = "logo" />
            <p className="titulo-seccion">_Iniciar sesión</p>
            <div className="bajada-titulo">
              
                <div>
                  <p className="text-1">¿Aún sin cuenta? </p>
                  <a href="/signup" className="link">
                    {" "}
                    Regístrate aquí
                  </a>
                </div>
              
            </div>
            {alertaLogIn?
            <p className="text-incorrect">usuario o password incorrecto</p>
            :null}
            <Form className="form w-50" >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-form">Username</Form.Label>
                <Form.Control type="user" ref = {username} size="sm"/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text-form">Password</Form.Label>
                <Form.Control type="password" ref = {password} size="sm"/>
              </Form.Group>
              <IonButton onClick = {onSubmit}>Acceder</IonButton>
              {/* <Button className="boton-comprar"  onClick = {onSubmit} size="sm">
                Acceder
              </Button> */}
            </Form>
          </Col>
        </center>
      </Row>
    </Container>
  );
};

export default Login;
