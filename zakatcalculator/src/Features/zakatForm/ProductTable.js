import React, {useState} from 'react'
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default function ProductTable(props) {

  //const [showProduct, setShowProduct] = useState(false)
  //const [category, setcategory] = useState('')

  let rows = [];
  let lastCategory = null;

  
  props.products.sort((a,b) => a.Line - b.Line );



  // const handleCategoryName = (category) => {
  //   //console.log(category)
  //   setcategory(category)
  // }

  props.products.forEach((product) => {
    if (product.category !== lastCategory) {

      rows.push(product.category);

        // <ProductCategoryRow 
        // HandleCategoryToggle = {handleCategoryToggle}
        // HandleCategoryName = {handleCategoryName}
        //   category={product.category}
        //   key={product.category} />
      //);
    }
    // rows.push(
    //   <ProductRow
    //     product={product}
    //     key={product.name} /> 
      
    // );
    
    lastCategory = product.category;
  });

  console.log('row category',rows);

  return (
    <div className='table'>
    <table>
      <thead>
        <tr>
          <th>Line</th>
          <th>Line item</th>
           <th>Amtval(A)</th>
           <th>ZakatRate(R)</th>
           <th>ZakatDue(z)</th>
        </tr>
      </thead>
      <tbody>

      {
        rows.map((category) => {
          return (
             <ProductCategoryRow 
                
                //HandleCategoryName = {handleCategoryName}
                category={category}
                key={category}
                products = {props.products}
                 />
            )
      })
    }
      </tbody>
    </table>
    </div>
  );

}