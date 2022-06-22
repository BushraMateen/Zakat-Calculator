import React from 'react'
import Country from './Country'
import Currency from './Currency'
import Language from './Language'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Country/>
      <Currency/>
      <Language/>
      <Link to="/ZakatTable">
     <button className='submit-btn'>Submit</button>
    </Link>
   
    </div> 
    
      
  )
}
