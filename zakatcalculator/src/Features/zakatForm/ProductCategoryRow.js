import React, {useState} from 'react'
import Category from './Category';
import ProductRow from './ProductRow';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


export default function ProductCategoryRow(props) {

  let category = props.category;

  let products = props.products.filter((product) => product.category === category);
  console.log('ProductCategoryRow',props);
  console.log('ProductCategoryRow',category);
  console.log('ProductCategoryRow',products);
  // console.log('Product.length',products.length);


  const [showProduct, setShowProduct] = useState(false)

 
  const handleCategoryClick = () =>{
    setShowProduct(!showProduct)
    //props.HandleCategoryToggle(openCategory)
    //props.handleCategoryName(props.Category)
}

  return (
    <>
      <tr>
        <td>
        <button className='expand-btn' onClick={handleCategoryClick}>
          {showProduct ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
       
        </td>
        <td >
          <Category Category = {category} />
        </td>
        <td >
        </td>
        <td >
        </td>
        <td >
         
        </td>
      </tr>
      {showProduct && (
          
            products.map((product, index) => {
              console.log(products.length-index)
              return (<ProductRow key = {index} product = {product} lineNo = {product.id} />)
            })
          
       )}
      
    </>
  )
}
