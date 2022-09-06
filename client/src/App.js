import React from "react"
import Header from "./componets/Header/Header";
import Footer from "./componets/footer/Footer";
import './index.css';

import { Provider } from "react-redux";
import {BrowserRouter,NavLink,Routes,Route} from "react-router-dom"
import store from"./store/store"
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Navbar from "./componets/Navbar/Navbar";

function App() {

  return (
    <BrowserRouter>
     <Provider store={store}>
<div className="layout">
      <Header/>
      <main>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/orders" element={<Orders />} exact/>


        </Routes>
        </main>
      <Footer/>
    </div>
    </Provider>
    
    </BrowserRouter>
   
  );
}

export default App;
