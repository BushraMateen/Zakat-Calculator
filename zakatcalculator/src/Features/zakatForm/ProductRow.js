import React from 'react'

export default function ProductRow(props) {
  const product = props.product
    return (
      <tr>
        <td>{product.name}</td>
        <td>{product.AmtVal}</td>
        <td>{product.ZakatRate}</td>
        <td>{product.ZakatDue}</td>
      </tr>
    );
  
  
}
