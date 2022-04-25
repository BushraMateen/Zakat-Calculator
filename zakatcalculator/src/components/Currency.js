import React from 'react'
import { currencyList } from './Data2'

export default function Currency() {
  return (
    <div>
        <select className='list' id='name'>
                {currencyList.map((currency) => <option className='optionclass' key={currency.currency} value={currency.currency}>{currency.currency}</option>)}
                </select>
    </div>
  )
}
