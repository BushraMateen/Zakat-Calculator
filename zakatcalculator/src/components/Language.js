import React,{useState} from 'react'
import ReactLanguageSelect from "react-languages-select";
import "react-languages-select/css/react-languages-select.css";

export default function Language() {

  const [selectedLanguage, setSelectedLanguage] = useState("");

  return (
    <div  className='Dropdown-container'>
      <div className='flag-select'>
      <ReactLanguageSelect className='Dropdown'
              names={"international"}
              onSelect={(languageCode)=>setSelectedLanguage(languageCode)} />
              </div>

    </div>
  )
}
