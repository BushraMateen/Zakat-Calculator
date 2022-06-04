import React, {useContext} from 'react'
import ProductTable from './ProductTable'
import { UserContext } from './Context';

export default function FilterableProdcutTable(props) {

  const { formState } = useContext(UserContext);

    let handleSubmit = (e)  => {

      e.preventDefault();
      
      fetch('http://127.0.0.1:8000/entries/', {
       method: "POST",
       body: JSON.stringify({
        formState: formState
       }),
       headers: {
           'Content-Type': 'application/json'
       },
     })
     .then(res => res.json())
      .then(
        (result) => {
          console.log('result post', result)
        },
        (error) => {
          console.log('error', error)
        }
      )
    }

    

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ProductTable products={props.products} />
        <input className = 'claculate-btn' type="submit" value="Calculate" />
      </form>
   
  </div>
  )
}
