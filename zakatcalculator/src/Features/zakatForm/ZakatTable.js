import React from 'react'
//import {items} from '../ItemData'
import FilterableProdcutTable from './FilterableProductTable'

export default function ZakatTable(props) {
   console.log(props.items) 
  return (
   
      <FilterableProdcutTable products={props.items} />
     
  )
}
