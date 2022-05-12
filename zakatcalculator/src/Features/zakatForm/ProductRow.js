import React from 'react'
import Category from './Category'

export default function ProductRow(props) {
  const product = props.product
    return (
      <tr>
         <td>{props.lineNo}</td>
        <td>{product.name}</td>
        <td><input className = "text" type="text" name="name" placeholder={props.product.AmtVal}/></td>
        <td>{product.ZakatRate}</td>
        <td>{(props.product.AmtVal * props.product.ZakatRate)/100}</td>
      </tr>
    );
  
  
}
