import React from 'react'
import Modal from "react-modal"
 function orderModal(props) {
    const {order,closeModal,cartItems}=props
  return (
    <Modal isOpen={order} onRequestClose={closeModal}>
    <div className='order-info'>
     <span className='close-icon' onClick={closeModal}>&times;</span>
     <p className='alert-sucess'>order info</p>
     <table>
     <tbody>

       <tr>
         <td>Name:</td>
         <td>{order.name}</td>
       </tr>
       <tr>
         <td>Email:</td>
         <td>{order.email}</td>
       </tr>
       <tr>
         <td>Total:</td>
         <td>{cartItems.reduce((a,p)=>{
           return p.price*p.qty
         },0)}</td>
       </tr>
       <tr>
         <td>selected Items:</td>
         <td>
         {
         cartItems.map(item=> (
           <div className='cart-data' key={item._id}>
          
                   <p>Title of Product: {item.title}</p>
                   <p>Number Of Product : {item.qty}</p>
                   </div>
                   ))}
         </td>
       </tr>
       </tbody>
     </table>
    </div>
 </Modal>
  )
}
export default orderModal