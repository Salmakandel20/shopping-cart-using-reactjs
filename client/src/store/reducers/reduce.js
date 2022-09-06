import { combineReducers } from "redux";
import { cartReducer } from "./cartreducer";
import { productsReducer } from "./productReducer";
import {orderReducer} from "./orderReducer"
export default combineReducers({
    products:productsReducer,
    cart:cartReducer,
    order:orderReducer
})