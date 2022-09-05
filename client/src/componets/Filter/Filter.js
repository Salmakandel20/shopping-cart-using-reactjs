import React from 'react'
import "../../css/Filter/Filter.css"
import Flip from "react-reveal/Flip"
import { connect } from 'react-redux'
import { filteredSize,filteredSort } from '../../store/actions/Products'

 function Filter(props) {
  return (
    <Flip left >
      {props.filteredProducts&& <div className="filter-wrapper">
       <h2 className='filter-title'>
        Filter
        </h2>
        <div className='num-of-ptduct'>
            Number Of Products : {props.filteredProducts.length}
        </div>
        <div className='filter-by-size'>
            <span>Filter</span>
            <select value={props.size} className='filter-select' onChange={(e)=>props.filteredSize(props.products,e.target.value)}>
                <option value="ALL">ALL</option>
                <option value="S">S</option>
                <option value="X">X</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>

            </select>
            <span>Order</span>
            <select  value={props.sort} className='filter-select'  onChange={(e)=>props.filteredSort(props.filteredProducts,e.target.value)}>
                <option value="latest">Latest</option>
                <option value="Lowest">Lowest</option>
                <option value="Heighest">Heighest</option>
                </select>
        </div>
   </div>
      }
    
   </Flip>
  )

}
export default connect((state)=>{
  return{
  size:state.products.size,
  sort:state.products.sort,
  products:state.products.products,
  filteredProducts:state.products.filterProducts
  }
 

},
  {filteredSize,filteredSort})(Filter)