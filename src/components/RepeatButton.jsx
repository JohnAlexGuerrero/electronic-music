import React from 'react'
import {FaRepeat} from 'react-icons/fa6'

const RepeatButton = ({video}) => {
  return (
    <button style={{
        backgroundColor:'transparent',
        border:'none',
        cursor:'pointer',
        width:'30px',
        height:'30px',
      }}
    >
        <FaRepeat style={{width:'25px', color:'white'}}/>
    </button>
  )
}

export default RepeatButton