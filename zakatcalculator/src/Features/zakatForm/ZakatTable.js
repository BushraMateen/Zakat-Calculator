import React from 'react'
import {items} from '../ItemData'
import FilterableProdcutTable from './FilterableProductTable'

export default function ZakatTable() {
   console.log(items) 
  return (
   
      <FilterableProdcutTable products={items} />
     
  )
}
