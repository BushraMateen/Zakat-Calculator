import React from 'react'
import Category from './Category'

export default function ProductRow(props) {
  const product = props.product

  const nonEditableIds = [14,15,16];

  //console.log('ProductRow', product);

    return (
      <tr>
         <td className='center-text'>{props.lineNo}</td>
        <td>{product.name}</td>
        {(nonEditableIds.indexOf(product.id) !== -1) ? <td className='center-text'></td> : <td className='center-text'><input className = "text" type="text" name="name"  placeholder={props.product.AmtVal}/></td>}
        
        <td className='center-text'>{product.ZakatRate}</td>
        <td className='center-text'>{product.ZakatDue}</td>
      </tr>
    );
  
  
}
