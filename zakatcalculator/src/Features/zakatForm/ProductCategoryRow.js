import React, {useState,useContext} from 'react'
import Category from './Category';
import ProductRow from './ProductRow';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import {UserContext} from './Context';
import {useAuth0} from '@auth0/auth0-react';

export default function ProductCategoryRow(props) {

  const [showProduct, setShowProduct] = useState(true)

  const { isAuthenticated, user} = useAuth0();

  const nonEditableIds = [14,15,16];

   const { formState, dispatch } = useContext(UserContext);



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
    dispatch({ 
      type: 'User Input',
      field: 'UserId',
      payload: user.sub,
    })

   }

  const handleCategoryClick = () =>{
    setShowProduct(!showProduct)
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
      {showProduct && (<>
      <tr>
        <td className='center-text'>1</td>
        <td>Personal cash on hand and in bank account</td>
        <td className='center-text'>
          <input
            className="text"
            type="text"
            name='PW_PersonalCash_Hand_Bank_AmtVal'
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
            name='PW_TotalValueof_Gold_silver_AmtVal'
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
            name='PW_TotalValueof_stocks_shares_bonds_AmtVal'
            onChange={handleChange}
            placeholder={'A'} />
        </td>

        <td className='center-text'>2.5%</td>
        <td className='center-text'></td>
      </tr>
      <tr>
        <td className='center-text'>4</td>
        <td>Total Value of retirement accounts and pension plans</td>
        <td className='center-text'>
          <input
            className="text"
            type="text"
            name='PW_TotalcashValueof_retirement_pansion_AmtVal'
            onChange={handleChange}
            placeholder={'A'} />
        </td>

        <td className='center-text'>2.5%</td>
        <td className='center-text'></td>
      </tr>
      <tr>
        <td className='center-text'>5</td>
        <td>Loans made to others and expect to be paid back</td>
        <td className='center-text'>
          <input
            className="text"
            type="text"
            name='PW_Loans_tobe_recievable_AmtVal'
            onChange={handleChange}
            placeholder={'A'} />
        </td>

        <td className='center-text'>2.5%</td>
        <td className='center-text'></td>
      </tr>
      <tr>
        <td className='center-text'>6</td>
        <td>other expected receivables such as estimated tax refunds,refundable
          deposits and salary or professional payments you are entitled to as of zakat due date</td>
        <td className='center-text'>
          <input
            className="text"
            type="text"
            name='PW_Other_expecected_recievables_AmtVal'
            onChange={handleChange}
            placeholder={'A'} />
        </td>
        

        <td className='center-text'>2.5%</td>
        <td className='center-text'></td>
      </tr>
      </>)}
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
        <td className='center-text'>7</td>
        <td>Business cash on hand and in bank accounts</td>
        <td className='center-text'>
          <input
            className="text"
            type="text"
            name='BW_BusinessCash_Hand_Bank_AmtVal'
            onChange={handleChange}
            placeholder={'A'} />
        </td>

        <td className='center-text'>2.5%</td>
        <td className='center-text'></td>
      </tr>
      <tr>
        <td className='center-text'>8</td>
        <td>Net value of business inventory or any trade goods</td>
        <td className='center-text'>
          <input
            className="text"
            type="text"
            name='BW_Netvalueof_business_tradegoods_AmtVal'
            onChange={handleChange}
            placeholder={'A'} />
        </td>

        <td className='center-text'>2.5%</td>
        <td className='center-text'></td>
      </tr>
      <tr>
        <td className='center-text'>9</td>
        <td>Total business receivable s as of zakat due date</td>
        <td className='center-text'>
          <input
            className="text"
            type="text"
            name='BW_Total_business_recievables_AmtVal'
            onChange={handleChange}
            placeholder={'A'} />
        </td>

        <td className='center-text'>2.5%</td>
        <td className='center-text'></td>
      </tr>
      <tr>
        <td className='center-text'>10</td>
        <td>Net income from business or exploited assets during the year</td>
        <td className='center-text'>
          <input
            className="text"
            type="text"
            name='BW_NetIncomefrom_business_exploitedassets_duringyear_AmtVal'
            onChange={handleChange}
            placeholder={'A'} />
        </td>

        <td className='center-text'>2.5%</td>
        <td className='center-text'></td>
      </tr>
      <tr>
        <td className='center-text'>11</td>
        <td>Current value of real state properties held for investment or sale</td>
        <td className='center-text'>
          <input
            className="text"
            type="text"
            name='BW_Currentvalueof_held_realestateproperties_AmtVal'
            onChange={handleChange}
            placeholder={'A'} />
        </td>

        <td className='center-text'>2.5%</td>
        <td className='center-text'></td>
      </tr>
      <tr>
        <td className='center-text'>12</td>
        <td>Zakat Total</td>
        <td className='center-text'>
          <input
            className="text"
            type="text"
            name='BW_Zakat_Total_AmtVal'
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
        <td className='center-text'>13</td>
        <td>Outstanding Neccessary Debts</td>
        <td className='center-text'>
          <input
            className="text"
            type="text"
            name='D_Outstanding_necessary_debts_AmtVal'
            onChange={handleChange}
            placeholder={'A'} />
        </td>

        <td className='center-text'>2.5%</td>
        <td className='center-text'></td>
      </tr>
      <tr>
        <td className='center-text'>14</td>
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
        <td className='center-text'>15</td>
        <td>Total Deductions</td>
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
        <td>Remaining Zakat Due</td>
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
