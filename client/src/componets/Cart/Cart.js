import React, { useState } from 'react'
import "../../css/Cart/Cart.css";
import Product from '../Products/Product';
import CheckoutForm from '../Checkoutform/CheckoutForm';
import Bounce from "react-reveal/Bounce"
import Modal from "react-modal"
import { connect } from 'react-redux';
import {removecart} from "../../store/actions/card"
import {createOrder,clearOrder} from "../../store/actions/order"
 function Cart(props) {
  const [showform,setShowform]=useState(false)
  const [order,setOrder]=useState(false)
  const [prevalue,setPrevalue]=useState("")
  const closeModal=()=>{
props.clearOrder(false)
setShowform(false)
  }
  const submitOrder=(e)=>{
    e.preventDefault()
    const order={
      name:prevalue.name,
      email:prevalue.email

    }
    props.createOrder(order)
  }
  const handleChange=(e)=>{
setPrevalue((prevalue)=>({...prevalue,[e.target.name]:e.target.value}))
  }
  return (

   <div className='cart-wrapper'>
  
   <div className='cart-title'>{props.cartItems.length? <p>There is {props.cartItems.length} products in cart </p>: "Empty cart"}</div>
<>{
  props.order && <Modal isOpen={props.order} onRequestClose={closeModal}>

  <div className='order-info'>
   <span className='close-icon' onClick={closeModal}>&times;</span>
   <p className='alert-sucess'>order info</p>
   <table>
     <tr>
       <td>Name:</td>
       <td>{props.order.name}</td>
     </tr>
     <tr>
       <td>Email:</td>
       <td>{props.order.email}</td>
     </tr>
     <tr>
       <td>Total:</td>
       <td>{props.cartItems.reduce((a,p)=>{
         return a+p.price*p.qty
       },0)}</td>
     </tr>
     <tr>
       <td>selected Items:</td>
       <td>
       {
       props.cartItems.map(item=> (
         <div className='cart-data' key={item._id}>
        
                 <p>Title of Product: {item.title}</p>
                 <p>Number Of Product : {item.qty}</p>
                 </div>
                 ))}
       </td>
     </tr>
   </table>
  </div>
</Modal>
}
</>

  <Bounce bottom cascade>
  
    <div className='cart-items'  >
        {
          props.cartItems.map(item=> (
            <div className='cart-item' key={item._id}>
            <img src={item.imageurl} alt=""/>
            <div className="cart-info">
                <div>
                    <p>title: {item.title}</p>
                    <p>Qty: {item.qty}</p>
                    <p>prics: ${item.price}</p>

                </div>
                <button onClick={()=>props.removecart(item)}>Remove </button>
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
export default connect((state)=>{
  return{
    cartItems:state.cart.cartItems,
    order:state.order.order
  }
},{removecart,createOrder,clearOrder})(Cart)
