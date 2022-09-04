import React, { useState } from 'react'
import "../../css/Cart/Cart.css";
import Product from '../Products/Product';
import CheckoutForm from '../Checkoutform/CheckoutForm';
import Bounce from "react-reveal/Bounce"
export default function Cart(props) {
  const [showform,setShowform]=useState(false)
  const [prevalue,setPrevalue]=useState("")
  const submitOrder=(e)=>{
    e.preventDefault()
  }
  const handleChange=(e)=>{
setPrevalue((prevalue)=>({...prevalue,[e.target.name]:e.target.value}))
  }
  return (
   <div className='cart-wrapper'>
    <div className='cart-title'>{props.cartItems.length? <p>There is {props.cartItems.length} products in cart </p>: "Empty cart"}</div>
  <Bounce bottom cascade>
  
    <div className='cart-items'  >
        {
          props.cartItems.map(item=> (
            <div className='cart-item' key={item.id}>
            <img src={item.imageurl} alt=""/>
            <div className="cart-info">
                <div>
                    <p>title: {item.title}</p>
                    <p>Qty: {item.qty}</p>
                    <p>prics: ${item.price}</p>

                </div>
                <button onClick={()=>props.removeCart(item)}>Remove </button>
            </div>

        </div>
        ))}
       
    </div>
    </Bounce>
    {
  props.cartItems.length!==0 &&(
<div className='cart-footer'>
    <div className='total'>
      total:${props.cartItems.reduce((acc,p)=>{return acc+(p.price*p.qty)},0)}
    </div>
    <button onClick={()=>{setShowform(true)}} >Select Products</button>
    </div>
      )
    }
  <CheckoutForm
  showform={showform}
  setShowform={setShowform}
  submitOrder={submitOrder}
  handleChange={handleChange}
  />
    </div>
  )
}

