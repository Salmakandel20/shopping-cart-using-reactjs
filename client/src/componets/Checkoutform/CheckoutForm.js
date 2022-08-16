import React from 'react'
import "../../css/Checkoutform/CheckoutForm.css";
import Input from '../Input/Input';
import Zoom  from 'react-reveal/Zoom';
export default function CheckoutForm(props) {
  return (
    <>
    {props.showform &&
    <div className='checkoutForm'>
      <span className='close-icon' onClick={()=>props.setShowform(false)}>&times;</span>
      <Zoom left>
      <form onSubmit={props.submitOrder}>
        <Input
        type="text"
        name="name"
        label="Name"
        onChange={props.handleChange}
        />
         <Input
        type="email"
        name="email"
        label="Email"
        onChange={props.handleChange}
        />

        
      <div>
        <button type="submit" >Checkout</button>
      </div>
      </form>
      </Zoom>
    </div>

    }


    </>
  )
}
