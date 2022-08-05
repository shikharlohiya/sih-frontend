import React from "react";
import { useState } from "react";
import StripeCheckout from "react-stripe-checkout";

function Stripe(){
     const [product, setProduct]= useState({
        name: "React for ticket",
        price: 10,
        productBy: "ticket"
     });

     const makePayment = token=>{
        const body ={
            token,
            product

        }
        const headers ={
            "Content-Type": "application/json"
        }
        return fetch(`http://localhost:8000/api/payment`,{
            method: "POST",
            headers,
            body: JSON.stringify(body)
        }).then( response=>{
            console.log("RESPONSE", response);
            const {status}= response;
            console.log("STATUS", status);
        })
        .catch(error=>console.log(error));
     };


return(
 <StripeCheckout
 stripeKey="pk_test_51LSItVSAgNM3L4fVbTmzqS1AW1SkEOav1rfemBDVl7K6mGzUXwNj7xW7QZPzLVSlgY47ypORrsV5LAYlc5rp7j4j00kGinMDWO"
 token={makePayment}
 name="Buy ticket"
 amount={product.price*100}
 
 >
    <button className="btn-large pink"> buy ticket 
    {product.price}
    
    </button>
 </StripeCheckout>
 


 
)
}
export default Stripe;
