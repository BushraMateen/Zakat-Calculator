import React from 'react'
import { countryList } from '../Data'
//import './Country.css'

export default function Country() {
  return (
    <div className='Dropdown-cotainer'>
        <select className='list' id='country'>
                {countryList.map((country) => <option className='optionclass' key={country.name} value={country.name}>{country.name}</option>)}
                </select>
                
    </div>
  )
}
