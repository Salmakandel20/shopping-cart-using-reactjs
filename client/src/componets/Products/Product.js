// import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import "../../css/Products/Product.css"
import ProductModal from "./productModal"
function Product(props) {
    const [product,setProduct]=useState("");
    const openModal=(product)=>{
        setProduct(product)
    }
    const closeProduct=()=>{
        setProduct(false)
    }
  return (
    <div className="product-wrapper">
    { props.products.map(product => (
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


    ))}
<ProductModal product={product} closeModal={closeProduct}/>   
 </div>
  )
}

export default Product