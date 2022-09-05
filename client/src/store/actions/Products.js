import { FETCH_PRODUCTS, FILTER_SIZE, FILTER_SORT } from "./types"

export const FetchProducts=()=>{
    return(dispatch)=>{
        fetch('/api/products').then(res=>res.json()).then(data=>{
            dispatch({
                type:FETCH_PRODUCTS,
                data:data
            })
        })
    }
}
export const filteredSize=(products,value)=>{
    return (dispatch)=>{
      let productClons=[...products]
      let newProduct=productClons.filter(p=> p.sizes.indexOf(value) != -1 ) 
     dispatch({
        type:FILTER_SIZE,
        data:{
            size:value,
            products:value=="ALL"?products: newProduct
        }
     })
    }
}
export const filteredSort=(products,value)=>{
    return(dispatch)=>{
    let productClons=[...products]
    let order=value
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
      }});
      dispatch({
        type:FILTER_SORT,
        data:{
            sort:value,
            products:newProducts
        }
     })
}}