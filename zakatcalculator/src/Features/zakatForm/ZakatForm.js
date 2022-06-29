import React, {useContext, useEffect, useState} from 'react'
import ZakatFormHeader from './ZakatFormHeader'
import { UserContext } from './Context';
import { useModal } from 'react-hooks-use-modal';
import {useAuth0} from '@auth0/auth0-react';



export default function ZakatForm() {
  
  const [Modal,open,close] = useModal()
  const { formState, setTable, table} = useContext(UserContext);
  const [isCalculate,setIsCalculate] = useState(false);
  const { user} = useAuth0();

    let handleSubmit = (e)  => {
      //console.log('formstate',formState)

      e.preventDefault();

      if(e.nativeEvent.submitter.className !== 'expand-btn') // && e.nativeEvent.submitter.className != ''*
      {
        fetch('http://127.0.0.1:8000/entries/', {
          method: "POST",
          body: JSON.stringify({
          formState: formState
          }),
          headers: {
              'Content-Type': 'application/json',
             
          },
        })
        .then(res => res.json())
         .then(
           (result) => {
             console.log('result post:', result)
             //getTable();
             setIsCalculate(!isCalculate);
             open();
           },
           (error) => {
             console.log('error', error)
           }
         )
      }
     
    }

    useEffect(() => {
      getTable()
    
    }, [isCalculate])
    
    //http://127.0.0.1:8000
    //https://zakat-api.herokuapp.com/
    /**fecthing zakattable data */ 
    let getTable = async () => {
      let response = await fetch('http://127.0.0.1:8000/table/'+ user.sub)
      let data = await response.json()
      console.log('data',data)
      setTable(data)
     

    }
    
    //console.log('data',table)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ZakatFormHeader/>
        <input
          className = 'claculate-btn'
          type="submit"
          value="calculate"
          // onClick={open}
         
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
