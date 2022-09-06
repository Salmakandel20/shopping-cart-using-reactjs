import React from 'react'
import Product from "../componets/Products/Product";
import Filter from "../componets/Filter/Filter"
import Cart from "../componets/Cart/Cart"
export default function Home() {
  return (
    <>
    <div className="wrapper">
        <Product  />
         <Filter  />
         </div>
         <Cart  />
    </>
  )
}
