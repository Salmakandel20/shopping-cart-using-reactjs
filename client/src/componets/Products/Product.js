import React,{useEffect, useState} from 'react'
import "../../css/Products/Product.css"
import Bounce from "react-reveal/Bounce"
import ProductModal from "./productModal"
import {connect} from "react-redux"
import { FetchProducts } from '../../store/actions/Products'
function Products(props) {
    const [product,setProduct]=useState("");
    const openModal=(product)=>{
        setProduct(product)
    }
    const closeProduct=()=>{
        setProduct(false)
    }
  useEffect(()=>{
     props.FetchProducts()
  },[])

  return (
    <Bounce left cascade>
    <div className="product-wrapper">
    { props.products && props.products.length?  props.products.map(product => (
        <div className="product-item" key={product.id}>
          <a href="#"  onClick={()=>openModal(product)}>
             <img src={product.imageurl} alt={product.title}></img>
          </a>  
            <div className='product-desc'>
                <p>{product.title}</p>
                <span>${product.price}</span>
                </div>
                <button onClick={()=>{props.addTocart(product)}}>Add To Cart</button>
            
        </div>


    )):"loading"}
<ProductModal product={product} closeModal={closeProduct}/>   
 </div>
 </Bounce>
  )
}

export default connect((state)=>{
  return{
    products:state.products.filterProducts
  }
},{FetchProducts})(Products)
