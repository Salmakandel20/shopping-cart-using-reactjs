import { combineReducers } from "redux";
import { cartReducer } from "./cartreducer";
import { productsReducer } from "./productReducer";
export default combineReducers({
    products:productsReducer,
    cart:cartReducer
})