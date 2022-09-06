import { ADD_CART, REMOVE_CART } from "./types";

export const addtocart=(product)=>{
    return (dispatch,getState)=>{
        const cartItems=getState().cart.cartItems
        const cartItemClone=[...cartItems];
    let isProductExist=false
    cartItemClone.forEach(p=>{
      if(p._id==product._id){
        p.qty++
        isProductExist=true
      }

    })
    if(!isProductExist){
      cartItemClone.push({...product,qty:1})
    }
dispatch({
    type:ADD_CART,
    data:{
      cartItems:cartItemClone

    }
})
localStorage.setItem("cartItems",JSON.stringify(cartItemClone))
    }
}
export const removecart=(product)=>{
    return (dispatch,getState)=>{
        const cartItems=getState().cart.cartItems
        const cartItemClone=[...cartItems]
        const updateCart=cartItemClone.filter(p=>p._id!=product._id)
dispatch({
    type:REMOVE_CART,
data:{
   cartItems:updateCart

}})
localStorage.setItem("cartItems",JSON.stringify(updateCart))

}}