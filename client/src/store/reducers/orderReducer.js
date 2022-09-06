import {  CLEAR_ORDER, CREATE_ORDER } from "../actions/types";

export const orderReducer=(state={},action)=>{
    switch(action.type){
        case CLEAR_ORDER:
            {
                return {order:false}
            }
        case CREATE_ORDER:
            return{
                order:action.data.order
            }
            default:
                return state
    }
}