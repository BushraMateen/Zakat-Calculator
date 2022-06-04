import React, {useContext,  useEffect} from 'react'
import Category from './Category'
import {UserContext} from './Context';



// const reducer = (state, action) => {
//   if( action.type === 'ADD_VALUE') {
//     return [...state, action.path]
// }   
// }

export default function ProductRow(props) {
  const product = props.product

  const nonEditableIds = [14,15,16];

   const { formState, dispatch } = useContext(UserContext);

   //const  [state, dispatch] = useReducer(reducer, []);
  //console.log('ProductRow', product);
   //console.log('dbObject', dbObject);

   //setdbObject(1);
   let handleChange = (event) => {

    console.log('handleChange');
    
    const target = event.target;
    const value = target.value;
    const name = target.name;

    //setdbObject({...dbObject, [name]: value});

    dispatch({ 
      type: 'HANDLE INPUT TEXT',
      field: name, 
      payload: value,
    })

   console.log(product);
   //console.log('dbObject', dbObject);
   console.log('reducer object', formState);

   }

   useEffect(() => {
    console.log('reducer object', formState);
   }, [formState])
   

    return (
      <tr>
         <td className='center-text'>{props.lineNo}</td>
        <td>{product.name}</td>
        {(nonEditableIds.indexOf(product.id) !== -1) ? <td className='center-text'></td> 
        : <td className='center-text'>
            <input 
              className = "text" 
              type="text" 
              name={'A' + product.Line} 
              onChange={handleChange} 
              placeholder={formState['A'+ product.Line]}/>
          </td>}
        
        <td className='center-text'>{product.ZakatRate}</td>
        <td className='center-text'>{product.ZakatDue}</td>
      </tr>
    );
  
  
}
