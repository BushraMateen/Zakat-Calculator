import React, {useContext, useEffect} from 'react'
import ProductTable from './ProductTable'
import { UserContext } from './Context';

export default function FilterableProdcutTable() {

  const { formState, setTable, table} = useContext(UserContext);
  

    let handleSubmit = (e)  => {
      console.log('handleSubmit clicked')
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
          getTable();
        },
        (error) => {
          console.log('error', error)
        }
      )
    }

    useEffect(() => {
      getTable()
    
    }, [table])
    
    
    let getTable = async () => {
      let response = await fetch('http://127.0.0.1:8000/table/')
      let data = await response.json()
      setTable(data)
    }
    

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ProductTable/>
        <input className = 'claculate-btn' type="submit" value="Calculate" />
      </form>
   
  </div>
  )
}
