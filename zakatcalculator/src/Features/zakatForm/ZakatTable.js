import React from 'react';
import FilterableProdcutTable from './ZakatForm'
import {ContextProvider} from './Context';

export default function ZakatTable() {
 
  return (
   <ContextProvider>
      <FilterableProdcutTable />
   </ContextProvider>
     
  )
}
