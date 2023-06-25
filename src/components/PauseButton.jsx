import React from 'react'
import {FaPause} from 'react-icons/fa'

const PauseButton = ({video}) => {
  return (
    <button
        style={{
            backgroundColor:'transparent',
            border:'2px solid white',
            borderRadius:'100%',
            display:'flex',
            justifyContent:'center',
            alignContent:'center',
            margin:'1em',
            cursor:'pointer',
            width:'50px',
            height:'50px',
        }}
    
    >
      <FaPause style={{width:'25px', height:'25px', color:'white', padding:'.5rem'}} />
    </button>
  )
}

export default PauseButton
