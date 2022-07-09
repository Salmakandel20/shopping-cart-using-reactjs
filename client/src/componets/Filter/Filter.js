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
            <select className='filter-select'>
                <option value="ALL">ALL</option>
                <option value="S">S</option>
                <option value="X">X</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>

            </select>
            <span>Order</span>
            <select className='filter-select'>
                <option value="latest">Latest</option>
                <option value="lowest">Lowest</option>
                <option value="heighest">Heighest</option>
                </select>
        </div>
   </div>
  )
}
