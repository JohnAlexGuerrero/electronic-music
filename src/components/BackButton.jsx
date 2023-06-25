import React from 'react'
import {FaBackward} from 'react-icons/fa'

const BackButton = ({video}) => {
  return (
    <button
        style={{
            backgroundColor:'transparent',
            border:'none',
            display:'flex',
            justifyContent:'center',
            alignContent:'center',
            margin:'1em',
            cursor:'pointer',
            width:'50px',
            height:'50px',
        }}
    >
        <FaBackward style={{width:'25px', height:'25px', color:'white', padding:'.5rem'}} />
    </button>
  )
}

export default BackButton