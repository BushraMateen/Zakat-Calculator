import React from 'react';
import ZakatForm from './ZakatForm'
import {ContextProvider} from './Context';

export default function ZakatTable() {
 
  return (
   <ContextProvider>
      <ZakatForm />
   </ContextProvider>
     
  )
}
