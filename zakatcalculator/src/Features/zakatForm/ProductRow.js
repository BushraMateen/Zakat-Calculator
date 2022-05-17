import React from 'react'
import Category from './Category'

export default function ProductRow(props) {
  const product = props.product
    return (
      <tr>
         <td className='center-text'>{props.lineNo}</td>
        <td>{product.name}</td>
        <td className='center-text'><input className = "text" type="text" name="name" placeholder={props.product.AmtVal}/></td>
        <td className='center-text'>{product.ZakatRate}</td>
        <td className='center-text'>{product.ZakatDue}</td>
      </tr>
    );
  
  
}
