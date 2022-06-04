import React from 'react'
//import {items} from '../ItemData'
import FilterableProdcutTable from './FilterableProductTable'
import {ContextProvider} from './Context';

export default function ZakatTable(props) {
   //console.log(props.items) 
  return (
   <ContextProvider>
      <FilterableProdcutTable products={props.items} />
   </ContextProvider>
     
  )
}
