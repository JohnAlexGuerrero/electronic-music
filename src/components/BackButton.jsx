import React from 'react'
import {FaBackward} from 'react-icons/fa'

const BackButton = ({video, onClick}) => {
  return (
    <button
      style={{
        backgroundColor:'gray',
        border:'none',
        borderRadius:'100%',
        margin:'1em',
        cursor:'pointer',
        width:'35px',
        height:'35px',
        position:'absolute',
        top:'16.8em',
        left:'12.2rem',
        zIndex:'1'
      }}
      onClick={onClick}
    >
      <FaBackward
       style={{
          width:'25px', 
          color:'white'
        }} 
      />

    </button>
  )
}

export default BackButton