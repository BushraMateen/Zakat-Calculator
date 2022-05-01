import React, {useState} from 'react'
import Category from './Category';
import ProductRow from './ProductRow';

export default function ProductCategoryRow(props) {

  let category = props.category;

  let products = props.products.filter((product) => product.category === category);
  console.log('ProductCategoryRow',props);
  console.log('ProductCategoryRow',category);
  console.log('ProductCategoryRow',products);

  const [showProduct, setShowProduct] = useState(false)

  const handleCategoryToggle = (isOpen) => {
    //console.log(isOpen)
    setShowProduct(isOpen)
  }

  return (
    <>
      <tr>
        <td colSpan="2">
          <Category Category = {category}  HandleCategoryToggle = {handleCategoryToggle}/>
        </td>
      </tr>
      {showProduct && (
          
            products.map((product, index) => {
              return (<ProductRow key = {index} product = {product}/>)
            })
          
       )}
      
    </>

     
  )
}
