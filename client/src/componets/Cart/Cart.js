import React from 'react'
import "../../css/Cart/Cart.css";
import Product from '../Products/Product';

export default function Cart(props) {
  return (
   <div className='cart-wrapper'>
    <div className='cart-title'>{props.cartItems.length? <p>There is {props.cartItems.length} products in cart </p>: "Empty cart"}</div>
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
                <button onClick={()=>props.removeItem(item)}>Remove </button>
            </div>

        </div>
        ))}
       
    </div>
    </div>
  )
}

