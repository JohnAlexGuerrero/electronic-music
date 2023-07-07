import React from 'react'
import {FaBackward} from 'react-icons/fa'

const BackButton = ({video, onClick}) => {
  return (
    <button
      style={{
        backgroundColor:video.themeColor,
        boxShadow:'0 10px 10px rgba(0, 0, 0, 0.16), 0 5px 9px rgba(0, 0, 0, 0.23)',
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