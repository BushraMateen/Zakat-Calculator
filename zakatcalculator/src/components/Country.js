import React from 'react'
import { countryList } from '../Data'

export default function Country() {
  return (
    <div>
        <select className='list' id='name'>
                {countryList.map((country) => <option className='optionclass' key={country.name} value={country.name}>{country.name}</option>)}
                </select>
    </div>
  )
}
