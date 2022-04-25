import React from 'react'
import { languageList } from './Data3'

export default function Language() {
  return (
    <div>
        <select className='list' id='name'>
                {languageList.map((language) => <option className='optionclass' key={language.language} value={language.language}>{language.language}</option>)}
                </select>
    </div>
  )
}
