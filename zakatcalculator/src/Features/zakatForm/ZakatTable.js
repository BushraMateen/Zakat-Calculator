import React from 'react'

import FilterableProdcutTable from './FilterableProductTable'
import {ContextProvider} from './Context';

export default function ZakatTable() {
 
  return (
   <ContextProvider>
      <FilterableProdcutTable />
   </ContextProvider>
     
  )
}
