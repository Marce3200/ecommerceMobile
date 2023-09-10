import { PayPalScriptProvider,PayPalButtons, usePayPalScriptReducer,} from "@paypal/react-paypal-js";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import "../CheckOut/checkout.css"

const CheckOut = () => {
 const [show, setShow] = useState(false);
 const [success, setSuccess] = useState(false);
 const [ErrorMessage, setErrorMessage] = useState("");
 const [orderID, setOrderID] = useState(false);


// creates a paypal order
const createOrder = (data, actions) => {
 return actions.order
   .create({
     purchase_units: [//con info del backend
       {
         description: "Sunflower",
         amount: {
           currency_code: "USD",
           value: 20,
         },
       },
     ],
     // not needed if a shipping address is actually needed
     application_context: {
       shipping_preference: "NO_SHIPPING",
     },
   })
   .then((orderID) => {
     setOrderID(orderID);//usa el useState para guardar el id de la orden
     return orderID;
   });
};
// check Approval
const onApprove = (data, actions) => {
 return actions.order.capture().then(function (details) {
   const { payer } = details;
   setSuccess(true);
 });
};
//capture likely error
const onError = (data, actions) => {
 setErrorMessage("An Error occured with your payment ");
};
//dentro del div del return, Anto, amononalo. 
  return (
    <PayPalScriptProvider
     options={{
       "client-id":process.env.REACT_APP_CLIENT_ID,//poner id en .env para configurarlo
     }}
   >
    
    <Container>
      <Col>
<center>
<p className='titulo-seccion-pago pt-5 pb-5'>Seleccione su método de pago</p>
    <PayPalButtons
           style={{ layout: "vertical" }}
           createOrder={createOrder}
           onApprove={onApprove}
           className="botones-pago"
         />
         </center>
         </Col>
    </Container>
    
   </PayPalScriptProvider>
    
  )
}


export default CheckOut

