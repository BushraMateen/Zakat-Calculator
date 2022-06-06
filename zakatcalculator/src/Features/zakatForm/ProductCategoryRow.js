import React, {useState,useContext} from 'react'
import Category from './Category';
import ProductRow from './ProductRow';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import {UserContext} from './Context';


export default function ProductCategoryRow(props) {

  const [showProduct, setShowProduct] = useState(true)

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

   }

  let category = props.category;


  let products = props.products.filter((product) => product.category === category);
  products.sort((a,b) => a.Line - b.Line);
  
   

  // console.log('ProductCategoryRow',props);
  // console.log('ProductCategoryRow',category);
  // console.log('ProductCategoryRow',products);
  // console.log('Product.length',products.length);

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
          <div className='expand-btn'>
            Personal Wealth
          </div>
        </td>
        <td >
        </td>
        <td >
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <td className='center-text'>1</td>
        <td>Personal cash on hand and in bank account</td>
        <td className='center-text'>
          <input
            className="text"
            type="text"
            name={'A'}
            onChange={handleChange}
            placeholder={'A'} />
        </td>

        <td className='center-text'>2.5%</td>
        <td className='center-text'></td>
      </tr>
      <tr>
        <td className='center-text'>2</td>
        <td>Total value of gold,silver and precious items</td>
        <td className='center-text'>
          <input
            className="text"
            type="text"
            name={'A'}
            onChange={handleChange}
            placeholder={'A'} />
        </td>

        <td className='center-text'>2.5%</td>
        <td className='center-text'></td>
      </tr>
      <tr>
        <td className='center-text'>3</td>
        <td>Total value of stocks,shares and bonds</td>
        <td className='center-text'>
          <input
            className="text"
            type="text"
            name={'A'}
            onChange={handleChange}
            placeholder={'A'} />
        </td>

        <td className='center-text'>2.5%</td>
        <td className='center-text'></td>
      </tr>
      <tr>
        <td className='center-text'>4</td>
        <td>Total Value of stocks,shares and bonds</td>
        <td className='center-text'>
          <input
            className="text"
            type="text"
            name={'A'}
            onChange={handleChange}
            placeholder={'A'} />
        </td>

        <td className='center-text'>2.5%</td>
        <td className='center-text'></td>
      </tr>
      <tr>
        <td className='center-text'>5</td>
        <td>Total cash value of retirement accounts and pensions plans</td>
        <td className='center-text'>
          <input
            className="text"
            type="text"
            name={'A'}
            onChange={handleChange}
            placeholder={'A'} />
        </td>

        <td className='center-text'>2.5%</td>
        <td className='center-text'></td>
      </tr>
      <tr>
        <td className='center-text'>6</td>
        <td>Loans made to others and expect to be paid back</td>
        <td className='center-text'>
          <input
            className="text"
            type="text"
            name={'A'}
            onChange={handleChange}
            placeholder={'A'} />
        </td>

        <td className='center-text'>2.5%</td>
        <td className='center-text'></td>
      </tr>
        <tr>
          <td className='center-text'>7</td>
          <td>other expected receivables such as estimated tax refunds,refundable
            deposits and salary or professional payments you are entitled to as of zakat due date</td>
          <td className='center-text'>
            <input
              className="text"
              type="text"
              name={'A'}
              onChange={handleChange}
              placeholder={'A'} />
          </td>

          <td className='center-text'>2.5%</td>
          <td className='center-text'></td>
        </tr>
        <tr>
          <td>
            <button className='expand-btn' onClick={handleCategoryClick}>
              {showProduct ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </td>
          <td >
            <div className='expand-btn'>
              Business Wealth
            </div>
          </td>
          <td >
          </td>
          <td >
          </td>
          <td>
          </td>
        </tr>
        <tr>
          <td className='center-text'>8</td>
          <td>Business cash on hand and in bank accounts</td>
          <td className='center-text'>
            <input
              className="text"
              type="text"
              name={'A'}
              onChange={handleChange}
              placeholder={'A'} />
          </td>

          <td className='center-text'>2.5%</td>
          <td className='center-text'></td>
        </tr>
        <tr>
          <td className='center-text'>9</td>
          <td>Net value of business inventory or any trade goods</td>
          <td className='center-text'>
            <input
              className="text"
              type="text"
              name={'A'}
              onChange={handleChange}
              placeholder={'A'} />
          </td>

          <td className='center-text'>2.5%</td>
          <td className='center-text'></td>
        </tr>
        <tr>
          <td className='center-text'>10</td>
          <td>Total business receivable s as of zakat due date</td>
          <td className='center-text'>
            <input
              className="text"
              type="text"
              name={'A'}
              onChange={handleChange}
              placeholder={'A'} />
          </td>

          <td className='center-text'>2.5%</td>
          <td className='center-text'></td>
        </tr>
        <tr>
          <td className='center-text'>11</td>
          <td>Net incomefrom business or exploited assets during the year</td>
          <td className='center-text'>
            <input
              className="text"
              type="text"
              name={'A'}
              onChange={handleChange}
              placeholder={'A'} />
          </td>

          <td className='center-text'>2.5%</td>
          <td className='center-text'></td>
        </tr>
        <tr>
          <td className='center-text'>12</td>
          <td>Current value of real state properties held for investment or sale</td>
          <td className='center-text'>
            <input
              className="text"
              type="text"
              name={'A'}
              onChange={handleChange}
              placeholder={'A'} />
          </td>

          <td className='center-text'>2.5%</td>
          <td className='center-text'></td>
        </tr>
        <tr>
          <td className='center-text'>13</td>
          <td>Zakta Total</td>
          <td className='center-text'>
            <input
              className="text"
              type="text"
              name={'A'}
              onChange={handleChange}
              placeholder={'A'} />
          </td>

          <td className='center-text'>2.5%</td>
          <td className='center-text'></td>
        </tr>
        <tr>
          <td>
            <button className='expand-btn' onClick={handleCategoryClick}>
              {showProduct ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </td>
          <td >
            <div className='expand-btn'>
              Deductions
            </div>
          </td>
          <td >
          </td>
          <td >
          </td>
          <td>
          </td>
        </tr>

        <tr>
          <td className='center-text'>14</td>
          <td>Outstanding Neccessary Debts</td>
          <td className='center-text'>
            <input
              className="text"
              type="text"
              name={'A'}
              onChange={handleChange}
              placeholder={'A'} />
          </td>

          <td className='center-text'>2.5%</td>
          <td className='center-text'></td>
        </tr>
        <tr>
          <td className='center-text'>15</td>
          <td>Zakat paid in advance during the years</td>
          <td className='center-text'>
            <input
              className="text"
              type="text"
              name={'A'}
              onChange={handleChange}
              placeholder={'A'} />
          </td>

          <td className='center-text'>2.5%</td>
          <td className='center-text'></td>
        </tr>
        <tr>
          <td className='center-text'>16</td>
          <td>Total deduction</td>
          <td className='center-text'>
            <input
              className="text"
              type="text"
              name={'A'}
              onChange={handleChange}
              placeholder={'A'} />
          </td>

          <td className='center-text'>2.5%</td>
          <td className='center-text'></td>
        </tr>
      </>
  )
}
