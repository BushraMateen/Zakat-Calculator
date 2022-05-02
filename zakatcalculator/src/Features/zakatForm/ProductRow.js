import React from 'react'

export default function ProductRow(props) {
  const product = props.product
    return (
      <tr>
         <td>{props.lineNo}</td>
        <td>{product.name}</td>
        <td><input className = "text" type="text" name="name" /></td>
        <td><input className = "text" type="text" name="name" /></td>
        <td><input className = "text" type="text" name="name" /></td>
      </tr>
    );
  
  
}
