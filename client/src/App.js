import React ,{useState} from "react";
import Header from "./componets/Header/Header";
import Footer from "./componets/footer/Footer";
import Product from "./componets/Products/Product";
import Filter from "./componets/Filter/Filter"
// import { words } from "./words";
import data from "./data.json"
function App() {
  const [sort,setSort]=useState("")
  const [size,setSize]=useState("")
  const [products,setProducts]=useState(data)
  const handleFilterBySize=(e)=>{
    setSize(e.target.value)
    if (e.target.value=="ALL"){
      setProducts(data)
      // console.log(data)
    }
    else{
      console.log(e.target.value)
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
  
  return (
    <div className="layout">
      <Header/>
      <main>
        <div className="wrapper">
        <Product products={products}/>
         <Filter 
         size={size}
         order={sort}
         handleFilterBySize={handleFilterBySize}
         handleFilterByOrder={handleFilterByOrder}
         />
         </div>
        </main>
      <Footer/>
    </div>
  );
}

export default App;
