import React ,{useEffect, useState} from "react";
import Header from "./componets/Header/Header";
import Footer from "./componets/footer/Footer";
import Product from "./componets/Products/Product";
import Filter from "./componets/Filter/Filter"
import Cart from "./componets/Cart/Cart"
import { Provider } from "react-redux";
// import { words } from "./words";
import data from "./data.json"
import store from"./store/store"
function App() {
  const [sort,setSort]=useState("")
  const [size,setSize]=useState("")
  const [products,setProducts]=useState(data)
  const [cartItems,setCartItems]=useState(JSON.parse(localStorage.getItem("cartItems"))||[])
  const handleFilterBySize=(e)=>{
    setSize(e.target.value)
    if (e.target.value=="ALL"){
      setProducts(data)
    }
    else{
      let productClons=data
      // console.log(typeof (productClons))
      let newProducts=productClons.filter(p=> p.sizes.indexOf(e.target.value) != -1 ) 

      
      // console.log(newProducts)
      setProducts(newProducts)

    }
  }
  const handleFilterByOrder=(e)=>{
    setSort(e.target.value)
    let order=e.target.value
    let productClons=[...products]
   let newProducts=productClons.sort(function(a,b) {
    if (order=="Lowest")
    {
      return a.price - b.price
      console.log(a)
    }
    else if(order=="Heighest")
  {  
    return b.price -a.price
  }

   else{
   return a.id<b.id ?1 : -1
   }
  })
    setProducts(newProducts)
  }
  const addTocart=(product)=>{
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
    setCartItems(cartItemClone)
    console.log(product.id)
    console.log(cartItemClone)
  }
  useEffect(()=>{localStorage.setItem("cartItems",JSON.stringify(cartItems))},[cartItems])
   const removeCart=(product)=>{
    const cartItemClone=[...cartItems]
     setCartItems(cartItemClone.filter(p=>p.id!=product.id))
   }
  return (
    <Provider store={store}>
<div className="layout">
      <Header/>
      <main>
        <div className="wrapper">
        <Product products={products} addTocart={addTocart}/>
         <Filter 
         size={size}
         order={sort}
         handleFilterBySize={handleFilterBySize}
         handleFilterByOrder={handleFilterByOrder}
         />
         </div>
         <Cart   cartItems={cartItems}removeCart={removeCart}/>
        </main>
      <Footer/>
    </div>
    </Provider>
    
  );
}

export default App;
