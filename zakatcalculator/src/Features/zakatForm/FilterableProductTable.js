import React, {useContext, useEffect} from 'react'
import ProductTable from './ProductTable'
import { UserContext } from './Context';
import { useModal } from 'react-hooks-use-modal';

export default function FilterableProdcutTable() {
  
  const [Modal,open,close] = useModal()
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
        <input
          className = 'claculate-btn'
          type="submit"
          value="calculate"
          onClick={open}
        />
        <Modal>
        <div className='pop-up'>
          <h4>zakat Payable : {table[0].D_Remaining_Zakat_Due_ZakatDue}</h4>
          <button  className = 'claculate-btn' onClick={close}>CLOSE</button>
        </div>
      </Modal>
    
      </form>
   
  </div>
  )
}
