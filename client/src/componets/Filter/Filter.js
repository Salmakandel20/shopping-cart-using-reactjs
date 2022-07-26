import React from 'react'
import "../../css/Filter/Filter.css"
export default function Filter(props) {
  return (
    <div className="filter-wrapper">
       <h2 className='filter-title'>
        Filter
        </h2>
        <div className='num-of-ptduct'>
            num of product : 4
        </div>
        <div className='filter-by-size'>
            <span>Filter</span>
            <select value={props.size} className='filter-select' onChange={props.handleFilterBySize}>
                <option value="ALL">ALL</option>
                <option value="S">S</option>
                <option value="X">X</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>

            </select>
            <span>Order</span>
            <select  value={props.order} className='filter-select'  onChange={props.handleFilterByOrder}>
                <option value="latest">Latest</option>
                <option value="Lowest">Lowest</option>
                <option value="Heighest">Heighest</option>
                </select>
        </div>
   </div>
  )
}
