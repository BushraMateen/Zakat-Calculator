import React from 'react'
import ProductTable from './ProductTable'

export default function FilterableProdcutTable(props) {
  return (
    <div>
    <ProductTable products={props.products} />
  </div>
  )
}
