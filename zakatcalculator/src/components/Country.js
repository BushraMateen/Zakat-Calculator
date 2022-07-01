import React,{useState} from 'react'
import { CountryDropdown } from "react-country-region-selector";
//import './Country.css'

export default function Country() {

  const [country, setCountry] = useState("");

  return (
    <div className='Dropdown-container'>
        <CountryDropdown className='Dropdown'
        value={country}
        onChange={(val) => setCountry(val)}
      />{" "}
                
    </div>
  )
}
