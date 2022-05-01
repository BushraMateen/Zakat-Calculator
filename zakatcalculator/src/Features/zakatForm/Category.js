import React from 'react'
import  { useState, useEffect } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export default function Category(props) {
    let [openCategory, setopenCategory] = useState(false);

    useEffect(() => {
        props.HandleCategoryToggle(openCategory)
    }, [openCategory])
    
    const handleCategoryClick = () =>{
        setopenCategory(!openCategory)
        //props.HandleCategoryToggle(openCategory)
        //props.handleCategoryName(props.Category)
    }
  return (
    <button className='expand-btn' onClick={handleCategoryClick}>
        
          {openCategory ? <AiOutlineMinus /> : <AiOutlinePlus />}

          {props.Category}
        </button>
  )
}
