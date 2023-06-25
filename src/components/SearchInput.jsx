import React from 'react'
import {FaSearch} from 'react-icons/fa'

const SearchInput = ({value, HandleSearchText}) => {
  return (
    <div
        style={{display:'flex',margin:'1rem' ,border:'1px solid #BBBB', padding:'.1em', borderRadius:'20px', backgroundColor:'#BBBB'}}
    >
        <FaSearch
            style={{width:'30px', height:'30px', color:'gray', padding:'.5rem'}} 
        />

        <input 
            type="text"
            placeholder='Search'
            value={value}
            onInput={newText => HandleSearchText(newText)}
            style={{border:'none', outline:'none', padding:'.5em', width:'100%'  ,backgroundColor:'transparent', fontSize:'15px'}}
        />
    </div>
  )
}

export default SearchInput