// import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import "../../css/Products/Product.css"
function Product(props) {
  return (
    <div className="product-wrapper">
    { props.products.map(product => (
        <div className="product-item" key={product.id}>
            <img src={product.imageurl} alt={product.title}></img>
            <div className='product-desc'>
                <p>{product.title}</p>
                <span>{product.price}</span>
                </div>
                <button>Add To Cart</button>
            
        </div>


    ))}
 </div>
  )
}

export default Product