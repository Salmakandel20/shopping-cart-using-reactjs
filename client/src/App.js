import React from "react"
import Header from "./componets/Header/Header";
import Footer from "./componets/footer/Footer";
import Product from "./componets/Products/Product";
import Filter from "./componets/Filter/Filter"
import Cart from "./componets/Cart/Cart"
import { Provider } from "react-redux";

import store from"./store/store"
function App() {

  return (
    <Provider store={store}>
<div className="layout">
      <Header/>
      <main>
        <div className="wrapper">
        <Product />
         <Filter 
         
         />
         </div>
         <Cart  />
        </main>
      <Footer/>
    </div>
    </Provider>
    
  );
}

export default App;
