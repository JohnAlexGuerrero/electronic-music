import React from 'react'
import {FaPause} from 'react-icons/fa'

const PauseButton = ({video, onClick}) => {
  return (
    <button
      style={{
        backgroundColor:'gray',
        border:'none',
        borderRadius:'100%',
        margin:'1em',
        cursor:'pointer',
        width:'40px',
        height:'40px',
        position:'absolute',
        top:'16.5em',
        left:'9.5rem',
        zIndex:'1'
    }}
    onClick={onClick}
    
    >
      <FaPause style={{width:'35px', color:'white'}} />
    </button>
  )
}

export default PauseButton
